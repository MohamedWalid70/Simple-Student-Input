import {createClient} from "@supabase/supabase-js";
import { environment } from "../../environments/environment.development";

export const supabase = createClient(
    environment.projectUrl,
    environment.apiKey
) 