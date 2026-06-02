import { client } from "@/lib/client";
import { ShareBtn } from "./ShareBtn";

interface Sluggish{
    spaceId: string
}

async function shareToken(slug: string){
    const shareToken = await client.space.findUnique({
        where: {
            id: slug
        }
    })

    return shareToken?.shareToken
}

export async function ShareComp(props: Sluggish){
    const {spaceId} = props
    const token = await shareToken(spaceId)
    if(!token){
        return <div>
            You are not invited
        </div>
    }
    return <>
    <ShareBtn spaceId={spaceId} token={token}/>
    </>
}