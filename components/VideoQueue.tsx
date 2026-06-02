'use client'

import { useAllVideos } from "@/store/useAllVideos"
import { VideoCard } from "./VideosCard"
import { useEffect } from "react"
import axios from "axios"
import { allVideos } from "./UrlComp"

interface Sluggish{
    spaceId: string
}

export function VideoQueue(props: Sluggish) {
    const activeFalse = useAllVideos((state) => state.activeFalse)
    const setActiveFalse = useAllVideos((state) => state.setActiveFalse)
    const {spaceId} = props

    async function firstRequest() {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/space/${spaceId}/stream`)
        const allStreams = res.data.allStreams

        setActiveFalse([...allStreams])

    }

    const resetActive = async () => {
        const url = `/api/space/${spaceId}/reset-active`

        if(navigator.sendBeacon){
            navigator.sendBeacon(url, new Blob([], {type: 'text/plain'}) )
        }else{
            await fetch(url, {
                method: 'POST',
                keepalive: true
            })
        }
    }

    useEffect(()=>{
        window.addEventListener('pagehide', resetActive)
        firstRequest()

        return ()=>{
            window.removeEventListener('pagehide', resetActive)
        }
    }, [spaceId])

    return <div>
       
        {activeFalse.map((video) => {
            return (
                <div key={video.id}>
                    {!video.active && <VideoCard thumbnailURL={video.thumbnailURL} title={video.title} />}
                </div>
            )
        })}
    </div>
}