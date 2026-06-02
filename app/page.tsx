import Appbar from "@/components/Appbar";
import { FeatureCard } from "@/components/FeatureCard";
import { Footbar } from "@/components/Footbar";
import HomeCard from "@/components/HomeCard";
import { MusicProvider } from "@/components/MusicProvider";


export  default async function Home() {
  return (
    <div>
      <div className="bg-linear-to-br from-gray-900 via-purple-900 to-gray-950 p-5">
        <Appbar/>
        <div className="flex justify-center items-center p-30">
          <HomeCard/>
        </div>
      </div>

       <div className="bg-linear-to-tr from-gray-900 via-purple-900 to-gray-950 p-30 flex-col">
            <div className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8 text-white">
              Key Features
              <div>
                <FeatureCard/>
              </div>
            </div>
        </div>

      <div  className="bg-linear-to-br from-gray-900 via-purple-900 to-gray-950 p-30 flex flex-col justify-center items-center text-center">
           <div className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Ready to Transform Your Streams?
           </div>

           <div className="mx-auto max-w-150 text-gray-400 md:text-xl mt-3">
              Join Muzi, share the song you want to play from 
              <MusicProvider/>
           </div>
           
      </div>
      <div className="bg-linear-to-bl from-gray-950 via-purple-900 to-gray-900">
        <Footbar/>
      </div>
      
    </div>
  );
}
