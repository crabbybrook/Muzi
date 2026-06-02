import { auth } from "@/auth";
import { AddSpace } from "@/components/AddSpace";
import { AllSpaces } from "@/components/AllSpaces";
import GreetingsCard from "@/components/GreetingsCard";
import { RenderForm } from "@/components/RenderForm";
import { client } from "@/lib/client";

async function getAllSpaces(){
    const session = await auth()
    const allSpaces = await client.space.findMany({
        where: {
            userId: session?.user?.id
        }
    })
    return allSpaces
}

export default async function Space() {
    const allSpaces = await getAllSpaces()

    return <div>
        <div className="border border-white m-8 p-5 rounded-4xl">
            <div className="flex justify-between items-center">
                <GreetingsCard />
                {allSpaces.length !== 0 && <AddSpace />}
            </div>
        </div>
        <div className="w-full">
            <div>            
                <AllSpaces allSpaces={allSpaces} />
            </div>
            <div>
                <RenderForm />
            </div>
        </div>
    </div>
}