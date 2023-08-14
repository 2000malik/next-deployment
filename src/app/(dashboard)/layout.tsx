
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FooterDark } from "@/partials/footer";
import Navbar, { HomeNavbar } from "@/partials/navbar";
import Sidebar from "@/partials/sidebar";
import { PropsWithChildren, useState } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
    const [showSidebar, setShowSidebar] = useState(true);

    return (

        <div className='bg-dark tracking-normal'>
            <div className='content relative'>
                {showSidebar &&
                    <Sidebar />
                }
                <div className={`sm:ml-[20rem] h-screen overflow-y-auto`}>
                    <Navbar />
                    <div className="relative p-4 md:p-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}