import { create } from "zustand"

interface VideoId{
    videoId: string,
    setVideoId: (id: string) => void,
}

export const useVideoId = create<VideoId>((set)=>({
    videoId: '',
    setVideoId: (state) => set({videoId: state})
}))