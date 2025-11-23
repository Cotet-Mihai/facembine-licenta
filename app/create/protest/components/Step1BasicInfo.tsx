import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";

interface Step1Props {
    data: any;
    onChange: (field: string, value: any) => void;
}

export default function Step1BasicInfo({ data, onChange }: Step1Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <Label htmlFor="title">Titlu</Label>
                <Input
                    id="title"
                    value={data.title}
                    placeholder="Adaugă titlul protestului"
                    onChange={(e) => onChange("title", e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="description">Descriere</Label>
                <Textarea
                    id="description"
                    value={data.description}
                    placeholder="Adaugă descrierea aici..."
                    rows={6}
                    onChange={(e) => onChange("description", e.target.value)}
                />
            </div>

            <div className="flex gap-4 items-end">
                <div className="flex flex-col gap-2">
                    <Label>Când se organizează?</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-auto max-w-fit justify-between">
                                {data.date ? data.date.toLocaleDateString() : "Selectează o dată"}
                                <CalendarIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={data.date}
                                onSelect={(date) => {
                                    onChange("date", date);
                                    setOpen(false);
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>La ce ora începe ?</Label>
                    <Input
                        type="time"
                        value={data.startTime}
                        onChange={(e) => onChange("startTime", e.target.value)}
                        className="w-auto max-w-fit"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label>La ce ora se termină ?</Label>
                    <Input
                        type="time"
                        value={data.endTime}
                        onChange={(e) => onChange("endTime", e.target.value)}
                        className="w-auto max-w-fit"
                    />
                </div>
            </div>
        </div>
    );
}
