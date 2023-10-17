"use client";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { PropsWithChildren, useEffect, useState } from "react";
import ReduxProvider from "../redux-provider";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffectOnce } from "react-use";
import Navbar from "@/src/Partials/Navbar";
import { FooterDark } from "@/src/Partials/Footer";
import Sidebar from "@/src/Partials/Sidebar";
import { resetAuth } from "@/src/Redux/Auth";
import { resetAnalytics } from "@/src/Redux/analytics";
import { resetPodcast } from "@/src/Redux/podcast";
import { handleUnauth } from "@/src/Utils";
import { useAppSelector, useAppDispatch } from "@/src/Hooks";

const AuthValidator = () => {
  const navigate = useRouter();
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const pathName = usePathname();

  const resetState = () => {
    dispatch(resetAuth());
    dispatch(resetAnalytics());
    dispatch(resetPodcast());
  };

  useEffectOnce(() => {
    handleUnauth(resetState);
  });

  useEffect(() => {
    if (!auth.token || !auth.user) {
      navigate.push("/");
      return;
    }

    if (!auth.user.current_subscription) {
      // navigate.push("/onboarding/one");
    }
  }, [pathName, auth]);
  return <></>;
};

export default function RootLayout({ children }: PropsWithChildren) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <ReduxProvider>
      <AuthValidator />
      <div className="bg-dark tracking-normal">
        <ToastContainer position="top-right" theme="dark" hideProgressBar />
        <div className="content">
          {showSidebar && <Sidebar />}
          <div className={`sm:ml-[20rem] h-screen overflow-y-auto`}>
            <Navbar />
            <div className="p-4 md:p-8">{children}</div>
          </div>
        </div>
      </div>
    </ReduxProvider>
  );
}
