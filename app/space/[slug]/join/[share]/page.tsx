import { JoinLogic } from "@/components/JoinLogic";

export default async function Join({params}: {params: {slug: string, share: string}}){
    const {slug, share} = await params  
   return <JoinLogic spaceId={slug} token={share}/>
}