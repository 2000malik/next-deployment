import ExchangeCard from "../../../../Components/ExchangeCard"
import { APICall, dataURLtoFile, formatToCurrency, getIcon, getImage } from "../../../../Utils"
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { confirmBVN, confirmBVNImage, getProfile, resendBVNOTP, verifyBVN } from "../../../../Api/Auth"
import { useAppDispatch, useAppSelector } from "../../../../Hooks";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { updateUser } from "../../../../Redux/Auth"
import { Tab, Listbox } from '@headlessui/react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import getSymbolFromCurrency from 'currency-symbol-map'
import { Button } from "../../../../Components/Button"


const GetPaidCard = () => {
    return (
        <div className="relative flex-1 rounded-3xl px-6 py-10" style={{ background: "linear-gradient(45deg, #083F62 0%, #25AEA4 100%)" }}>
            <div className="absolute top-0 right-0 flex justify-end">
                <div className=" p-4">
                    <button>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="36" rx="18" fill="white" fill-opacity="0.2" />
                            <path d="M23 13L13 23M13 13L23 23" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
                <div className="">
                    <img className="w-[7.5rem] h-[7.5rem]" src={getImage("cash.png")} alt="" />
                </div>
                <div className="flex-1">
                    <div>
                        <span className="font-bold text-2xl font-raleway text-[#F9FAFB]">
                            Get paid to podcast
                        </span>
                    </div>
                    <div>
                        <span className="">
                            Welcome to Wokpa. Do well to enjoy all our awesome features and start creating!!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AnalyticsCard = () => {
    return (
        <div className="relative flex-1 rounded-3xl px-6 py-10" style={{ background: "linear-gradient(27deg, #383C9E 0%, #6941C6 100%)" }}>
            <div className="absolute top-0 right-0 flex justify-end">
                <div className=" p-4">
                    <button>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="36" rx="18" fill="white" fill-opacity="0.2" />
                            <path d="M23 13L13 23M13 13L23 23" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-1 justify-center">
                <div className="">
                    <img className="w-48" src={getImage("finance.png")} alt="" />
                </div>
                <div className="flex-1">
                    <div>
                        <span className="font-bold text-2xl font-raleway text-[#F9FAFB]">
                            Real time analytics
                        </span>
                    </div>
                    <div>
                        <span className="">
                            Unlock podcast analytics with Wokpa's powerful cards and elevate your content.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const EpisodeItem: React.FC<{ mode: "list" | "card" }> = ({ mode }) => {
    return (
        <>
            {
                mode == "list" ?
                    <div className="w-full flex justify-between items-center py-6">
                        <div className="flex gap-4">
                            <div className="h-full">
                                <div className="flex justify-between flex-col gap-2">
                                    <div>
                                        <div className="text-sm font-medium">
                                            Published:  17 May , 2023
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-lg">
                                            The midnight miracle of the gospel of Jesus  -
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center text-[#D0D5DD]">
                                        <div className="flex gap-1 items-center">
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 13.6195L13.635 16.417L12.405 11.1445L16.5 7.59699L11.1075 7.13949L9 2.16699L6.8925 7.13949L1.5 7.59699L5.595 11.1445L4.365 16.417L9 13.6195Z" fill="#D0D5DD" />
                                            </svg>
                                            <div className="text-sm font-semibold">
                                                4.6
                                                <span className="font-normal ml-1">
                                                    (20)
                                                </span>
                                            </div>
                                        </div>
                                        <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2" cy="2.66699" r="2" fill="#D0D5DD" />
                                        </svg>

                                        <div className="text-sm">
                                            Society & Culture
                                        </div>

                                        <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2" cy="2.66699" r="2" fill="#D0D5DD" />
                                        </svg>

                                        <div className="text-sm">
                                            Weekly
                                        </div>

                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="">
                                            <div className="text-[8px] text-[#0D0D0D] font-semibold bg-white rounded-full py-2 px-4">
                                                20 Episodes
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.66675 13.3337H9.33341V2.66699H6.66675V13.3337ZM2.66675 13.3337H5.33341V8.00033H2.66675V13.3337ZM10.6667 6.00033V13.3337H13.3334V6.00033H10.6667Z" fill="#E5F5F4" />
                                            </svg>

                                            <div>
                                                500 Plays
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.1333 7.66667L13.8004 9L12.4666 7.66667M13.9634 8.66667C13.9876 8.44778 14 8.22534 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C9.88484 14 11.5667 13.1309 12.6667 11.7716M8 4.66667V8L10 9.33333" stroke="#E5F5F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <div>
                                                4h 30min
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm">
                                            <div>
                                                ₦
                                            </div>
                                            <div>
                                                0
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* action buttons */}
                        <div className="flex gap-4">
                            <div className="text-center">
                                <button>
                                    <div>
                                        <svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 4.00023H6.8C5.11984 4.00023 4.27976 4.00023 3.63803 4.32721C3.07354 4.61483 2.6146 5.07377 2.32698 5.63826C2 6.27999 2 7.12007 2 8.80023V17.2002C2 18.8804 2 19.7205 2.32698 20.3622C2.6146 20.9267 3.07354 21.3856 3.63803 21.6732C4.27976 22.0002 5.11984 22.0002 6.8 22.0002H15.2C16.8802 22.0002 17.7202 22.0002 18.362 21.6732C18.9265 21.3856 19.3854 20.9267 19.673 20.3622C20 19.7205 20 18.8804 20 17.2002V13.0002M7.99997 16.0002H9.67452C10.1637 16.0002 10.4083 16.0002 10.6385 15.945C10.8425 15.896 11.0376 15.8152 11.2166 15.7055C11.4184 15.5818 11.5914 15.4089 11.9373 15.063L21.5 5.50023C22.3284 4.6718 22.3284 3.32865 21.5 2.50023C20.6716 1.6718 19.3284 1.6718 18.5 2.50022L8.93723 12.063C8.59133 12.4089 8.41838 12.5818 8.29469 12.7837C8.18504 12.9626 8.10423 13.1577 8.05523 13.3618C7.99997 13.5919 7.99997 13.8365 7.99997 14.3257V16.0002Z" stroke="#EAECF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="text-xs mt-1">
                                        Edit
                                    </div>
                                </button>
                            </div>
                            <div className="text-center">
                                <button>
                                    <div>
                                        <svg className="inline" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.5 9.00001L21.5 3.00001M21.5 3.00001H15.5M21.5 3.00001L12.5 12M10.5 3H8.3C6.61984 3 5.77976 3 5.13803 3.32698C4.57354 3.6146 4.1146 4.07354 3.82698 4.63803C3.5 5.27976 3.5 6.11984 3.5 7.8V16.2C3.5 17.8802 3.5 18.7202 3.82698 19.362C4.1146 19.9265 4.57354 20.3854 5.13803 20.673C5.77976 21 6.61984 21 8.3 21H16.7C18.3802 21 19.2202 21 19.862 20.673C20.4265 20.3854 20.8854 19.9265 21.173 19.362C21.5 18.7202 21.5 17.8802 21.5 16.2V14" stroke="#EAECF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="text-xs mt-1">
                                        Share
                                    </div>
                                </button>
                            </div>
                            <div>
                                <button>
                                    <div>
                                        <svg className="inline" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 7.9966C4.33599 7.99236 4.2169 7.98287 4.10982 7.96157C3.31644 7.80376 2.69624 7.18356 2.53843 6.39018C2.5 6.19698 2.5 5.96466 2.5 5.5C2.5 5.03534 2.5 4.80302 2.53843 4.60982C2.69624 3.81644 3.31644 3.19624 4.10982 3.03843C4.30302 3 4.53534 3 5 3H20C20.4647 3 20.697 3 20.8902 3.03843C21.6836 3.19624 22.3038 3.81644 22.4616 4.60982C22.5 4.80302 22.5 5.03534 22.5 5.5C22.5 5.96466 22.5 6.19698 22.4616 6.39018C22.3038 7.18356 21.6836 7.80376 20.8902 7.96157C20.7831 7.98287 20.664 7.99236 20.5 7.9966M10.5 13H14.5M4.5 8H20.5V16.2C20.5 17.8802 20.5 18.7202 20.173 19.362C19.8854 19.9265 19.4265 20.3854 18.862 20.673C18.2202 21 17.3802 21 15.7 21H9.3C7.61984 21 6.77976 21 6.13803 20.673C5.57354 20.3854 5.1146 19.9265 4.82698 19.362C4.5 18.7202 4.5 17.8802 4.5 16.2V8Z" stroke="#EAECF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="text-xs mt-1">
                                        Archive
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                    :
                    <div className="">
                        <div className="relative">
                            <img className="w-[240px] h-[200px] rounded-xl" src={getImage("product.jpeg")} alt="" />
                            <div className="absolute top-0 p-2">
                                <div className="text-[8px] text-[#0D0D0D] font-semibold bg-white rounded-full py-2 px-4">
                                    20 Episodes
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="font-semibold text-lg">
                                The midnight miracle ...
                            </div>
                        </div>
                        <div className="">
                            <div className="text-sm font-medium text-[#EAECF0]">
                                Published:  17 May , 2023
                            </div>
                        </div>
                        <div className="flex gap-4 items-center mt-1">
                            <div className="flex items-center gap-1 text-sm">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66675 13.3337H9.33341V2.66699H6.66675V13.3337ZM2.66675 13.3337H5.33341V8.00033H2.66675V13.3337ZM10.6667 6.00033V13.3337H13.3334V6.00033H10.6667Z" fill="#E5F5F4" />
                                </svg>

                                <div>
                                    500 Plays
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1333 7.66667L13.8004 9L12.4666 7.66667M13.9634 8.66667C13.9876 8.44778 14 8.22534 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C9.88484 14 11.5667 13.1309 12.6667 11.7716M8 4.66667V8L10 9.33333" stroke="#E5F5F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div>
                                    4h 30min
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

const EpisodesTable = () => {
    const [viewMode, setViewMode] = useState<"list" | "card">("list");
    return (
        <div className="mt-4">
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <Listbox as={"div"} className="relative">
                        <Listbox.Button className="inline-flex w-full justify-center text-sm font-medium gap-2 items-center">
                            Active
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Listbox.Button>
                        <Listbox.Options className="absolute mt-1 w-[205px] overflow-auto bg-[#141414] p-2 rounded-lg text-sm font-medium">
                            <Listbox.Option value={"1"}>
                                {({ active }) => (
                                    <div
                                        className={`py-[0.63rem] px-2 rounded-lg hover:bg-[#1D2939] ${active ? 'bg-[#1D2939]' : ""}`}
                                    >
                                        All
                                    </div>
                                )}
                            </Listbox.Option>
                            <Listbox.Option value={"1"}>
                                {({ active }) => (
                                    <div
                                        className={`py-[0.63rem] px-2 rounded-lg hover:bg-[#1D2939] ${active ? 'bg-[#1D2939]' : ""}`}
                                    >
                                        Active
                                    </div>
                                )}
                            </Listbox.Option>
                            <Listbox.Option value={"1"}>
                                {({ active }) => (
                                    <div
                                        className={`py-[0.63rem] px-2 rounded-lg hover:bg-[#1D2939] ${active ? 'bg-[#1D2939]' : ""}`}
                                    >
                                        Archive
                                    </div>
                                )}
                            </Listbox.Option>

                        </Listbox.Options>
                    </Listbox>
                    <Listbox as={"div"} className="relative">
                        <Listbox.Button className="inline-flex w-full justify-center text-sm font-medium gap-2 items-center">
                            By date published
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Listbox.Button>
                        <Listbox.Options className="absolute mt-1 w-[205px] overflow-auto bg-[#141414] rounded-lg text-sm font-medium">
                            <div className="p-2">
                                <Listbox.Option value={"1"}>
                                    {({ active }) => (
                                        <div
                                            className={`py-[0.63rem] px-2 rounded-lg hover:bg-[#1D2939] ${active ? 'bg-[#1D2939]' : ""}`}
                                        >
                                            By podccast title
                                        </div>
                                    )}
                                </Listbox.Option>
                                <Listbox.Option value={"1"}>
                                    {({ active }) => (
                                        <div
                                            className={`py-[0.63rem] px-2 rounded-lg hover:bg-[#1D2939] ${active ? 'bg-[#1D2939]' : ""}`}
                                        >
                                            By date published
                                        </div>
                                    )}
                                </Listbox.Option>
                                <Listbox.Option value={"1"}>
                                    {({ active }) => (
                                        <div
                                            className={`py-[0.63rem] px-2 rounded-lg hover:bg-[#1D2939] ${active ? 'bg-[#1D2939]' : ""}`}
                                        >
                                            By listens
                                        </div>
                                    )}
                                </Listbox.Option>
                            </div>
                            <hr />
                            <div className="p-2">
                                <Listbox.Option value={"1"}>
                                    {({ active }) => (
                                        <div
                                            className={`py-[0.63rem] px-2 rounded-lg hover:bg-[#1D2939] ${active ? 'bg-[#1D2939]' : ""}`}
                                        >
                                            Ascending
                                        </div>
                                    )}
                                </Listbox.Option>
                                <Listbox.Option value={"1"}>
                                    {({ active }) => (
                                        <div
                                            className={`py-[0.63rem] px-2 rounded-lg hover:bg-[#1D2939] ${active ? 'bg-[#1D2939]' : ""}`}
                                        >
                                            Descending
                                        </div>
                                    )}
                                </Listbox.Option>
                            </div>
                        </Listbox.Options>
                    </Listbox>
                </div>
                <div>
                    <div className="flex items-center gap-4">
                        <div>
                            <button onClick={() => setViewMode("list")} className={`outline-none rounded ${viewMode == "list" && "bg-[#475467]"}`}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 16L13 16M25 10L13 10M25 22L13 22M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16ZM9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10ZM9 22C9 22.5523 8.55228 23 8 23C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21C8.55228 21 9 21.4477 9 22Z" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button onClick={() => setViewMode("card")} className={`outline-none rounded ${viewMode != "list" && "bg-[#475467]"}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3Z" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3Z" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19.4 14H15.6C15.0399 14 14.7599 14 14.546 14.109C14.3578 14.2049 14.2049 14.3578 14.109 14.546C14 14.7599 14 15.0399 14 15.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V15.6C21 15.0399 21 14.7599 20.891 14.546C20.7951 14.3578 20.6422 14.2049 20.454 14.109C20.2401 14 19.9601 14 19.4 14Z" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14Z" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="">
                            <div className="relative">
                                <div className="absolute pl-3 flex items-center h-full justify-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search" className="text-lg w-[292px] placeholder:text-[#98A2B3] pl-10 pr-3 py-2 rounded-lg border border-gray-300 bg-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                {
                    <div className={`${viewMode == "list" ? "divide-y pr-12" : "grid grid-cols-4 gap-y-8"}`}>
                        <EpisodeItem mode={viewMode} />
                        <EpisodeItem mode={viewMode} />
                        <EpisodeItem mode={viewMode} />
                        <EpisodeItem mode={viewMode} />
                        <EpisodeItem mode={viewMode} />
                        <EpisodeItem mode={viewMode} />
                        <EpisodeItem mode={viewMode} />
                        <EpisodeItem mode={viewMode} />
                    </div>
                }
            </div>
        </div >
    )
}

const EpisodeViewPage = () => {
    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch();
    const wallets = useAppSelector(state => state.wallets.wallets);
    const handleProfile = async () => {
        try {
            const response = await getProfile();
            dispatch(updateUser({ user: response.data.data }));
        } catch (error) {

        }
    }

    useEffect(() => {
        handleProfile()
    }, [])
    return (
        <div id="dashboard">
            <div className="relative">
                <div>
                    <img className="rounded-t-3xl h-[160px] w-full o object-cover" src={getImage("gradient.jpeg")} alt="" />
                </div>
                <div className="pl-12 flex-1 py-6">
                    <div className="flex gap-4">

                        <div className="relative -top-16">
                            <img className="w-[206px] h-[206px] rounded-lg border-2 border-[#BEE7E4]" src={getImage("product.jpeg")} alt="" />
                        </div>
                        <div className="flex-1">
                            <div className="flex gap-4 items-center">
                                <div className="text-sm font-medium">
                                    All Podcasts
                                </div>
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 12L10 8L6 4" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="text-sm font-medium text-[#66C6BF]">
                                    The midnight
                                </div>
                            </div>
                            <div className="flex justify-between flex-col gap-3 mt-5">

                                <div>
                                    <div className="font-medium font-raleway text-3xl">
                                        The midnight miracle of the gospel of Jesus  -
                                    </div>
                                </div>
                                <div className="text-sm text-[#D0D5DD]">
                                    This is a sample subtext of the show that the users will see that will accompany the title text and will explain more information of this particular show and maybe explanation of the episodes... show more
                                </div>
                                <div className="flex gap-2 items-center text-[#D0D5DD]">
                                    <div className="flex gap-1 items-center">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 13.6195L13.635 16.417L12.405 11.1445L16.5 7.59699L11.1075 7.13949L9 2.16699L6.8925 7.13949L1.5 7.59699L5.595 11.1445L4.365 16.417L9 13.6195Z" fill="#D0D5DD" />
                                        </svg>
                                        <div className="text-sm font-semibold">
                                            4.6
                                            <span className="font-normal ml-1">
                                                (20)
                                            </span>
                                        </div>
                                    </div>
                                    <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2" cy="2.66699" r="2" fill="#D0D5DD" />
                                    </svg>

                                    <div className="text-sm">
                                        Society & Culture
                                    </div>

                                    <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2" cy="2.66699" r="2" fill="#D0D5DD" />
                                    </svg>

                                    <div className="text-sm">
                                        Weekly
                                    </div>

                                </div>
                                <div className="flex gap-5 items-center">
                                    <div className="">
                                        <div className="text-xs text-[#0D0D0D] font-semibold bg-white rounded-full py-2 px-4">
                                            20 Episodes
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">
                                            Published:  17 May , 2023
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66675 13.3337H9.33341V2.66699H6.66675V13.3337ZM2.66675 13.3337H5.33341V8.00033H2.66675V13.3337ZM10.6667 6.00033V13.3337H13.3334V6.00033H10.6667Z" fill="#E5F5F4" />
                                        </svg>

                                        <div>
                                            500 Plays
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.1333 7.66667L13.8004 9L12.4666 7.66667M13.9634 8.66667C13.9876 8.44778 14 8.22534 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C9.88484 14 11.5667 13.1309 12.6667 11.7716M8 4.66667V8L10 9.33333" stroke="#E5F5F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div>
                                            4h 30min
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                        <div>
                                            ₦
                                        </div>
                                        <div>
                                            100k
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-8">
                <Tab.Group>
                    <Tab.List className="flex border-b gap-2 border-[#98A2B3]">

                        <Tab className="outline-none">
                            {({ selected }) => (
                                <div className={`${selected ? "border-b-2 border-[#0D8478]" : "text-[#98A2B3]"} font-semibold px-4 text-xl pb-2`}>
                                    All Episodes
                                </div>
                            )}
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <EpisodesTable />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}

export default EpisodeViewPage