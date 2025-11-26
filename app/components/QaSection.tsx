import {cn} from "@/lib/utils";
import {bebas_neue} from "@/lib/fonts";
import SpotlightCard from "@/components/SpotlightCard";

export default function QaSection() {
    return (
        <SpotlightCard className={cn(
            'flex justify-center items-center flex-col my-auto p-5 h-full',
            'sm:px-15'
        )}>
            <h5 className={cn(
                `${bebas_neue.className} text-2xl text-white relative top-8 left-0`,
                'sm:text-5xl mb-10'
            )}>
                De ce avem încredere în acestea ?
            </h5>
            <div className={cn(
                'flex justify-center items-center flex-col',
                'sm:gap-10 sm:flex-row'
            )}>
                <div className={cn(
                    'relative flex justify-center items-center gap-10 flex-col',
                    'sm:flex-row'
                )}>
                    <p className={cn(
                        'bg-yellow-300 w-full max-w-xl h-60 flex justify-center items-center p-7 rounded-4xl text-green-900 font-semibold',
                        'sm:h-40'
                    )}>
                        Ne-am câștigat încrederea în aceste organizații observând modul în care își desfășoară
                        activitățile și impactul pozitiv pe care îl au în comunitate.
                    </p>
                    <p className={cn(
                        'bg-yellow-300 w-full max-w-xl h-60 flex justify-center items-center p-7 rounded-4xl text-green-900 font-semibold',
                        'sm:h-40'
                    )}>
                        Pe lângă activitățile curente, organizațiile investesc timp și resurse în educarea
                        și sprijinirea membrilor comunității, oferind oportunități de dezvoltare și
                        participare activă.
                    </p>
                    <p className={cn(
                        'bg-yellow-300 w-full max-w-xl h-60 flex justify-center items-center p-7 rounded-4xl text-green-900 font-semibold',
                        'sm:h-40'
                    )}>
                        Experiența lor dovedită și dedicarea în implementarea proiectelor
                        fac ca fiecare iniți<>ativă să aducă un impact semnificativ, consolidând relația
                        de încredere și parteneriat cu beneficiarii și colaboratorii.</>
                    </p>
                </div>
            </div>
        </SpotlightCard>
    )
}