import {bebas_neue} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import CarouselCard from "@/app/components/CarouselCard";


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
                <CarouselCard
                    baseWidth={600}
                    autoplay={true}
                    autoplayDelay={5000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>

            {/*Mobile*/}
            <div className={cn(
                'block mb-3',
                'sm:hidden'
            )}>
                <CarouselCard
                    baseWidth={350}
                    autoplay={true}
                    autoplayDelay={5000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>
        </div>
    )
}


// <div className={'flex flex-col md:flex-row justify-center items-center bg-green-500 md:gap-0 md:shadow-2xl shadow-green-950'}>
//     <h4 className={`${bebas_neue.className} text-5xl font-semibold uppercase text-green-900 m-5 md:m-10`}>
//                     <span className={'text-7xl text-yellow-50'}>
//                         Asociații
//                     </span> în care <br/> avem
//         <span className={'text-7xl md:text-8xl text-yellow-300'}>
//                         încredere!
//                     </span>
//     </h4>
//     <div className={'md:hidden block mb-4'}>
//         <CarouselCard
//             baseWidth={350}
//             autoplay={true}
//             autoplayDelay={5000}
//             pauseOnHover={true}
//             loop={true}
//             round={false}
//         />
//     </div>
//     <div className={'hidden md:block '}>
//         <CarouselCard
//             baseWidth={500}
//             autoplay={true}
//             autoplayDelay={5000}
//             pauseOnHover={true}
//             loop={true}
//             round={false}
//         />
//     </div>
// </div>