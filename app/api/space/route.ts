import { auth } from "@/auth";
import { client } from "@/lib/client";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import {nanoid, z} from 'zod'

const spaceSchema = z.object({
    name: z.string()
})

export async function GET(){
    const session = await auth()
    if(!session?.user?.id){
        return NextResponse.json({
            message: "Unauthenticated"
        })
    }

    try{
        const allSpaces = await client.space.findMany({
            where: {
                userId: session.user.id
            },
            select:{
                id: true,
                name: true
            }
        })

        return NextResponse.json({
            message: allSpaces
        })
    }catch(err){
        return NextResponse.json(err)
    }
}


export async function POST(req: NextRequest){
    const session = await auth()
    if(!session?.user?.id){
        return NextResponse.json({
            message: "Unauthenticated"
        })
    }

    const body = await req.json()
    const parsedSuccess = spaceSchema.safeParse(body)
    if(!parsedSuccess.success){
        return NextResponse.json({
            message: "String Error"
        })
    }
    try{
        const shareToken = randomUUID()
        const createSpace = await client.space.create({
            data: {
                name: body.name,
                userId: String(session.user.id),
                shareToken: shareToken
            }
        })

        return NextResponse.json({
            message: `${createSpace.name} is created successfully`
        })
    }catch(err){
        return NextResponse.json({
            message: err
        })
    }
}