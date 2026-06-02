import { auth } from "@/auth";
import { client } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({m: "hi"})
}

export async function POST(req: NextRequest, {params}: {params: Promise<{slug: string, share: string}>}) {
    const {slug, share} = await params

    const session = await auth()
    if (!session?.user?.id) {
        return NextResponse.json({
            message: "Login to enter the shared space"
        })
    }
    try {
        const validShareToken = await client.space.findUnique({
            where: {
                shareToken: share
            }
        })

        if(!validShareToken){
            return NextResponse.json({
                message: "Not a valid invite link"
            }, {status: 403})
        }
        await client.spaceMember.upsert({
            where: {
                userId_spaceId: {
                    userId: session.user.id,
                    spaceId: slug
                }
            },
            update: {},
            create: {
                spaceId: slug,
                userId: session.user.id
            }
        })

        return NextResponse.json({
            message: `Welcome to ${validShareToken.name} space`
        })
    }catch(err){
        return NextResponse.json({
            message: err
        })
    }
    
}