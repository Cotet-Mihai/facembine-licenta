'use client'

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Field, FieldDescription, FieldGroup, FieldLabel,} from "@/components/ui/field"
import {Input} from "@/components/ui/input"
import {toast} from "sonner";
import React from "react";
import {signupAction} from "@/lib/supabase/actions/signUp";

export default function SignupForm({
                                       className,
                                       ...props
                                   }: React.ComponentProps<"div">) {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const result = await signupAction(formData);

        if (result?.error) {
            toast.error(result.error)
        } else {
            toast.success("Verifică emailul pentru confirmare!");
        }
    }

    return (
        <div className={cn("flex flex-col gap-6 max-w-xl", className)} {...props}>
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FieldGroup>
                            <Field className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="lastName">Nume</FieldLabel>
                                    <Input name="lastName" type="text" placeholder={'Popescu'} required/>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="firstName">
                                        Prenume
                                    </FieldLabel>
                                    <Input name="firstName" type="text" placeholder={'Ion'} required/>
                                </Field>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <Field className="grid grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="password">Parola</FieldLabel>
                                        <Input name="password" type="password" required/>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="confirmPassword">
                                            Confirmă Parola
                                        </FieldLabel>
                                        <Input name="confirmPassword" type="password" required/>
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
