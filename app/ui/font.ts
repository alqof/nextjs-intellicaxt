import { Inter, Lusitana, Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
 
export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
});
export const lusitana = Lusitana({ 
    subsets: ['latin'],
    weight: ['400', '700'],
});
export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export const IBMPlex = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-ibm-plex',
})