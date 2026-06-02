import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req)=> {
    const session = req.auth
    if(!session?.user?.id){
        return NextResponse.redirect(new URL('/api/auth/signin', req.url))
    }

    return NextResponse.next()

})

export const config = {
  matcher: ["/space/:path*"],
}
