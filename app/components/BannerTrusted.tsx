import {bebas_neue} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import CarouselCardContainer from "@/app/containers/CarouselCardContainer";


export default function BannerTrusted() {
    return (
        <div className={cn(
            'bg-green-500 flex justify-evenly items-center flex-col',
            'sm:flex-row'
        )}>
            <h4 className={cn(
                `${bebas_neue.className} text-5xl font-semibold uppercase text-green-900 m-5`,
            )}>
                    <span className={'text-7xl text-yellow-50'}>
                        Asociații
                    </span> în care <br/> avem
                <span className={cn(
                    'text-7xl text-yellow-300',
                    'sm:text-8xl'
                )}>
                        încredere!
                    </span>
            </h4>

            <div className={'hidden md:block '}>
                <CarouselCardContainer width={600}/>
            </div>

            {/*Mobile*/}
            <div className={cn(
                'block mb-3',
                'sm:hidden'
            )}>
                <CarouselCardContainer width={350}/>
            </div>
        </div>
    )
}