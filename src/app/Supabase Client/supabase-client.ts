import {createClient} from "@supabase/supabase-js";

export const supabase = createClient(
    "https://addizepkdbdpmdoduamj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkZGl6ZXBrZGJkcG1kb2R1YW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2Mjk1NzIsImV4cCI6MjA2NjIwNTU3Mn0.oPuIwmI4sNHV6mJ9Ntkrvm5Hz0FD6ci7Qv9Ve92YRO0"
) 