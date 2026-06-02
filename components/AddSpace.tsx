'use client'

import { useSpaceForm } from "@/store/useSpaceForm"
import Button from "./Button"
import { Add } from "@/Icons/allIcons"


export function AddSpace(){
    const setSpaceOpen = useSpaceForm((state)=> state.setSpaceOpen)
    return <div>
        <Button color="secondary-4" title="Space" iconFront={<Add size="md"/>} onClick={()=>{setSpaceOpen(true)}}/>
    </div>
}