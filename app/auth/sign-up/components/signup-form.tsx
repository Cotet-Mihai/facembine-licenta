'use client'

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Field, FieldDescription, FieldGroup, FieldLabel,} from "@/components/ui/field"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import {Input} from "@/components/ui/input"
import React, {useState} from "react";
import {toast} from "sonner";

export default function SignupForm({
                                       className,
                                       ...props
                                   }: React.ComponentProps<"div">) {
    const supabase = createClientComponentClient();
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword ) {
            toast.error('Parolele nu coincid!')
            return;
        }

        if (password.length < 8) {
            toast.error("Parola trebuie să aibă cel puțin 8 caractere.")
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: "https://civicom.ro/auth/confirm?next=/dashboard"
            }
        })

        if (error) {
            toast.error(error.message)
        } else {
            toast.success("Email-ul de verificare a fost trimis!")
            setLastName("")
            setFirstName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        }
    };

    return (
        <div className={cn("flex flex-col gap-6 max-w-xl", className)} {...props}>
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FieldGroup>
                            <Field className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="last-name">Nume</FieldLabel>
                                    <Input id="last-name" type="text" placeholder={'Popescu'} value={lastName}
                                           onChange={(e) => setLastName(e.target.value)} required/>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="first-name">
                                        Prenume
                                    </FieldLabel>
                                    <Input id="first-name" type="text" placeholder={'Ion'} value={firstName}
                                           onChange={(e) => setFirstName(e.target.value)} required/>
                                </Field>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com" value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Field>
                            <Field>
                                <Field className="grid grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="password">Parola</FieldLabel>
                                        <Input id="password" type="password" value={password}
                                               onChange={(e) => setPassword(e.target.value)} required/>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="confirm-password">
                                            Confirmă Parola
                                        </FieldLabel>
                                        <Input id="confirm-password" type="password" value={confirmPassword}
                                               onChange={(e) => setConfirmPassword(e.target.value)} required/>
                                    </Field>
                                </Field>
                                <FieldDescription>
                                    Trebuie să aibă cel puțin 8 caractere.
                                </FieldDescription>
                            </Field>
                            <Field>
                                <Button className={'bg-green-500 text-white hover:bg-green-900'} type="submit">Creează cont</Button>
                                <FieldDescription className="text-center">
                                    Ai deja un cont? <a href="/auth/sign-in">Conectează-te</a>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                Dând clic pe pe &apos;Creează cont&apos;, sunteți de acord cu <a href="#">Termenii și condițiile</a>{" "}
                și cu <a href="#">Politica de confidențialitate</a>.
            </FieldDescription>
        </div>
    )
}
