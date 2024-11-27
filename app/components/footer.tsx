import { DiscordIcon, GithubIcon, TelegramIcon } from '@/assets/general'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-[#000014] text-white py-8 flex justify-center fixed bottom-0 w-full">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="text-sm">
                    copyright@Autoswappr2024
                </div>
                <div className="flex items-center gap-x-4">
                    <Link href="" className="text-primaryText text-[1em]" >
                        Team
                    </Link>
                    <Link href="" className="text-primaryText text-[1em]" >
                        Documentation
                    </Link>
                </div>


                <div className="flex space-x-4">
                    <Link href="" className="text-primaryText text-[1em]" >
                        <TelegramIcon />
                    </Link>
                    <Link href="" className="text-primaryText text-[1em]" >
                        <GithubIcon />
                    </Link>
                    <Link href="" className="text-primaryText text-[1em]" >
                        <DiscordIcon />
                    </Link>
                </div>
            </div>
        </footer>

    )
}
