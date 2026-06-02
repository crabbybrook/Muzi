'use client'
import { Play } from "@/Icons/allIcons";
import Button from "./Button";
import { useVideoId } from "@/store/useVideoId";
import axios from "axios";
import { useAllVideos } from "@/store/useAllVideos";
import { useRouter } from "next/navigation";


interface Video {
    spaceId: string
}

export function VideoPlay(props: Video) {
    const { spaceId } = props
    const router = useRouter()
    const videoId = useVideoId((state) => state.videoId)
    const setvideoId = useVideoId((state) => state.setVideoId)
    const activeFalse = useAllVideos((state) => state.activeFalse)
    const activeTrue = useAllVideos((state) => state.activeTrue)
    const setActiveFalse = useAllVideos((state) => state.setActiveFalse)
    const setActiveTrue = useAllVideos((state) => state.setActiveTrue)
    async function playNext() {
        console.log(activeFalse)
        const nextVideo = activeFalse[0]
        const res = await axios.put(`${process.env.NEXT_PUBLIC_SITE_URL}/api/space/${spaceId}/stream`, {
            streamId: nextVideo.id
        })
        setActiveTrue({ id: res.data.activeTrue.videoId, active: res.data.activeTrue.active })
        setActiveFalse([...res.data.activeFalse])
        setvideoId(res.data.activeTrue.videoId)
        console.log('after'+activeFalse)

    }

    return <div className="flex-col space-y-4">
        <div className="font-bold text-xl">
            Now Playing
        </div>

        <div className="bg-gray-900 border-gray-800 p-20 relative aspect-video">
            {activeTrue.active ? <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} className="w-full inset-0 h-full absolute"
                allow="autoplay" allowFullScreen
            />
                : <p className="text-center pu-8 text-gray-400"> No video playing </p>}
        </div>
        <Button title="Play Next" color="primary-5" iconFront={<Play size="sm" />} onClick={playNext} />
    </div>
}