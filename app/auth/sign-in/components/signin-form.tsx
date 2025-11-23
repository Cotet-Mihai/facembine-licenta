'use client'

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator,} from "@/components/ui/field"
import {Input} from "@/components/ui/input"
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "sonner";
import {signInWithEmailAction} from "@/lib/supabase/actions/signIn";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/animate-ui/components/radix/dialog';
import {Label} from "@/components/ui/label";
import {resetPasswordAction} from "@/lib/supabase/actions/resetPassword";

export function SigninForm({
                               className,
                               ...props
                           }: React.ComponentProps<"form">) {

    const [email, setEmail] = useState("");

    async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const result = await signInWithEmailAction(formData);

        if (result?.error) {
            toast.error(result.error)
        }
    }

    async function handleForgetPassword(e: React.MouseEvent<HTMLSpanElement>) {
        if (!email) {
            return toast.error("Te rog introdu email-ul.");
        }

        const result = await resetPasswordAction(email);

        if (result?.error) {
            console.error(result.error);
            toast.error("A apărut o eroare.");
        } else {
            toast.success("Email trimis!");
        }
    }

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSignIn}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Autentifică-te</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        Să facem o lume mai bună pentru toți!
                    </p>
                </div>
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input name="email" type="email" placeholder="m@example.com" required/>
                </Field>
                <Field>
                    <div className="flex items-center">
                        <FieldLabel htmlFor="password" className={'mr-auto'}>Parolă</FieldLabel>
                        <Dialog>
                            <DialogTrigger>
                                <span className="text-sm underline-offset-4 hover:underline cursor-pointer">
                                  Ați uitat parola?
                                </span>
                            </DialogTrigger>
                            <DialogContent className="max-w-md p-6">
                                <DialogHeader>
                                    <DialogTitle>Resetează Parola</DialogTitle>
                                    <DialogDescription>
                                        Introdu adresa de email asociată contului tău, iar noi îți vom trimite un link
                                        pentru resetarea parolei.
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid gap-3">
                                    <Label htmlFor="email">Email</Label>
                                    <Input name="email" placeholder="m@exemple.com" onChange={(e) => setEmail(e.target.value)}/>
                                </div>

                                <DialogFooter className="mt-4 flex justify-end gap-2">
                                    <Button
                                        type="submit"
                                        className="py-2"
                                        onClick={handleForgetPassword}
                                    >
                                        Trimite link resetare
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <Input name="password" type="password" required/>
                </Field>
                <Field>
                    <Button type="submit">Conectează-te</Button>
                </Field>
                <FieldSeparator>Sau continuați cu</FieldSeparator>
                <Field>
                    <Button variant="outline" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                fill="currentColor"
                            />
                        </svg>
                        Autentificare cu GitHub
                    </Button>
                    <FieldDescription className="text-center">
                        Nu aveți un cont?{" "}
                        <Link href="/auth/sign-up" className="underline underline-offset-4">
                            Înscrie-te
                        </Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
