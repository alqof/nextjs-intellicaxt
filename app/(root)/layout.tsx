import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'
import { Toaster } from "@/components/ui/sonner"


const RootLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className="root">
            <Sidebar />
            <MobileNav />
            
            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>
            </div>

            <Toaster richColors position="top-center" />
        </main>
    )
}
export default RootLayout