import {Camera, Info, ListTodo, MapPin} from "lucide-react";
import StepperView from "@/app/create/protest/components/StepperView";
import StepperForm1 from "@/app/create/protest/components/StepperForm1";
import {Step} from "@/app/create/protest/components/type";

const steps: Step[] = [
    {title: 'Informații de bază', icon: Info}, //titlu, descriere, data si ora, durata estimativă, tipul protestului
    {title: 'Locație', icon: MapPin}, // locatie, punct de intalnire, optional finish
    {title: 'Media vizuală', icon: Camera}, //imagine principala, galerie de iamgini, optional video, (sa ai optiunea de al descarca din browser)
    {title: 'Logistică', icon: ListTodo}, // Ce sa aduca participantii(pancarte, steaguri, vuvuzele, bannere), restirctii, reguli de siguranta
];

export default function StepperController() {
    return(
        <StepperView
            steps={steps}
        >
            <StepperForm1/>
        </StepperView>
    )
}