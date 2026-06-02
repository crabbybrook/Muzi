'use client'
import { Share } from "@/Icons/allIcons";
import Button from "./Button";
import axios from "axios";
import { toast } from "sonner";

interface ShareProps{
    spaceId: string,
    token: string
}

export function ShareBtn(props: ShareProps){
    const {spaceId, token} = props

    return <Button title="Share" color="secondary-3" iconFront={<Share size="xs"/>} onClick={()=>{
        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_SITE_URL}/space/${spaceId}/join/${token}`)
        toast.success('share link copied')
    }} />
}