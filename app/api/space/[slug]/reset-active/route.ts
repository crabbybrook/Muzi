import { client } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, {params}: {params: Promise<{slug: string}>}){
    const {slug} = await params
    const resetActive = await client.streams.updateMany({
        where: {
            spaceId: slug,
            active: true
        },
        data:{
            active: false
        }
    })
    return NextResponse.json({
        message: 'All active reset'
    })
}