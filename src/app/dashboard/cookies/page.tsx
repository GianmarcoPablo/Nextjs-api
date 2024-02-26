import { cookies } from "next/headers"
import { TabBar } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Cookies",
    description: "Cookies page",
}

export default function Cookiespage() {

    const cookieStore = cookies()
    const cookieTab = cookieStore.get("selectedTab")?.value ?? "1"

    return (
        <div className="grid gird-cols-1 sm:grid-cols-2 pag-3">


            <div className="flex flex-col">
                <span className="text-3xl">Tabs</span>
                <TabBar
                    currentTab={parseInt(cookieTab)}
                />
            </div>


        </div>
    )
}
