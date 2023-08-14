import ExchangeCard from "../../../../components/exchange-card"
import { APICall, dataURLtoFile, formatToCurrency, getIcon, getImage } from "../../../../Utils"
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { confirmBVN, confirmBVNImage, getProfile, resendBVNOTP, verifyBVN } from "../../../../Api/Auth"
import { useAppDispatch, useAppSelector } from "../../../../Hooks";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { updateUser } from "../../../../redux/auth"
import { Tab, Listbox } from '@headlessui/react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import getSymbolFromCurrency from 'currency-symbol-map'
import { Button } from "../../../../components/button"
import { Link } from "react-router-dom";


export const TransactionsTable = () => {
    const [viewMode, setViewMode] = useState<"list" | "card">("list");
    return (
        <div className="mt-4">
            <div className="mt-8">
                <div>
                    <div className="overflow-x-auto mt-8 md:h-auto h-96 rounded-lg">
                        <table className="border-collapse table-auto w-full whitespace-nowrap">
                            <thead className="bg-[#101828] rounded-t-lg text-base  text-white text-left border-none">
                                <tr>
                                    <th className="py-4 pl-10 font-medium text-xs">Purpose</th>
                                    <th className="py-4 pl-6 font-medium text-xs">Type</th>
                                    <th className="py-4 pl-6 font-medium text-xs">Date & Time</th>
                                    <th className="py-4 pl-6 font-medium text-xs">Payment ID</th>
                                    <th className="py-4 pl-6 font-medium text-xs">Amount</th>
                                    <th className="py-4 pl-6 font-medium text-xs">Status</th>
                                    <th className="py-4 pl-6 font-medium text-xs"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#141414]">
                                {
                                    [1, 2, 3, 4, 5,].map(() => {
                                        return <tr>
                                            <td className="py-4 border-b pl-10 text-xs font-medium border-t border-[#667085]">
                                                <div className="">
                                                    <input className="rounded-md border-[#D0D5DD] bg-white" type="checkbox" name="" id="" />
                                                    <span className="ml-2">Package subscription</span>
                                                </div>
                                            </td>
                                            <td className="py-4 border-b pl-6 text-xs border-t border-[#667085] ">
                                                <div className="">
                                                    <span className="inline-flex gap-1 text-sm font-medium rounded-full py-1 px-3 border-2 text-red-500 border-red-500 items-center">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#F04438" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span>
                                                            Debit
                                                        </span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 border-b pl-6 text-xs font-medium border-t border-[#667085] ">
                                                <div>June 10,2023 9:23AM</div>
                                            </td>
                                            <td className="py-4 border-b pl-6 text-xs font-medium border-t border-[#667085] ">
                                                <div className="">
                                                    #202310412
                                                </div>
                                            </td>
                                            <td className="py-4 border-b pl-6 text-xs border-t border-[#667085] ">
                                                <div className="text-sm font-bold ">
                                                    <span className="">
                                                        ₦
                                                    </span>
                                                    <span className="ml-1">10,000</span>
                                                </div>
                                            </td>
                                            <td className="py-4 border-b pl-6 text-xs border-t border-[#667085] ">
                                                <div className="">
                                                    <span className="bg-green-200 text-green-600 rounded-full py-2 px-4">
                                                        Completed
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 border-b pl-6 text-xs font-medium border-t border-[#667085] ">
                                                <div className="flex items-center gap-6">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.0002 10.6663C17.4668 10.6663 18.6668 9.46634 18.6668 7.99967C18.6668 6.53301 17.4668 5.33301 16.0002 5.33301C14.5335 5.33301 13.3335 6.53301 13.3335 7.99967C13.3335 9.46634 14.5335 10.6663 16.0002 10.6663ZM16.0002 13.333C14.5335 13.333 13.3335 14.533 13.3335 15.9997C13.3335 17.4663 14.5335 18.6663 16.0002 18.6663C17.4668 18.6663 18.6668 17.4663 18.6668 15.9997C18.6668 14.533 17.4668 13.333 16.0002 13.333ZM16.0002 21.333C14.5335 21.333 13.3335 22.533 13.3335 23.9997C13.3335 25.4663 14.5335 26.6663 16.0002 26.6663C17.4668 26.6663 18.6668 25.4663 18.6668 23.9997C18.6668 22.533 17.4668 21.333 16.0002 21.333Z" fill="#F2F4F7" />
                                                    </svg>

                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

const WalletPage = () => {
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
                <div className="flex gap-3 items-center">
                    <div className="text-sm font-medium">
                        Emax podcast
                    </div>
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="#D0D5DD" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="text-sm font-medium">
                        Monitize
                    </div>
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="#D0D5DD" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="text-sm font-medium text-[#66C6BF]">
                        Wallet
                    </div>
                </div>
                <div className="pr-5 mt-5">
                    <div className={`font-semibold text-xl pb-2`}>
                        Wallet
                    </div>
                    <div>
                        <p className="text-sm">
                            We monitize your podcast so you don't have to.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="text-lg font-semibold self-end">
                        Total balance
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <div>
                            <Button className="!from-transparent !to-transparent text-sm font-semibold border bg-gradient-to-r bg-clip-text">
                                View account details
                            </Button>
                        </div>
                        <div>
                            <Button className="!from-white !to-white text-[#063150] text-sm font-semibold">
                                Add money
                            </Button>
                        </div>
                        <div>
                            <Button className="font-semibold text-sm">
                                Transfer money
                            </Button>
                        </div>
                    </div>
                </div>
                {/* amount   */}
                <div className="mt-4">
                    <div className="flex gap-4">
                        <div className="font-raleway text-4xl font-bold flex items-center">
                            <span className="font-normal mr-1">
                                ₦
                            </span>
                            2,000,000
                        </div>
                        <div className="self-end">
                            <span className="text-sm font-medium bg-green-100 py-1 px-3 rounded-full inline-flex items-center gap-1 font-inter text-green-600">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>7.2%</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="grid grid-cols-3 gap-4">
                    <div className="py-4 px-6 rounded-xl bg-grayTrue">
                        <div className="flex gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#21A79C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div>
                                <div className="text-sm font-medium">Account Info</div>
                                <div className="mt-4 flex gap-4 items-center">
                                    <div className="text-lg font-medium">2003428772</div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 px-6 rounded-xl bg-grayTrue">
                        <div className="flex gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 20H8M17 9H17.01M8 6H5.2C4.0799 6 3.51984 6 3.09202 6.21799C2.71569 6.40973 2.40973 6.71569 2.21799 7.09202C2 7.51984 2 8.0799 2 9.2V12.8C2 13.9201 2 14.4802 2.21799 14.908C2.40973 15.2843 2.71569 15.5903 3.09202 15.782C3.51984 16 4.0799 16 5.2 16H8M15.2 20H18.8C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2C22 6.0799 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H15.2C14.0799 4 13.5198 4 13.092 4.21799C12.7157 4.40973 12.4097 4.71569 12.218 5.09202C12 5.51984 12 6.07989 12 7.2V16.8C12 17.9201 12 18.4802 12.218 18.908C12.4097 19.2843 12.7157 19.5903 13.092 19.782C13.5198 20 14.0799 20 15.2 20ZM18 15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15C16 14.4477 16.4477 14 17 14C17.5523 14 18 14.4477 18 15Z" stroke="#BA24D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div>
                                <div className="text-sm font-medium">Amount generated from Ads  </div>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-1 items-center text-2xl font-raleway">
                            <div>
                                ₦
                            </div>
                            <div className=" font-semibold">20,000</div>

                        </div>
                    </div>
                    <div className="py-4 px-6 rounded-xl bg-grayTrue">
                        <div className="flex gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6V22M12 6H8.46429C7.94332 6 7.4437 5.78929 7.07533 5.41421C6.70695 5.03914 6.5 4.53043 6.5 4C6.5 3.46957 6.70695 2.96086 7.07533 2.58579C7.4437 2.21071 7.94332 2 8.46429 2C11.2143 2 12 6 12 6ZM12 6H15.5357C16.0567 6 16.5563 5.78929 16.9247 5.41421C17.293 5.03914 17.5 4.53043 17.5 4C17.5 3.46957 17.293 2.96086 16.9247 2.58579C16.5563 2.21071 16.0567 2 15.5357 2C12.7857 2 12 6 12 6ZM20 11V18.8C20 19.9201 20 20.4802 19.782 20.908C19.5903 21.2843 19.2843 21.5903 18.908 21.782C18.4802 22 17.9201 22 16.8 22L7.2 22C6.07989 22 5.51984 22 5.09202 21.782C4.71569 21.5903 4.40973 21.2843 4.21799 20.908C4 20.4802 4 19.9201 4 18.8V11M2 7.6L2 9.4C2 9.96005 2 10.2401 2.10899 10.454C2.20487 10.6422 2.35785 10.7951 2.54601 10.891C2.75992 11 3.03995 11 3.6 11L20.4 11C20.9601 11 21.2401 11 21.454 10.891C21.6422 10.7951 21.7951 10.6422 21.891 10.454C22 10.2401 22 9.96005 22 9.4V7.6C22 7.03995 22 6.75992 21.891 6.54601C21.7951 6.35785 21.6422 6.20487 21.454 6.10899C21.2401 6 20.9601 6 20.4 6L3.6 6C3.03995 6 2.75992 6 2.54601 6.10899C2.35785 6.20487 2.20487 6.35785 2.10899 6.54601C2 6.75992 2 7.03995 2 7.6Z" stroke="#039855" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <div>
                                <div className="text-sm font-medium">Tips and donations</div>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-1 items-center text-2xl font-raleway">
                            <div>
                                ₦
                            </div>
                            <div className=" font-semibold">10,000</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-between">
                    <div className="font-semibold text-lg">
                        Most recent transactions
                    </div>
                    <Link to="/payment-history" className="text-sm font-semibold text-[#4FFFEB]">
                        View transaction history
                    </Link>
                </div>
                <TransactionsTable />

            </div>
        </div>
    )
}

export default WalletPage