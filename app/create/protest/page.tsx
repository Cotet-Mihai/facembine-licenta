'use client'

import {H1} from "@/components/shared/Typography";
import React from "react";
import {Info, MapPin, Camera, ListTodo} from 'lucide-react';
import StepperProtest from "@/app/create/protest/components/StepperProtest";
import StepperForm1 from "@/app/create/protest/components/StepperForm1";
import StepperController from "@/app/create/protest/components/StepperController";

export default function Protest() {



    return(
        <div className={'h-screen'}>
            <div className={'mt-20 h-20 mx-50 rounded-3xl flex justify-start items-center'}>
                <H1 className={'ml-5'}>Creează Protest</H1>
            </div>
            <div className={' mx-50 p-10 border border-gray-200 shadow rounded-3xl'}>
                <StepperController/>
            </div>

        </div>
    )
}