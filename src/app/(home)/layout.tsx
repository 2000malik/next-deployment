'use client';
import { addPhoneMethod } from "@/utils/yup-phone";
import { HomeNavbar } from "@/partials/navbar";
import { FooterDark } from "@/partials/footer";
import { PropsWithChildren, Suspense } from "react";
import ReduxProvider from "../redux-provider";
import Loading from "../(dashboard)/loading";


export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <ReduxProvider>
        <Suspense fallback={<Loading />}>
            <div className='bg-dark tracking-normal relative'>
                <HomeNavbar />
                    {children}
                <FooterDark />
            </div>
        </Suspense>
        </ReduxProvider>
    )
}