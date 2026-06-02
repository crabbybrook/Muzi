import NoSpaceStream from "./NoSpaceStream"
import { SpaceComp } from "./SpaceComp"

type SpaceType = {
    id: string,
    name: string
}

interface Spaces{
    allSpaces: SpaceType[]
}

export function AllSpaces(props: Spaces) {
    const {allSpaces} = props

    if (allSpaces.length === 0 ) {
        return <>
        <NoSpaceStream />
        </>
    }
    return <div className="grid grid-cols-12 justify-center items-center gap-5 ml-7">
        {allSpaces.map((space) => {
            return <div key={space.id} className="col-span-12 md:col-span-6 lg:col-span-4 bg-purple-800 p-6 rounded-3xl justify-center">
                <SpaceComp name={space.name} id={space.id}/>
            </div>
        })}
    </div>
}