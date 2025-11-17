import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Field, FieldDescription, FieldGroup, FieldLabel,} from "@/components/ui/field"
import {Input} from "@/components/ui/input"
import React from "react";

export default function SignupForm({
                                       className,
                                       ...props
                                   }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6 max-w-xl", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Creează-ți contul</CardTitle>
                    <CardDescription>
                        Introdu adresa ta de e-mail mai jos pentru a-ți crea contul
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Field className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="last-name">Nume</FieldLabel>
                                    <Input id="last-name" type="text" placeholder={'Popescu'} required/>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="first-name">
                                        Prenume
                                    </FieldLabel>
                                    <Input id="first-name" type="text" placeholder={'Ion'} required/>
                                </Field>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <Field className="grid grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="password">Parola</FieldLabel>
                                        <Input id="password" type="password" required/>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="confirm-password">
                                            Confirmă Parola
                                        </FieldLabel>
                                        <Input id="confirm-password" type="password" required/>
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
