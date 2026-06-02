import { allVideos } from "@/components/UrlComp";
import { create } from "zustand";

interface Videos{
    activeTrue: {videoId: string, active: boolean},
    activeFalse: allVideos[],
    setActiveTrue: (state: {id: string, active: boolean}) => void 
    setActiveFalse: (state: allVideos[]) => void 
}

export const useAllVideos = create<Videos>((set)=>({
    activeTrue: {videoId: '', active: false},
    activeFalse: [],
    setActiveTrue: (state)=> set({activeTrue:{videoId: state.id, active: state.active}}),
    setActiveFalse: (state)=> set({activeFalse: state}),

}))