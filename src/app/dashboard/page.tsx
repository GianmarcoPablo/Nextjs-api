import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function DashBoardPage() {

    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin")
    }

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            <WidgetItem title="Usuario conectado">
                <div className="flex flex-col">
                    <span>
                        <strong>Nombre:</strong> {session.user?.name}
                    </span>
                    <span>
                        <strong>Email:</strong> {session.user?.email}
                    </span>
                    <span>
                        <strong>Proveedor:</strong> {session.user?.image}
                    </span>

                    {
                        JSON.stringify(session)
                    }
                </div>
            </WidgetItem>
        </div>
    )
}
