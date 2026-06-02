'use client'

import { Arrow } from "@/Icons/allIcons"
import Button from "./Button"
import { useRouter } from "next/navigation"

interface Space{
    name: string,
    id: string
} 


export function SpaceComp(props: Space) {
    const {name, id} = props
    const router = useRouter()
    return <>
        <div className="text-2xl font-bold">
            {name}
        </div>
        <div className="mt-5">
            <Button color="secondary-2" title='Streams' icon={<Arrow size="sm" />} onClick={() => { 
                router.push(`/space/${id}/streams`)
                }} />
        </div>
    </>
}