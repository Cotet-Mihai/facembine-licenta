import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// This check can be removed, it is just for tutorial purposes
export const hasEnvVars =
    process.env.FACEMBINE_PUBLIC_SUPABASE_URL &&
    process.env.FACEMBINE_PUBLIC_SUPABASE_ANON_KEY;
