'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

interface Join {
    token: string,
    spaceId: string
}
export function JoinLogic(props: Join) {
    const { token, spaceId } = props
    const router = useRouter()

    async function shareAccess() {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/space/${spaceId}/join/${token}`)
        if (res.status === 403) {
            toast.error(res.data.message)
            router.push('/')
        } else {
            toast.success(res.data.message)
            router.push(`/space/${spaceId}/streams`)
        }
    }
    useEffect(() => {
        shareAccess()
    }, [])

    return <div className="flex justify-center items-center">
        <div className="text-4xl font-bold">
            Joining.....
        </div>
    </div>
}