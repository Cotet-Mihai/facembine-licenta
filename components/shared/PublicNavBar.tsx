'use client'

import {Input} from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {counties} from '@/lib/counties'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {Drawer} from 'vaul';
import {ButtonDonate} from "@/components/shared/ButtonDonate";

export default function PublicNavBar() {
    return (
        <nav className={'fixed top-0 left-0 w-full flex justify-start items-center h-12 border border-gray-200 bg-white z-50'}>
            <Drawer.Root direction="left">
                <Drawer.Trigger
                    className="flex relative h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden px-4
                     transition-all mr-auto sm:mr-auto lg:hidden">
                    <Menu/>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/40"/>
                    <Drawer.Content
                        className="left-3 top-2 bottom-2 fixed z-100 outline-none w-[310px] flex"
                        style={{'--initial-transform': 'calc(100% - 8px)'} as React.CSSProperties}
                    >
                        <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
                            <div className="max-w-md mx-auto flex justify-center items-start flex-col">
                                <Drawer.Title className="font-medium mb-2 text-zinc-900">
                                    <span className={'text-2xl font-bold'}>Meniu</span>
                                </Drawer.Title>
                                <Drawer.Description>
                                    <div className={'flex justify-center flex-col gap-2'}>
                                        <Input placeholder={'Caută eveniment...'}/>
                                        <Select>
                                            <SelectTrigger size="sm" className="w-full">
                                                <SelectValue placeholder="Selectează Orașul..."/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {/* Grupul București + sectoarele */}
                                                <SelectGroup>
                                                    <SelectLabel>București</SelectLabel>
                                                    <SelectItem value="bucuresti" key="bucuresti">București</SelectItem>
                                                    <SelectItem value="sector1" key="sector1">Sector 1</SelectItem>
                                                    <SelectItem value="sector2" key="sector2">Sector 2</SelectItem>
                                                    <SelectItem value="sector3" key="sector3">Sector 3</SelectItem>
                                                    <SelectItem value="sector4" key="sector4">Sector 4</SelectItem>
                                                    <SelectItem value="sector5" key="sector5">Sector 5</SelectItem>
                                                    <SelectItem value="sector6" key="sector6">Sector 6</SelectItem>
                                                </SelectGroup>

                                                {/* Grupul restul județelor */}
                                                <SelectGroup>
                                                    <SelectLabel>Județe</SelectLabel>
                                                    {counties.map((county) => (
                                                        <SelectItem value={county.name} key={county.id}>
                                                            {county.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>

                                    </div>
                                    <div className={'flex justify-start items-start flex-col gap-2 m-4'}>
                                        <Button size={'sm'} asChild>
                                            <Link href={'/auth/sign-up'}>
                                                Creează cont
                                            </Link>
                                        </Button>
                                        <Button size={'sm'}>Autentificăte</Button>

                                        {/*TODO: Revino cand ai implementat donatiile*/}
                                        <ButtonDonate link={'#'} className={'mr-2'}/>
                                    </div>
                                </Drawer.Description>
                            </div>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>

            <Link href="/" className="m-4">
                <h1 className={`text-xl font-extrabold text-green-800`}>CIVICOM✨</h1>
            </Link>

            <div className={'hidden mr-auto  md:flex md:justify-center md:items-center gap-4'}>
                <Select>
                    <SelectTrigger size="sm" className="w-50">
                        <SelectValue placeholder="Selectează Orașul..."/>
                    </SelectTrigger>
                    <SelectContent>
                        {/* Grupul București + sectoarele */}
                        <SelectGroup>
                            <SelectLabel>București</SelectLabel>
                            <SelectItem value="bucuresti" key="bucuresti">București</SelectItem>
                            <SelectItem value="sector1" key="sector1">Sector 1</SelectItem>
                            <SelectItem value="sector2" key="sector2">Sector 2</SelectItem>
                            <SelectItem value="sector3" key="sector3">Sector 3</SelectItem>
                            <SelectItem value="sector4" key="sector4">Sector 4</SelectItem>
                            <SelectItem value="sector5" key="sector5">Sector 5</SelectItem>
                            <SelectItem value="sector6" key="sector6">Sector 6</SelectItem>
                        </SelectGroup>

                        {/* Grupul restul județelor */}
                        <SelectGroup>
                            <SelectLabel>Județe</SelectLabel>
                            {counties.map((county) => (
                                county.name !== 'București' && (
                                    <SelectItem value={county.name} key={county.id}>
                                        {county.name}
                                    </SelectItem>
                                )
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Input className={'w-auto h-8'} placeholder={'Caută Eveniment...'}/>
            </div>

            <div className={'hidden md:flex md:justify-center md:items-center gap-2'}>
                <Button size={'sm'} asChild>
                    <Link href={'/auth/sign-up'}>
                        Creează cont
                    </Link>
                </Button>
                <Button size={'sm'} className={'mr-6'}>Autentificăte</Button>

                {/*TODO: Revino cand ai implementat donatiile*/}
                <ButtonDonate link={'#'} className={'mr-2'}/>
            </div>
        </nav>
    )
}