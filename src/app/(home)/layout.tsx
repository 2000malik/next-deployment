"use client";
import { addPhoneMethod } from "@/src/Utils/yup-phone";
import { FooterDark } from "@/src/Partials/Footer";
import { PropsWithChildren } from "react";
import ReduxProvider from "../redux-provider";
import { HomeNavbar } from "@/src/Partials/Navbar";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ReduxProvider>
      <div className="bg-dark tracking-normal relative">
        <HomeNavbar />
        {children}
        <FooterDark />
      </div>
    </ReduxProvider>
  );
}
