'use client'

import {useRouter} from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const router = useRouter()

    return (
        <header className="flex justify-between items-center bg-gray-800 h-5/6 px-20 py-10">
            <Link href="/">
                <h1 className="font-bold text-3xl text-white">
                    Tasks App
                </h1>
            </Link>

            <div>
                <button
                    className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center"
                    onClick={() => {
                        router.push("/new")
                    }}
                >
                    Add task
                </button>
            </div>
        </header>
    )
}