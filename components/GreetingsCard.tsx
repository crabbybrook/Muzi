import { Afternoon, Evening, Moon, Sun } from "@/Icons/allIcons"

export default function GreetingsCard() {
    const hours = new Date().getHours()

    return <div className="flex gap-2 font-bold text-2xl">
        <div>Good</div>
        <div>
            {hours >= 0 && hours < 12 ?
                <div className="flex gap-3 justify-center items-center">
                    Morning
                    <div className="text-yellow-300 ">
                        <Sun size="sm" /> </div>
                </div> : hours >= 12 && hours < 17 ?
                    <div className="flex gap-3 justify-center items-center">
                        Afternoon
                        <div className="text-yellow-500 ">
                            <Afternoon size="sm" />
                        </div>
                    </div> : hours >= 17 && hours < 21 ?
                        <div className="flex gap-3 justify-center items-center">

                            Evening
                            <div className="text-blue-300 ">
                                <Evening size="sm" />
                            </div>
                        </div> :
                        <div className="flex gap-3 justify-center items-center">
                            Night
                            <div className="text-blue-500 ">
                                <Moon size="sm" />
                            </div>
                        </div>}
        </div>
    </div>
}