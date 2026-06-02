import { create } from "zustand"

interface Streamdata{
    spaceName: string,
    url: string,
    setSpaceName: (id: string) => void
    setURL: (url: string) => void
}

export const useIdLink = create<Streamdata>((set)=>({
    spaceName: '',
    url: '',
    setSpaceName: (state)=> set({spaceName: state}),
    setURL: (state) => set({url: state})
}))