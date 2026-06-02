import { create } from "zustand";

interface SpaceForm{
    spaceOpen: boolean,
    setSpaceOpen : (spaceOpen: boolean) => void
}
export const useSpaceForm = create<SpaceForm>((set)=>({
    spaceOpen: false,
    setSpaceOpen: (open)=> set({spaceOpen: open})
}))
