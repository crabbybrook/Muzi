'use client'
import { useRouter } from "next/navigation";
import Button from "./Button";
import { useSession } from "next-auth/react";

export default function HomeCard(){
    const router = useRouter()
    const {status} = useSession()

    function routing(){
      if(status === 'authenticated'){
          router.push('/space')
          router.refresh()
        }
        else{
          router.push('/api/auth/signin')
      }
    }

    return <div className="items-center justify-center flex flex-col text-center">
            <div className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">Let Your Fans Choose the Beat</div>
            <div className="p-2">
              <div className="mx-auto max-w-175 text-gray-400 md:text-xl">Empower your audience to curate your music stream. Connect with fans like never before.</div>
            </div>

            <div className="flex gap-5 p-2">
              <Button title="Get Started" color="primary-2" onClick={()=>{routing()}}/>
              <Button title="Learn More" color="secondary" onClick={()=> {console.log('learn more')}}/>
            </div>
          </div>
}