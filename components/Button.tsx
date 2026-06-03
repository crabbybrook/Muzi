"use client"
interface ButtonProps{
    title?: string,
    color: 'primary' | 'primary-2'| 'secondary' | 'primary-3' | 'secondary-2' | 'secondary-3' | 'primary-4' | 'primary-5'| 'secondary-4' | 'primary-6' | 'secondary-5'
    icon?: React.ReactNode
    iconFront?: React.ReactNode
    onClick: () => void
}

const buttonColor = {
    'primary': 'bg-purple-500 text-white p-3 rounded-lg text-sm font-bold hover:bg-purple-800 w-20',
    'primary-2': 'bg-purple-500 text-white p-3 rounded-lg text-sm font-bold hover:bg-purple-800 w-30',
    'primary-3': 'bg-purple-500 text-white p-2 rounded-lg text-sm font-bold hover:bg-purple-800 w-20',
    'primary-4': 'text-white bg-purple-500 p-3 rounded-lg text-sm font-bold hover:bg-purple-800 w-full text-center',    
    'primary-5': 'text-white bg-purple-500 p-3 rounded-lg text-sm font-bold hover:bg-purple-800 w-full flex justify-center items-center gap-2',  
    'primary-6': 'bg-purple-500 text-white p-3 rounded-lg text-sm font-bold hover:bg-purple-800 w-25 h-10 flex justify-center gap-2 items-center',
    'secondary': 'bg-white text-purple-500 p-3 rounded-lg text-sm font-bold hover:bg-purple-800 w-30',
    'secondary-2': 'bg-white text-purple-500 p-2 rounded-lg text-sm font-bold hover:bg-purple-800 w-30 gap-2 flex justify-center items-center',
    'secondary-3': 'text-purple-500 bg-white p-3 rounded-lg text-sm font-bold hover:bg-purple-800 w-25 flex justify-center gap-2 items-center',
    'secondary-4': 'text-purple-500 bg-white p-3 rounded-lg text-sm font-bold hover:bg-purple-800 w-25 h-10 flex justify-center gap-2 items-center',
    'secondary-5': 'text-purple-500 bg-white p-3 rounded-lg text-sm font-bold hover:bg-purple-800 w-15 h-10 flex justify-center gap-2 items-center'
}


export default function Button(props: ButtonProps){
    const {title, color, onClick, icon, iconFront} = props

    return <div className={`${buttonColor[color]} cursor-pointer`} onClick={onClick}>
        {iconFront} {title} {icon}
    </div>
}