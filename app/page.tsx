import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";
import Image from 'next/image'
import LogoCarousel from "@/app/components/LogoCarousel";

export default function Home() {
  return (
      <div>
          <div className={'h-[calc(100vh-3rem)] flex justify-center items-center flex-col sm:flex-row'}>
              <div>
                  <div className={'w-full max-w-4xl px-4 flex flex-col justify-center items-center sm:items-start'}>
                      <h3 className={'text-3xl text-green-600 sm:text-4xl'}>Găsește evenimente,</h3>
                      <h2 className={'text-4xl font-bold text-green-500 sm:text-6xl'}>FII SCHIMBAREA,</h2>
                      <h3 className={'text-4xl font-semibold text-green-700 sm:text-5xl'}>fă voluntariat.</h3>
                  </div>
                  <div className={'w-full max-w-4xl px-4 flex gap-2 mt-6 flex-col sm:flex-row'}>
                      <Input placeholder={'Descoperă Evenimente, Proteste, Petiții & Altele...'} className={''}/>
                      <Button>
                          <Search/>
                          <span>Caută</span>
                      </Button>
                  </div>
              </div>
              <div className={'hidden sm:block'}>
                  <Image src={'/webp/home_image.webp'} width={500} height={500} alt={'Home Image'}/>
              </div>
              <div className={'block sm:hidden'}>
                  <Image src={'/webp/home_image.webp'} width={300} height={300} alt={'Home Image'}/>
              </div>
          </div>
          <div className={'h-[calc(100vh-3rem)] bg-green-500 flex items-center flex-col'}>
              <h4 className={'text-5xl font-semibold mt-6 uppercase text-green-900'}>Asociații în care avem încredere!</h4>
              <p className={'mt-10 mb-20 mx-40 text-center text-green-100 font-semibold'}>
                  Ne-am câștigat încrederea în aceste organizații observând modul în care își desfășoară activitățile și
                  impactul pozitiv pe care îl au în comunitate. Activitățile lor sunt transparente și bine structurate,
                  iar implicarea constantă în diverse proiecte inspiră respect și siguranță. Aceste aspecte ne fac să
                  le recomandăm cu încredere, știind că acțiunile lor au rezultate reale și benefice
                  pentru cei pe care îi susțin.
              </p>
              <LogoCarousel/>
          </div>
      </div>

  );
}
