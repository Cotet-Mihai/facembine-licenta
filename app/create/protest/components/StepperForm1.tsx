'use client'

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import CalendarWithStartStopTime from "@/components/calendarWithStartStopTime";
import {useState} from "react";


export default function StepperForm1() {
    // Title
    const [title, setTitle] = useState('');
    // Description
    const [description, setDescription] = useState('');
    // Calendar
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [fromTime, setFromTime] = useState('10:30:00');
    const [toTime, setToTime] = useState('12:30:00');

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <Label htmlFor="title">Titlu</Label>
                <Input
                    id="title"
                    placeholder="Adaugă titlul protestului"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="description">Descriere</Label>
                <Textarea
                    id="description"
                    placeholder="Adaugă descrierea aici..."
                    rows={6}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <CalendarWithStartStopTime
                dateState={{date, setDate}}
                fromTimeState={{fromTime, setFromTime}}
                toTimeState={{toTime, setToTime}}
            />
        </div>
    )
}