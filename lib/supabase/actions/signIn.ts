'use server'

import {createClient} from "@/lib/supabase/client";
import {redirect} from "next/navigation";

export async function signInWithEmailAction(formData: FormData) {

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if (error) return {error: error.message}

    redirect("/");
}