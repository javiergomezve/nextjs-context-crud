'use client'

import dynamic from "next/dynamic";

export const Toaster = dynamic(async () => {
    const {toaster} = await import('react-hot-toast')
    return toaster
}, {
    ssr: false,
})