import { Fans, Headphone, Streaming } from "@/Icons/allIcons";

export function FeatureCard() {
    return <div className="grid grid-cols-12 mt-15 gap-10 justify-center">
        <div className="col-span-12 md:col-span-4  flex-col">
            <div className="text-yellow-400 flex justify-center items-center pb-5">
                <Fans size="md" />
            </div>

            <div className="font-bold text-2xl pb-2">
                Fan Interaction
            </div>

            <div className="text-gray-400 text-xl">
                Let fans choose the music.
            </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex-col">

            <div className="text-green-400 flex justify-center items-center pb-5">
                <Streaming size="md" />
            </div>

            <div className="font-bold text-2xl pb-2">
                Live Streaming
            </div>

            <div className="text-gray-400 text-xl">
                Stream with real-time input.
            </div>
        </div>

        <div className="col-span-12 md:col-span-4  flex-col">
            <div className="text-blue-400 flex justify-center items-center pb-5">
                <Headphone size="md" />
            </div>

            <div className="font-bold text-2xl pb-2">
                High-Quality Audio
            </div>

            <div className="text-gray-400 text-xl">
                Crystal clear sound quality.
            </div>
        </div>
    </div>

}