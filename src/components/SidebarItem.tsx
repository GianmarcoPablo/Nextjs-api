"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci";

interface Props {
    icon: React.ReactNode;
    path: string;
    title: string;
}

export default function SidebarItem({ icon, path, title }: Props) {

    {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */ }

    const pathName = usePathname();

    return (
        <li>
            <Link
                href={path}
                className={` px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-700 group
                ${pathName === path ? `text-white bg-gradient-to-r from-sky-600 to-cyan-400` : `hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400`}
                `}
            >
                {icon}
                <span className="-mr-1 font-medium">
                    {title}
                </span>
            </Link>
        </li>
    )
}
