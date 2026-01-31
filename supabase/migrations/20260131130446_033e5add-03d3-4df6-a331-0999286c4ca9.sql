-- Create table for appreciation counts
CREATE TABLE public.appreciations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reaction_type TEXT NOT NULL UNIQUE,
  count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.appreciations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read appreciations (public data)
CREATE POLICY "Appreciations are viewable by everyone" 
ON public.appreciations 
FOR SELECT 
USING (true);

-- Allow anyone to update appreciations (for incrementing counts)
CREATE POLICY "Anyone can update appreciation counts" 
ON public.appreciations 
FOR UPDATE 
USING (true);

-- Insert initial appreciation data
INSERT INTO public.appreciations (reaction_type, count) VALUES
  ('love', 42),
  ('amazing', 38),
  ('stellar', 27),
  ('fire', 31),
  ('refreshing', 24);

-- Create table for contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact messages (public form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Create function to increment appreciation count
CREATE OR REPLACE FUNCTION public.increment_appreciation(reaction TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_count INTEGER;
BEGIN
  UPDATE public.appreciations 
  SET count = count + 1, updated_at = now()
  WHERE reaction_type = reaction
  RETURNING count INTO new_count;
  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Enable realtime for appreciations
ALTER PUBLICATION supabase_realtime ADD TABLE public.appreciations;