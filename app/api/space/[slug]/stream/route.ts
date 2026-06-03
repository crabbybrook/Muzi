import { client } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;


async function getYoutubeMetadata(url: string) {
    const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`)

    const ytMetadata = await response.json()

    return {
        title: String(ytMetadata.title),
        channelName: String(ytMetadata.author_name),
        thumbnailURL: String(ytMetadata.thumbnail_url)
    }

}

export async function GET(req:NextRequest, {params}: {params: Promise<{slug: string}>}){
    const {slug} = await params
    const allStreams = await client.streams.findMany({
        where: {
            spaceId: slug
        }
    })

    return NextResponse.json({
        allStreams: allStreams
    })
}


export async function POST(req: NextRequest, {params}: {params: Promise<{slug: string}>}) {
    const body = await req.json()
    const {slug} = await params
    try {
        const match = body.url.match(regex)

        if (!match) {
            return NextResponse.json({
                message: 'Invalid URL'
            }, { status: 403 })
        }

        const metadata = await getYoutubeMetadata(body.url)

        const streamFound = await client.streams.findFirst({
            where:{
                spaceId: slug,
                title: metadata.title
            }
        })

        if(streamFound){
            return NextResponse.json({
                message: `${streamFound.title} already exists`
            })
        }

        await client.streams.create({
            data: {
                url: body.url,
                videoId: match[1],
                title: metadata.title,
                thumbnailURL: metadata.thumbnailURL,
                spaceId: body.spaceId,
                provider: 'Youtube'
            }
        })

        return NextResponse.json({
            message: 'Stream added to queue',
        })

    } catch (err) {
        return NextResponse.json({
            message: err
        })
    }
}

export async function PUT(req: NextRequest, {params}: {params: Promise<{slug: string}>}) {
    const body = await req.json()
    const {slug} = await params

    const [updatedSong, song] = await client.$transaction([
        client.streams.update({
            where: {
                id: body.streamId,
                spaceId: slug
            },
            data: {
                active: true
            }
        }),

        client.streams.findMany({
            where: {
                spaceId: slug
            }
        })
    ])


    return NextResponse.json({
        activeTrue: updatedSong,
        activeFalse: song
    })
}

