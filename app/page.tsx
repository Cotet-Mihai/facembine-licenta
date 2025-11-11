import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";

export default function Home() {
  return (
      <div>
          <div className={'h-[calc(100vh-3rem)] flex justify-center items-center'}>
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

          </div>
          <div className={'h-[calc(100vh-3rem)] bg-blue-500'}>

          </div>
      </div>

  );
}
