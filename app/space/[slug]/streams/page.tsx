import { ShareBtn } from "@/components/ShareBtn";
import { ShareComp } from "@/components/ShareComp";
import { UrlComp } from "@/components/UrlComp";
import { VideoPlay } from "@/components/VideoPlay";
import { VideoQueue } from "@/components/VideoQueue";

interface Sluggish{
    slug: string
}

export default async function Streams({params}: {params: Sluggish}) {

    const {slug} = await params 
    

    return <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-2 w-full">
           <div className="flex-col p-3">
                <div className="text-2xl font-bold flex justify-between items-center text-white">
                    Upcoming Songs
                </div>
                <div>
                    
                    <VideoQueue spaceId={slug}/>
                </div>
           </div>

           <div className="p-3 w-full">
                <div className="flex-col">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-white">
                            Add a song
                        </div>
                        <ShareComp spaceId={slug}/>
                    </div>
                    <UrlComp spaceId={slug}/>
                </div>

                <div>
                    <VideoPlay spaceId={slug}/>
                </div>
           </div>
        </div>
    </div>
}