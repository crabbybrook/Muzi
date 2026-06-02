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
    console.log(slug)
    const allStreams = await client.streams.findMany({
        where: {
            spaceId: slug
        }
    })

    return NextResponse.json({
        allStreams: allStreams
    })
}


export async function POST(req: NextRequest) {
    const body = await req.json()
    try {
        const match = body.url.match(regex)

        if (!match) {
            return NextResponse.json({
                message: 'Invalid URL'
            }, { status: 403 })
        }

        const metadata = await getYoutubeMetadata(body.url)

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

export async function PUT(req: NextRequest) {
    const body = await req.json()

    const [updatedSong, song] = await client.$transaction([
        client.streams.update({
            where: {
                id: body.streamId
            },
            data: {
                active: true
            }
        }),

        client.streams.findMany({
            where: {
                spaceId: body.spaceId
            }
        })
    ])


    return NextResponse.json({
        activeTrue: updatedSong,
        activeFalse: song
    })
}

