
-- Fix 1: Drop the overly permissive UPDATE policy on appreciations
DROP POLICY IF EXISTS "Anyone can update appreciation counts" ON public.appreciations;

-- Fix 2: Restrict appreciation updates to go through the increment_appreciation RPC only
-- No direct UPDATE policy needed since the function is SECURITY DEFINER

-- Fix 3: Add a SELECT policy for contacts restricted to authenticated admin users
-- For now, we use a user_roles based approach via has_role function
-- First create the role infrastructure

-- Create app_role enum if not exists
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Create user_roles table
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Only admins can read user_roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Admin can read contacts
CREATE POLICY "Admins can read contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
