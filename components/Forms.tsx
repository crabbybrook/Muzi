'use client'
import { Cross } from "@/Icons/allIcons";
import Button from "./Button";
import { useSpaceForm } from "@/store/useSpaceForm";
import { useRef } from "react";
import axios from 'axios'
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export function Forms() {
    const setSpaceOpen = useSpaceForm((state) => state.setSpaceOpen)
    const inpRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    async function createSpace() {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/space`, {
            name: inpRef.current?.value.toString()
        })

        toast.success(response.data.message)
        setSpaceOpen(false)
        router.refresh()
    }

    return <div className="border border-white bg-black flex justify-center w-120 rounded-2xl h-80">
        <div className="relative">
            <div className="absolute top-2 left-112 cursor-pointer" onClick={() => { setSpaceOpen(false) }}>
                <Cross size="sm" />
            </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <div className="w-80">
                <input className="border border-gray-400 rounded-2xl p-4 w-full" placeholder="Name your space" ref={inpRef}></input>
            </div>


            <div>
                <Button color="primary" title="create" onClick={createSpace} />
            </div>
        </div>
    </div>
}