'use client'

import Button from "./Button"
import { useRef } from "react"
import axios from "axios"
import { toast } from "sonner"
import { useAllVideos } from "@/store/useAllVideos"
import { useRouter } from "next/navigation"
import { useVideoId } from "@/store/useVideoId"


interface SpaceId {
    spaceId: string,
}

export type allVideos = {
    id: string,
    videoId: string,
    active: boolean,
    thumbnailURL: string,
    title: string
}

export function UrlComp(props: SpaceId) {
    const { spaceId } = props
    const router = useRouter()
    const inpRef = useRef<HTMLInputElement>(null)
    const setActiveTrue = useAllVideos((state) => state.setActiveTrue)
    const setActiveFalse = useAllVideos((state) => state.setActiveFalse)
    const setvideoId = useVideoId((state) => state.setVideoId)

    async function createStreams() {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/space/${spaceId}/stream`, {
            url: inpRef.current?.value,
            spaceId: spaceId
        })
       
        toast.success(res.data.message)

        if(inpRef.current){
            inpRef.current.value = ''
        }
    }

    async function firstRequest() {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/space/${spaceId}/stream`)
        const allStreams = res.data.allStreams
        allStreams.map((stream: allVideos) => {
            if(stream.active){
                setActiveTrue({ id: stream.videoId, active: stream.active })
                setvideoId(stream.videoId)

            }
        })

        const allFalseStreams = allStreams.filter((stream: allVideos)=> !stream.active)
        setActiveFalse([...allFalseStreams])

    }

    return <div className="mt-5 mb-5">
        <input placeholder="Paste the URL" className="border-2 border-gray-400 w-full p-4 rounded-2xl mb-3" ref={inpRef}></input>
        <Button title="Add to Queue" color="primary-4" onClick={async () => {
            await createStreams(),
            await firstRequest(),
            router.refresh()
        }} />
    </div>
}