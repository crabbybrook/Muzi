'use client'

import { EmptyBox } from "@/Icons/allIcons";
import Button from "./Button";
import { useSpaceForm } from "@/store/useSpaceForm";
import { useRouter } from "next/navigation";

export default function NoSpaceStream(){
    const setSpaceOpen = useSpaceForm((state)=> state.setSpaceOpen)
    const spaceOpen = useSpaceForm((state)=> state.spaceOpen)
    const router = useRouter()

    return <div className="justify-center items-center flex">
        {!spaceOpen && <div className="border border-white p-20 justify-center items-center flex flex-col rounded-3xl text-center">
            <div className="text-white">
                <EmptyBox size="md"/>
            </div>
            <div className="font-bold">You have no spaces</div>
            <div className="flex gap-1 pt-1 justify-center items-center">
                Tap <span className="font-bold text-xl">+</span> button below to create a new space
            </div>

            <div className="mt-3">
                <Button title="+" color="primary-3" onClick={()=>{setSpaceOpen(true), router.refresh() }}/>
            </div>
        </div>}
        </div>
}