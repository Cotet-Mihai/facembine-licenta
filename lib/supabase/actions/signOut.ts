'use server'

import {createClient} from "@/lib/supabase/client";
import {redirect} from "next/navigation";

export async function signOutAction() {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut()

    if (error) {
        return {error: error.message}
    }

    redirect("/");
}