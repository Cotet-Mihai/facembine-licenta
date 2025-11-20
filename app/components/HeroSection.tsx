import Image from 'next/image'
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";

export default function HeroSection() {

    return (
        <div className={cn(
            'h-screen flex justify-center items-center flex-col',
            'sm:flex-row',
        )}>
            <div>
                <div>
                    <h3 className={'text-green-600 text-3xl sm:text-4xl'}>Găsește evenimente,</h3>
                    <h2 className={'text-green-500 font-bold text-4xl sm:text-6xl'}>FII SCHIMBAREA,</h2>
                    <h3 className={'text-green-700 font-semibold text-4xl sm:text-5xl'}>fă voluntariat.</h3>
                </div>
                <div className={cn(
                    'flex flex-col w-full mt-6 px-1 gap-2',
                    'sm:flex-row'
                )}>
                    <Input
                        placeholder={'Descoperă Evenimente, Proteste, Petiții & Altele...'}
                        className={cn(
                            'hidden',
                            'sm:block'
                        )}
                    />

                    {/*Mobile*/}
                    <Input
                        placeholder={'Descoperă Evenimente'}
                        className={cn(
                            'block',
                            'sm:hidden'
                        )}
                    />
                    <Button>
                        <Search/>
                        Caută
                    </Button>
                    </div>
            </div>
            <Image
                src={'/webp/home_image.webp'}
                alt={'Home Image'}
                width={500}
                height={500}
                className={cn(
                    'hidden',
                    'sm:block'
                )}
            />

            {/*Mobile*/}
            <Image
                src={'/webp/home_image.webp'}
                alt={'Home Image'}
                width={280}
                height={280}
                className={cn(
                    'block',
                    'sm:hidden'
                )}
            />
        </div>
    )
}