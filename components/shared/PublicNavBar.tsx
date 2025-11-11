'use client'

import {Input} from '@/components/ui/input'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {counties} from '@/lib/counties'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {Drawer} from 'vaul';

export default function PublicNavBar() {
    return (
        <nav className={'flex justify-start items-center h-12 border border-gray-200 sticky top-0 z-50 bg-white'}>
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
                                            <SelectTrigger size={'sm'} className={'w-full'}>
                                                <SelectValue placeholder={'Selectează Orașul...'}/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {counties.map((county) => (
                                                    <SelectItem value={county.name}
                                                                key={county.id}>{county.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className={'flex justify-start items-start flex-col gap-2 m-4'}>
                                        <Button size={'sm'}>Crează cont</Button>
                                        <Button size={'sm'}>Autentificăte</Button>

                                        <Button className={'font-bold text-red-600 m-6 hidden md:flex'}
                                                variant={'outline'}>
                                            <span>❤</span>
                                            Donează
                                        </Button>
                                    </div>
                                </Drawer.Description>
                            </div>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>

            <Link href="/" className="m-4">
                <h1 className={`text-xl font-extrabold text-green-900`}>FacemBine✨</h1>
            </Link>

            <div className={'hidden mr-auto  md:flex md:justify-center md:items-center'}>
                <Input className={'w-60 h-8'} placeholder={'Caută Eveniment...'}/>

                <Select>
                    <SelectTrigger size={'sm'} className={'w-50 ml-2'}>
                        <SelectValue placeholder={'Selectează Orașul...'}/>
                    </SelectTrigger>
                    <SelectContent>
                        {counties.map((county) => (
                            <SelectItem value={county.name} key={county.id}>{county.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className={'hidden md:flex md:justify-center md:items-center gap-2'}>
                <Button size={'sm'}>Crează cont</Button>
                <Button size={'sm'}>Autentificăte</Button>

                <Button className={'font-bold text-red-600 m-6 hidden md:flex'} variant={'outline'}>
                    <span>❤</span>
                    Donează
                </Button>
            </div>
        </nav>
    )
}