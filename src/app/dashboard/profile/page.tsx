"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"

export default function ProfilePage() {

    const { data: session } = useSession()

    
    return (
        <div>
            <h1>Page Profile</h1>
            <hr />
            <div className="flex flex-col">
                <span>
                    {session?.user?.name ?? "NO NAME"}
                </span>
                <span>
                    {session?.user?.email ?? "NO EMAIL"}
                </span>
                <span>
                    {session?.user?.image ?? "NO IMAGE"}
                </span>
            </div>
        </div>
    )
}
