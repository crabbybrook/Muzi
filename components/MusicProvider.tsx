"use client"

import { Spotify, Youtube } from "@/Icons/allIcons";
import Link from "next/link";

export function MusicProvider() {
    return <div className="flex gap-10 justify-center mt-3">
        <div className="text-red-500 cursor-pointer hover:text-red-700">
            <Link href={'https://music.youtube.com/'} target="_blank" rel="noopener noreferrer">
            <Youtube size="md" />
            </Link>
            </div>
    </div>
}