import {
    Stepper,
    StepperContent,
    StepperIndicator,
    StepperItem,
    StepperNav,
    StepperPanel,
    StepperSeparator, StepperTitle,
    StepperTrigger,
} from '@/components/ui/stepper';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Calendar as CalendarIcon, Camera, Info, ListTodo, MapPin} from 'lucide-react';
import { Calendar } from "@/components/ui/calendar"
import {Badge} from "@/components/ui/badge";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {LoaderCircleIcon, Check} from 'lucide-react'
import React, {useState} from "react";
import { H3 } from "@/components/shared/Typography";

const steps = [
    { title: 'Informații de bază', icon: Info }, //titlu, descriere, data si ora, durata estimativă, tipul protestului
    { title: 'Locație', icon: MapPin }, // locatie, punct de intalnire, optional finish
    { title: 'Media vizuală', icon: Camera }, //imagine principala, galerie de iamgini, optional video, (sa ai optiunea de al descarca din browser)
    { title: 'Logistică', icon: ListTodo }, // Ce sa aduca participantii(pancarte, steaguri, vuvuzele, bannere), restirctii, reguli de siguranta
];

export default function StepperProtest() {

    const [currentStep, setCurrentStep] = useState(1);
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return(
        <Stepper
            value={currentStep}
            onValueChange={setCurrentStep}
            indicators={{
                completed: <Check className="size-4" />,
                loading: <LoaderCircleIcon className="size-4 animate-spin" />,
            }}
            className="space-y-8"
        >
            <StepperNav className="gap-3 mb-15">
                {steps.map((step, index) => {
                    return (
                        <StepperItem key={index} step={index + 1} className="relative flex-1 items-start">
                            <StepperTrigger className="flex flex-col items-start justify-center gap-2.5 grow" asChild>
                                <StepperIndicator className="size-8 border-2 data-[state=active]:bg-blue-500 data-[state=completed]:text-white data-[state=completed]:bg-green-500 data-[state=inactive]:bg-transparent data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground">
                                    <step.icon className="size-4" />
                                </StepperIndicator>
                                <div className="flex flex-col items-start gap-1">
                                    <div className="text-[10px] font-semibold uppercase text-muted-foreground">Pasul {index + 1}</div>
                                    <StepperTitle className="text-start text-base font-semibold group-data-[state=inactive]/step:text-muted-foreground">
                                        {step.title}
                                    </StepperTitle>
                                    <div>
                                        <Badge
                                            variant="inProgress"
                                            className="hidden group-data-[state=active]/step:inline-flex"
                                        >
                                            In Progress
                                        </Badge>

                                        <Badge
                                            variant="success"
                                            className="hidden group-data-[state=completed]/step:inline-flex"
                                        >
                                            Completed
                                        </Badge>

                                        <Badge
                                            variant="secondary"
                                            className="hidden group-data-[state=inactive]/step:inline-flex text-muted-foreground"
                                        >
                                            Pending
                                        </Badge>
                                    </div>
                                </div>
                            </StepperTrigger>

                            {steps.length > index + 1 && (
                                <StepperSeparator className="absolute top-4 inset-x-0 start-9 m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none  group-data-[state=completed]/step:bg-green-500" />
                            )}
                        </StepperItem>
                    );
                })}
            </StepperNav>

            <StepperPanel className="text-sm">
                {steps.map((step, index) => (
                    <StepperContent key={index} value={index + 1} className="flex items-start justify-center flex-col">
                        <H3 className={'m-3 mb-10'}>{step.title}</H3>
                        <div className={'w-full'}>
                            <Label htmlFor={'title'} className={'my-3'}>Titlu</Label>
                            <Input name={'title'} placeholder={'Adaugă titlul protestului'} required/>
                        </div>
                        <div className="grid w-full">
                            <Label htmlFor="description" className={'my-3'}>Descriere</Label>
                            <Textarea placeholder="Adaugă descrierea aici..." id="description" rows={8}/>
                            <p className="text-muted-foreground text-sm">
                                Acesta descriere va fii afisata pe pagina protestului.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-5  w-full">
                            <div className="flex flex-col gap-3 mr-auto">
                                <Label htmlFor="date-protest" className="px-1">
                                    Când se organizează ?
                                </Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            id="date-protest"
                                            className="justify-between font-normal w-auto max-w-fit"
                                        >
                                            {date ? date.toLocaleDateString() : "Selectează o dată"}
                                            <CalendarIcon />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            captionLayout="dropdown"
                                            onSelect={(date) => {
                                                setDate(date)
                                                setOpen(false)
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="flex flex-col gap-3 items-end">
                                <Label htmlFor="time-picker" className="px-1">
                                    La ce oră incepe ?
                                </Label>
                                <Input
                                    type="time"
                                    id="time-picker"
                                    step="1"
                                    defaultValue="10:00:00"
                                    className="w-auto max-w-fit bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                />
                            </div>
                            <div className="flex flex-col gap-3 items-end">
                                <Label htmlFor="time-picker" className="px-1">
                                    La ce oră se termină ?
                                </Label>
                                <Input
                                    type="time"
                                    id="time-picker"
                                    step="1"
                                    defaultValue="23:59:59"
                                    className="w-auto max-w-fit bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                />
                            </div>
                        </div>
                    </StepperContent>
                ))}
            </StepperPanel>

            <div className="flex items-center justify-between gap-2.5">
                <Button variant="outline" onClick={() => setCurrentStep((prev) => prev - 1)} disabled={currentStep === 1}>
                    Previous
                </Button>
                <Button
                    variant="outline"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    disabled={currentStep === steps.length}
                >
                    Next
                </Button>
            </div>
        </Stepper>
    )
}