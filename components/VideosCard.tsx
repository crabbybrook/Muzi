
interface VideoDetails {
    thumbnailURL: string,
    title: string,
}

export function VideoCard(props: VideoDetails){
    const {thumbnailURL, title} = props

    return <div className="flex justify-start p-2">
        <div className="flex gap-5 mt-5 w-full md:w-100 justify-center items-center">
            <div className="md:h-15 overflow-hidden">
                <img width={160} height={160} src={thumbnailURL} className="md:w-40 mb-5 md:mb-0 object-cover rounded-md "/>  
            </div>

            <div className="grow">
                <div className="font-semibold text-sm text-white">{title}</div>
            </div>
        </div>  
    </div>
}