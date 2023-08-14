'use client';
import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';

import { PropsWithChildren } from "react";
import { Inter, Raleway, Poppins } from 'next/font/google'
import axios from "axios";
import store, { wrapper } from '@/setup/redux/store';
import * as _redux from "@/setup"
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

_redux.setupAxios(axios, store())

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

function RootLayout({ children, ...rest }: PropsWithChildren) {
    // const { store, props } = wrapper.useWrappedStore(rest);

    return (

        <html lang="en" className={`${inter.variable} ${raleway.variable} ${poppins.variable}`} >
            <body className="" >
                <Provider store={store()}>

                    <main className="relative">
                        {children}
                    </main>

                </Provider>
            </body>
        </html >
    )
}

export default RootLayout;