"use client"
import { useSpaceForm } from "@/store/useSpaceForm";
import { Forms } from "./Forms";

export function RenderForm() {
    const spaceOpen = useSpaceForm((state) => state.spaceOpen)
    return <div>
        {spaceOpen && <div className="fixed inset-0 flex items-center justify-center bg-black opacity-80 z-50">
            <div>

                <Forms />
            </div>
        </div>}
    </div>
}