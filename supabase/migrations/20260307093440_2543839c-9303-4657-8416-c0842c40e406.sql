
-- Add validation trigger for contacts table (using triggers instead of CHECK constraints per guidelines)
CREATE OR REPLACE FUNCTION public.validate_contact_input()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF char_length(NEW.name) < 2 OR char_length(NEW.name) > 100 THEN
    RAISE EXCEPTION 'Name must be between 2 and 100 characters';
  END IF;
  IF char_length(NEW.message) < 10 OR char_length(NEW.message) > 2000 THEN
    RAISE EXCEPTION 'Message must be between 10 and 2000 characters';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_contact_before_insert
  BEFORE INSERT ON public.contacts
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_contact_input();
