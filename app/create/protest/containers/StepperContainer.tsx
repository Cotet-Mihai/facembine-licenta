'use client'

import {Camera, Info, ListTodo, MapPin} from "lucide-react";
import StepperTitleStatus from "@/components/StepperTitleStatus";
import {IconType} from "react-icons";
import BasicInfo from "@/app/create/protest/components/StepperForms/BasicInfo";
import {useState} from "react";
import {validateBasicInfo} from "@/lib/createValidation/protest"

export type Step = {
    title: string;
    icon: IconType;
}

const steps: Step[] = [
    {title: 'Informații de bază', icon: Info}, //titlu, descriere, data si ora, tipul protestului
    {title: 'Locație', icon: MapPin}, // locatie, punct de intalnire, optional finish
    {title: 'Media vizuală', icon: Camera}, //imagine principala, galerie de iamgini, optional video, (sa ai optiunea de al descarca din browser)
    {title: 'Logistică', icon: ListTodo}, // Ce sa aduca participantii(pancarte, steaguri, vuvuzele, bannere), restirctii, reguli de siguranta
];

export default function StepperContainer() {

    // Title
    const [title, setTitle] = useState('');
    // Description
    const [description, setDescription] = useState('');
    // Calendar
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [fromTime, setFromTime] = useState('10:30:00');
    const [toTime, setToTime] = useState('12:30:00');
    // Tipul de protest
    const [type, setType] = useState<string | undefined>(undefined);
    //Step of Stepper
    const [currentStep, setCurrentStep] = useState(1);

    function handleNextStep() {
        if (currentStep === 1) {
            return validateBasicInfo({
                title,
                description,
                date,
                fromTime,
                toTime,
                type: type,
            });
        } return true
    }

    return (
        <StepperTitleStatus
            steps={steps}
            stepsState={{currentStep, setCurrentStep}}
            onValidateNext={handleNextStep}
        >
            {currentStep === 1 ? <BasicInfo
                titleState={{title, setTitle}}
                descriptionState={{description, setDescription}}
                dateState={{date, setDate}}
                fromTimeState={{fromTime, setFromTime}}
                toTimeState={{toTime, setToTime}}
                typeState={{ type, setType }}
            /> : currentStep}
        </StepperTitleStatus>
    )
}