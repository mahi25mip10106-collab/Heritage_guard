const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    "https://rnlainqqyrdljogumamu.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJubGFpbnFxeXJkbGpvZ3VtYW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU0NDE3OTIsImV4cCI6MjEwMTAxNzc5Mn0.LevwxSkggr7WIIjQCIfgTFM3zCN9vGVJHPpCP6p_qQ0"
);

module.exports = supabase;