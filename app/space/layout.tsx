import Appbar from "@/components/Appbar";
import { Footbar } from "@/components/Footbar";
import React from "react";
import { Toaster } from "sonner";

export default function SpaceLAyout({ children }: { children: React.ReactNode }) {
    return <div>
        <div className="bg-linear-to-br min-h-screen from-gray-900 via-purple-900 to-gray-950 p-5">
            <Appbar />
            <Toaster position="top-center" richColors/>
            <div>
                {children}
            </div>
        </div>
        
    </div>
}