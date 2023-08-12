import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';

import { PropsWithChildren } from "react";
import { Inter, Raleway, Poppins } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const raleway = Raleway({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-raleway',
})

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
})

export default function RootLayout({ children }: PropsWithChildren) {
    return (

        <html lang="en" className={`${inter.variable} ${raleway.variable} ${poppins.variable}`} >
            <body className="" >
                <main className="relative">
                    {children}
                </main>
            </body>
        </html >
    )
}