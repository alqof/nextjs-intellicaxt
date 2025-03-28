"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
  

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
            </Link>

            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton />

                    <Sheet>
                        <SheetTrigger>
                            <Image src="/assets/icons/menu.svg" alt="menu" width={32} height={32} className="cursor-pointer" />
                        </SheetTrigger>

                        <SheetContent className="sheet-content sm:w-64" side="right">
                            <SheetHeader>
                                <SheetTitle>
                                    <Image src="/assets/images/logo-text.svg" alt="logo" width={152} height={23} />
                                </SheetTitle>
                            </SheetHeader>

                            <ul className="header-nav_elements">
                                {navLinks.map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route} className={`${isActive ? 'bg-purple-gradient text-white' : 'text-dark-700'} sidebar-nav_element flex font-bold whitespace-nowrap`}>
                                            <Link className="sidebar-link cursor-pointer" href={link.route}>
                                                <Image src={link.icon} className={`${isActive && 'brightness-200'}`} alt="logo" width={24} height={24} />
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </SignedIn>

                <SignedOut>
                    <Button asChild className="button bg-purple-gradient bg-cover">
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}
export default MobileNav