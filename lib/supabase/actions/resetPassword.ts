'use server'

import {createClient} from "@/lib/supabase/client";

export async function resetPasswordAction(email: string) {

    const supabase = await createClient();

    const {data, error} = await supabase.auth.resetPasswordForEmail(email);

    if (error) return {error: error.message}
}

export async function updatePasswordAction(newPassword: string) {

    const supabase = await createClient();

    const {error} = await supabase.auth.updateUser({
        password: newPassword
    });

    if (error) return {error: error.message}
}