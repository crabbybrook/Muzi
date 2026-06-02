"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Button from "./Button"
import { useRouter } from "next/navigation"


export default function Appbar(){
    const {status} = useSession()
    const router = useRouter()
    return <div className="flex justify-between  items-center">
        <div className="text-xl font-bold pl-10 cursor-pointer" onClick={()=>{
            router.push('/')
        }}>
            Muzi
        </div>

        <div className="pr-10">
            {status === "authenticated" ? <Button title="Logout" color="primary" onClick={()=>{signOut()}}/>: <Button title="Sign In" color="primary" onClick={()=>{signIn()}}/>}
        </div>
    </div>
}