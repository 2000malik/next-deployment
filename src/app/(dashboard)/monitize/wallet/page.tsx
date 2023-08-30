"use client";

import { useState, useEffect } from "react";
import Button from "@/components/button";
import { useAppSelector, useAppDispatch } from "@/hooks";
import Link from "next/link";
import TransactionsTable from "../../components/transactions-table";
import { VirtualAccountModel } from "@/models/virtual-account";
import { getVirtualAccount } from "@/app/api/publishers";
import { formatToCurrency } from "@/utils";
import Modal from "@/components/modal";

const WalletPage = () => {
    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch();
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [showTransferModal, setShowTransferModal] = useState(false);

    const [virtualAccount, setVirtualAccount] = useState<VirtualAccountModel | null>(null);


    const handleGetVirtualAccount = async () => {
        try {
            const response = await getVirtualAccount();
            setVirtualAccount(response.data.data);
        } catch (error) {

        }
    }



    useEffect(() => { handleGetVirtualAccount() }, [])

    return (
        <div id="dashboard">
            <Modal size="md" open={showAccountModal} onClose={(val) => setShowAccountModal(val)}>
                <div className="border-b text-center text-2xl font-raleway font-bold py-5">
                    KYC
                </div>
                <div className="py-10 text-center">
                    <div className="px-8">
                        <div className="text-lg font-semibold text-left">
                            Personal Information
                        </div>
                        <div className="space-y-4">
                            <div className="flex-1 text-left">
                                <label htmlFor="name" className="text-sm">
                                    Account number
                                </label>
                                <input readOnly value={virtualAccount?.number} name="name" placeholder="Enter full name" className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500`} />
                            </div>

                            <div className="flex-1 text-left">
                                <label htmlFor="name" className="text-sm">
                                    Account name
                                </label>
                                <input readOnly value={virtualAccount?.name} name="name" placeholder="Enter full name" className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500`} />
                            </div>

                            <div className="flex-1 text-left">
                                <label htmlFor="name" className="text-sm">
                                    BVN number
                                </label>
                                <input readOnly value={""} name="name" placeholder="Enter full name" className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500`} />
                            </div>
                        </div>
                        <div className="space-y-4 mt-6">
                            <div className="text-lg font-semibold text-left">
                                Address Information
                            </div>
                            <div className="flex-1 text-left">
                                <label htmlFor="name" className="text-sm">
                                    Proof of address
                                </label>
                                <input readOnly value={virtualAccount?.number} name="name" placeholder="Enter full name" className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500`} />
                            </div>

                            <div className="flex-1 text-left">
                                <label htmlFor="name" className="text-sm">
                                    Address
                                </label>
                                <input readOnly value={virtualAccount?.name} name="name" placeholder="Enter full name" className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500`} />
                            </div>
                        </div>
                        <div className="space-y-4 mt-6">
                            <div className="text-lg font-semibold text-left">
                                Identification Documents
                            </div>
                            <div className="flex-1 text-left">
                                <label htmlFor="name" className="text-sm">
                                    Id type
                                </label>
                                <input readOnly value={virtualAccount?.number} name="name" placeholder="Enter full name" className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500`} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4 px-8">
                        <div className="text-right space-x-4">
                            <Button className="from-white !to-white !text-[#063150] font-semibold !py-[0.63rem] text-center">
                                Cancel
                            </Button>
                            <Button className="!text-sm !py-[0.63rem] text-center">
                                Edit details
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal size="md" open={showTransferModal} onClose={(val) => setShowTransferModal(val)}>
                <div className="border-b text-center text-2xl font-raleway font-bold py-5">
                    Send money
                </div>
                <div className="py-10 text-center">
                    <div className="px-8">

                        <div className="space-y-4">
                            <div className="flex-1 text-left">
                                <label htmlFor="name" className="text-sm">
                                    Enter amount
                                </label>
                                <input readOnly name="name" placeholder="Enter amount" className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500`} />
                            </div>

                            <div className="flex-1 text-left">
                                <div className="mb-2 text-slate-600">
                                    <label htmlFor="name" className="text-sm">
                                        Destination account details
                                    </label>
                                </div>
                                <label htmlFor="name" className="text-sm">
                                    Account number
                                </label>
                                <input readOnly name="name" placeholder="Enter account number" className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500`} />
                            </div>

                            <div className="flex-1 text-left">
                                <label htmlFor="name" className="text-sm">
                                    Bank name
                                </label>
                                <input readOnly value={""} name="name" placeholder="Enter bank name" className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500`} />
                            </div>
                            <div className="flex-1 text-left">
                                <label htmlFor="name" className="text-sm">
                                    Account name
                                </label>
                                <input readOnly value={""} name="name" placeholder="Enter account name" className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500`} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4 px-8">
                        <div className="text-right space-x-4">
                            <Button className="!text-sm !py-[0.63rem] text-center">
                                Proceed to send money
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="relative">
                <div className="flex gap-3 items-center">
                    <div className="text-sm font-medium">
                        {user?.first_name} podcast
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
                            <Button onClick={() => setShowAccountModal(true)} className="!from-transparent !to-transparent text-sm font-semibold border bg-gradient-to-r bg-clip-text">
                                View account details
                            </Button>
                        </div>
                        <div>
                            <Button onClick={() => setShowTransferModal(true)} className="!from-white !to-white !text-[#063150] text-sm font-semibold">
                                Add money
                            </Button>
                        </div>
                        <div>
                            <Button onClick={() => setShowTransferModal(true)} className="font-semibold text-sm">
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
                            {
                                virtualAccount ? formatToCurrency(virtualAccount.available_balance) : "0.00"
                            }

                        </div>
                        <div className="self-end">
                            {/* <span className="text-sm font-medium bg-green-100 py-1 px-3 rounded-full inline-flex items-center gap-1 font-inter text-green-600">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>7.2%</span>
                            </span> */}
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
                                    <div className="text-lg font-medium">
                                        {
                                            virtualAccount ? virtualAccount?.number : "------------"
                                        }
                                    </div>
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
                            <div className=" font-semibold">
                                {
                                    virtualAccount ? formatToCurrency(virtualAccount.available_balance) : "0.00"
                                }
                            </div>

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
                            <div className=" font-semibold">
                                {0}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-between">
                    <div className="font-semibold text-lg">
                        Most recent transactions
                    </div>
                    <Link href="/payment-history" className="text-sm font-semibold text-[#4FFFEB]">
                        View transaction history
                    </Link>
                </div>
                <TransactionsTable />

            </div>
        </div>
    )
}

export default WalletPage