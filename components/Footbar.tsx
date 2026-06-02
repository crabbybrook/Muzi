function getCurrentYear(){
    const date = new Date()
    return date.getFullYear()
}
export function Footbar(){

    const year = getCurrentYear()

    return <div className="flex justify-around items-center p-5 text-gray-400">
        <div className="text-xs">
            © {year} Muzi. All rights reserved.
        </div>

        <div className="text-xs flex gap-5">
            <div>Spaces</div>
            <div>Streams</div>
        </div>
    </div>
}