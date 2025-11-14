import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Search, BadgeInfoIcon} from "lucide-react";
import Image from 'next/image'
import {bebas_neue} from "@/lib/fonts";
import CarouselLogo from "@/app/components/CarouselLogo";
import CarouselCard from "@/app/components/CarouselCard";
import SpotlightCard from "@/app/components/SpotlightCard";

export default function Home() {
  return (
      <div>
          <div className={'h-screen flex justify-center items-center flex-col sm:flex-row'}>
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
          <div className={'md:h-screen bg-white flex flex-col pt-12'}>
            <div className={'flex flex-col md:flex-row justify-center items-center bg-green-500 md:gap-0 md:shadow-2xl shadow-green-950'}>
                <h4 className={`${bebas_neue.className} text-5xl font-semibold uppercase text-green-900 m-5 md:m-10`}>
                    <span className={'text-7xl text-yellow-50'}>
                        Asociații
                    </span> în care <br/> avem
                    <span className={'text-7xl md:text-8xl text-yellow-300'}>
                        încredere!
                    </span>
                </h4>
                <div className={'md:hidden mb-4'}>
                    <CarouselCard
                        baseWidth={400}
                        autoplay={true}
                        autoplayDelay={5000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                </div>
                <div className={'hidden md:block'}>
                    <CarouselCard
                        baseWidth={500}
                        autoplay={true}
                        autoplayDelay={5000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                </div>
            </div>
              <div className={'flex justify-center items-end flex-col mb-auto mt-auto p-5 md:px-15'}>
                  <h5 className={`${bebas_neue.className} text-2xl md:text-5xl text-green-900 mb-2.5`}>
                      De ce avem încredere în acestea ?
                  </h5>
                  <div className={'flex justify-center gap-0 md:gap-10 flex-col md:flex-row'}>
                      <SpotlightCard className={'mb-4 md:mb-0'}>
                          <p className={'text-green-900 font-semibold'}>
                              Ne-am câștigat încrederea în aceste organizații observând modul în care își desfășoară
                              activitățile și impactul pozitiv pe care îl au în comunitate.
                          </p>
                      </SpotlightCard>
                      <SpotlightCard>
                          <p  className={'text-green-900 font-semibold'}>
                              Pe lângă activitățile curente, organizațiile investesc timp și resurse în educarea
                              și sprijinirea membrilor comunității, oferind oportunități de dezvoltare și
                              participare activă. Experiența lor dovedită și dedicarea în implementarea proiectelor
                              fac ca fiecare inițiativă să aducă un impact semnificativ, consolidând relația
                              de încredere și parteneriat cu beneficiarii și colaboratorii.
                          </p>
                      </SpotlightCard>
                  </div>
              </div>
              <div className="bg-green-500 pt-4 md:shadow-2xl shadow-green-950">
                  <CarouselLogo
                      speed={40}
                      direction="left"
                      logoHeight={96}
                      gap={80}
                      hoverSpeed={0}
                      scaleOnHover
                      fadeOut
                      fadeOutColor="#00c950"
                      ariaLabel="Technology partners"
                  />
              </div>
          </div>
      </div>

  );
}
