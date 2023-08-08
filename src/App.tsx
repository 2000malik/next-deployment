import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useMatch, useMatches, useNavigate } from 'react-router';
import Navbar, { HomeNavbar } from './Partials/Navbar';
import Sidebar from './Partials/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from './Hooks';
import { maximize, minimize } from './Redux/Sidebar';
import { FooterDark } from './Partials/Footer';
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { addPhoneMethod } from './Utils/yup-phone';
import 'flowbite';


export const loadingBarRef = React.createRef<LoadingBarRef | null>()
addPhoneMethod();


const UnauthAppLayout = () => {
  const location = useLocation()
  const match = useMatches();
  const [showNav, setShowNav] = useState(true);


  return (
    <>
      <div className='bg-dark tracking-normal'>
        <HomeNavbar />
        <Outlet />
        <FooterDark />
      </div>
    </>
  )
}


const AuthAppLayout = () => {
  const location = useLocation();
  const match = useMatches();
  const [showSidebar, setShowSidebar] = useState(true);


  return (
    <>
      <div className='bg-dark tracking-normal'>
        <div className='content relative'>
          {showSidebar &&
            <Sidebar />
          }
          <div className={`sm:ml-[20rem] h-screen overflow-y-auto`}>
            <Navbar />
            <div className="relative p-4 md:p-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


function UnauthApp() {
  const location = useLocation()
  const match = useMatches();
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <UnauthAppLayout />
    </>
  );
}


export function AuthApp() {
  const location = useLocation()
  const match = useMatches();
  const navigate = useNavigate();

  const auth = useAppSelector(state => state.auth);

  useEffect(() => {
    // if (!auth.token || !auth.user) {
    //   navigate("/", { replace: true });
    // }
  }, [location, auth])

  return (
    <>
      <AuthAppLayout />
    </>
  );
}


export default UnauthApp;
