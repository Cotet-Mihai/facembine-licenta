import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";
import Image from 'next/image'

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
          <div className={'h-[calc(100vh-3rem)] bg-green-500 flex justify-center'}>
                <h4 className={'text-5xl font-semibold mt-6 uppercase text-green-900'}>Sponsori în care avem încredere!</h4>
          </div>
      </div>

  );
}
