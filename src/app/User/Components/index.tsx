
import { useEffect, useState } from "react";
import { APICall, formatToCurrency, getIcon, getImage } from "../../../Utils";
import OtpInput from 'react-otp-input';
import { Modal } from "../../../Components/Modal";
import { calculateFX, convertFunds, createBeneficiary, creditWallet, getAllBanks, getAllWallets, getNameEnquiry, getPurposeCode, getUser, getVirtualAccount, getVirtualAccountBalance, makeInternationTransfer, makeLocalTransfer, makeTransfer, updateBeneficiary, withdrawWallet } from "../../../Api/General";
import { BankModel, VirtualAccountModel, WalletModel } from "../../../models/general";
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from "../../../Hooks";
import { updateVirtualAccountAsync } from "../../../Redux/VirtualWallet";
import { updateWalletsAsync } from "../../../Redux/Wallets";
import { updateBeneficiariesAsync } from "../../../Redux/Beneficiary";
import { loadingBarRef } from "../../../App";
import { BeneficiariesModel } from "../../../models/beneficiaries";
import { createPin, getProfile } from "../../../Api/Auth";
import { updateUser } from "../../../redux/auth";
import { Listbox, Transition } from '@headlessui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Select from 'react-select';
import React from "react";
import countries from "country-list";

const countryData = countries.getData();

export const FundNairaWalletModal: React.FC<{ open: boolean, onClose: () => void }> = ({ open, onClose }) => {
    const [step, setStep] = useState(1);
    const [virtualAccount, setVirtualAccount] = useState<VirtualAccountModel | null>(null);
    const [virtualAccountBalance, setVirtualBalance] = useState();

    const handleFetchVirtualAccount = async () => {
        try {
            const response = await getVirtualAccount();
            setVirtualAccount(response.data.data);
        } catch (error) {

        }
    }

    const handleFetchVirtualAccountBalance = async () => {
        try {
            const response = await getVirtualAccountBalance();
            setVirtualAccount(response.data.data);
        } catch (error) {

        }
    }


    useEffect(() => {
        handleFetchVirtualAccount();

    }, [])

    return (
        <Modal open={open} onClose={onClose} size="sm">
            <div className="p-4 text-left md:h-[90vh] flex flex-col justify-between overflow-auto">
                <div>

                    {
                        (() => {
                            switch (step) {
                                case 1:
                                    return <div className="">
                                        <div>
                                            <span className="text-lg font-semibold text-black">
                                                Fund your naira wallet
                                            </span>
                                        </div>
                                        <div className="text-sm">
                                            <span>Choose an option below.</span>
                                        </div>
                                        <div className="mt-8 space-y-5">
                                            <div onClick={() => setStep(2)} className="border cursor-pointer border-[#C8C8C8] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.08)] rounded-lg py-4 px-5 from-[#F2F5FF] to-[#FDE0FA] bg-gradient-to-r">
                                                <div className="font-semibold text-sm">
                                                    Transfer to your PayWithFish Naira account number
                                                </div>
                                                <div className="mt-2 text-[13px]  leading-[20px] text-[#ED2DF0]">
                                                    Instant deposit
                                                </div>
                                                <div className="mt-4">
                                                    <div className="flex items-center gap-2 text-sm text-[#ED2DF0] font-bold">
                                                        <svg className="cursor-pointer" width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.5114 2.22849H0.401785C0.179899 2.22849 0 2.39929 0 2.60994V4.39003C0 4.60068 0.179899 4.77148 0.401785 4.77148H10.5114V6.23557C10.5114 6.91524 11.3769 7.25562 11.8832 6.77503L14.7646 4.03945C15.0785 3.7415 15.0785 3.25846 14.7646 2.96055L11.8832 0.224972C11.377 -0.25562 10.5114 0.0847589 10.5114 0.764435V2.22849Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border border-[#C8C8C8] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.08)] rounded-lg py-4 px-5 from-[#F2F5FF] to-[#FDE0FA] bg-gradient-to-r">
                                                <div className="font-semibold text-sm">
                                                    Top up your naira wallet with your Debit/ATM card.
                                                </div>
                                                <div className="mt-2 text-[13px]  leading-[20px] text-[#ED2DF0]">
                                                    Instant deposit
                                                </div>
                                                <div className="mt-4">
                                                    <div className="flex items-center gap-2 text-sm text-[#ED2DF0] font-bold">
                                                        <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.5114 2.22849H0.401785C0.179899 2.22849 0 2.39929 0 2.60994V4.39003C0 4.60068 0.179899 4.77148 0.401785 4.77148H10.5114V6.23557C10.5114 6.91524 11.3769 7.25562 11.8832 6.77503L14.7646 4.03945C15.0785 3.7415 15.0785 3.25846 14.7646 2.96055L11.8832 0.224972C11.377 -0.25562 10.5114 0.0847589 10.5114 0.764435V2.22849Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                case 2:
                                    return <div className="">
                                        <div className="pr-8">
                                            <div>
                                                <span className="text-lg font-semibold text-black">
                                                    Fund your naira wallet
                                                </span>
                                            </div>
                                            <div className="text-sm font-medium">
                                                <span>Money transferred to this bank account will automatically top up your Naira wallet. Start receiving money from all Nigerian banks or from another PayWithFish user.</span>
                                            </div>
                                        </div>
                                        <div className="mt-8 space-y-5 bg-[#F7F7F7] p-3 rounded-lg">
                                            <div className="text-sm">
                                                <div className="text-neutral">
                                                    Bank
                                                </div>
                                                <div className="font-bold text-black mt-2 uppercase">
                                                    {virtualAccount?.bank}
                                                </div>
                                            </div>
                                            <div className="text-sm">
                                                <div className="text-neutral">
                                                    Account Number
                                                </div>
                                                <div className="font-bold text-black mt-2 uppercase">
                                                    {virtualAccount?.number}
                                                </div>
                                            </div>
                                            <div className="text-sm">
                                                <div className="text-neutral">
                                                    Account Name
                                                </div>
                                                <div className="font-bold text-black mt-2 uppercase">
                                                    {virtualAccount?.name}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 top-2/4 p-4">
                                            <div className="flex gap-3">
                                                <CopyToClipboard text={`
                                                Bank: ${virtualAccount?.bank}
                                                Account Number: ${virtualAccount?.number}
                                                Account Name: ${virtualAccount?.name}
                                                `}
                                                    onCopy={() => toast("Account details copied!")}
                                                >
                                                    <button className="text-sm border-2 bg-[#282828] border-[#282828] rounded-xl text-white py-3 px-12">
                                                        Copy
                                                    </button>
                                                </CopyToClipboard>
                                                <button
                                                    onClick={(e) => { setStep(1); onClose() }}
                                                    className="text-sm border border-[#282828] rounded-xl text-[#282828] py-3 px-12">
                                                    Exit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            }
                        })()
                    }
                </div>

            </div>
        </Modal>
    )
}

export const TransferFundsModal: React.FC<{
    open: boolean,
    onInternationalTransfer: () => void,
    onLocalTransfer: () => void
    onClose: () => void
}> = ({ open, onClose, onInternationalTransfer, onLocalTransfer }) => {

    return (
        <Modal open={open} onClose={onClose} size="sm">
            <div className="p-4 text-left md:h-[90vh] flex flex-col justify-between overflow-auto">
                <div>
                    <div className="">
                        <div>
                            <span className="text-lg font-semibold text-black">
                                Transfer funds
                            </span>
                        </div>
                        <div className="text-sm">
                            <span>Choose an option below.</span>
                        </div>
                        <div className="mt-8 space-y-5">
                            <div className="border border-[#C8C8C8] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.08)] rounded-lg py-4 px-5 from-[#F2F5FF] to-[#FDE0FA] bg-gradient-to-r">
                                <div className="font-semibold text-sm">
                                    Transfer to a beneficiary
                                </div>
                                <div
                                    onClick={() => {
                                        onInternationalTransfer();
                                        onClose()
                                    }} className="mt-2 text-[13px] cursor-pointer leading-[20px] text-[#ED2DF0]">
                                    proceed
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center gap-2 text-sm text-[#ED2DF0] font-bold">
                                        <svg className="cursor-pointer" onClick={() => {
                                            onInternationalTransfer();
                                            onClose()
                                        }} width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5114 2.22849H0.401785C0.179899 2.22849 0 2.39929 0 2.60994V4.39003C0 4.60068 0.179899 4.77148 0.401785 4.77148H10.5114V6.23557C10.5114 6.91524 11.3769 7.25562 11.8832 6.77503L14.7646 4.03945C15.0785 3.7415 15.0785 3.25846 14.7646 2.96055L11.8832 0.224972C11.377 -0.25562 10.5114 0.0847589 10.5114 0.764435V2.22849Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#C8C8C8] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.08)] rounded-lg py-4 px-5 from-[#F2F5FF] to-[#FDE0FA] bg-gradient-to-r">
                                <div className="font-semibold text-sm">
                                    Transfer to a PayWithFish User

                                </div>
                                <div
                                    onClick={() => {
                                        onLocalTransfer();
                                        onClose()
                                    }}
                                    className="mt-2 cursor-pointer  text-[13px]  leading-[20px] text-[#ED2DF0]">
                                    proceed
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center gap-2 text-sm text-[#ED2DF0] font-bold">
                                        <svg
                                            onClick={() => {
                                                onLocalTransfer();
                                                onClose()
                                            }} width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5114 2.22849H0.401785C0.179899 2.22849 0 2.39929 0 2.60994V4.39003C0 4.60068 0.179899 4.77148 0.401785 4.77148H10.5114V6.23557C10.5114 6.91524 11.3769 7.25562 11.8832 6.77503L14.7646 4.03945C15.0785 3.7415 15.0785 3.25846 14.7646 2.96055L11.8832 0.224972C11.377 -0.25562 10.5114 0.0847589 10.5114 0.764435V2.22849Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export const PayTuitionFeeModal: React.FC<{ open: boolean, onClose: () => void }> = ({ open, onClose }) => {

    const [step, setStep] = useState(1);
    const [showIntTransferModal, setShowIntTransferModal] = useState(false);

    return (<>

        <InternationalTransferModal walletId={1} open={showIntTransferModal} onClose={() => setShowIntTransferModal(false)} />
        <Modal open={open} onClose={() => {
            onClose();
            setStep(1)
        }} size="sm">
            <div className="py-4 px-6 text-left md:h-[90vh] overflow-auto">
                <div>
                    <div>
                        <span className="text-lg font-semibold text-black">
                            Pay your tuition fee
                        </span>
                    </div>
                    <div className="text-sm">
                        <span>
                            Please indicate your first name, last name, application/student number in the form to enable fast tracking your payment.
                        </span>
                    </div>
                </div>
                <div>
                    {
                        (() => {
                            switch (step) {
                                case 1:
                                    return <div className="">
                                        <div className="mt-8 space-y-5">
                                            <div className="border border-[#C8C8C8] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.08)] rounded-lg py-4 px-5 from-[#F2F5FF] to-[#FDE0FA] bg-gradient-to-r">
                                                <div className="font-semibold text-sm">
                                                    Select from a list of all our partnered schools and institutions.
                                                </div>
                                                <div className="mt-2 text-[13px]  leading-[20px] text-[#ED2DF0]">
                                                    Platform fee: 5% of total fee, capped at €20
                                                </div>
                                                <div className="mt-4">
                                                    <div className="flex items-center gap-2 text-sm text-[#ED2DF0] font-bold">
                                                        <svg className="cursor-pointer" onClick={() => setStep(2)} width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.5114 2.22849H0.401785C0.179899 2.22849 0 2.39929 0 2.60994V4.39003C0 4.60068 0.179899 4.77148 0.401785 4.77148H10.5114V6.23557C10.5114 6.91524 11.3769 7.25562 11.8832 6.77503L14.7646 4.03945C15.0785 3.7415 15.0785 3.25846 14.7646 2.96055L11.8832 0.224972C11.377 -0.25562 10.5114 0.0847589 10.5114 0.764435V2.22849Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border border-[#C8C8C8] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.08)] rounded-lg py-4 px-5 from-[#F2F5FF] to-[#FDE0FA] bg-gradient-to-r">
                                                <div className="font-semibold text-sm">
                                                    Top up your naira wallet with your Debit/ATM card.
                                                </div>
                                                <div className="mt-2 text-[13px]  leading-[20px] text-[#ED2DF0]">
                                                    Platform fee: 5% of total fee, capped at €20
                                                </div>
                                                <div className="mt-4">
                                                    <div className="flex items-center gap-2 text-sm text-[#ED2DF0] font-bold">
                                                        <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.5114 2.22849H0.401785C0.179899 2.22849 0 2.39929 0 2.60994V4.39003C0 4.60068 0.179899 4.77148 0.401785 4.77148H10.5114V6.23557C10.5114 6.91524 11.3769 7.25562 11.8832 6.77503L14.7646 4.03945C15.0785 3.7415 15.0785 3.25846 14.7646 2.96055L11.8832 0.224972C11.377 -0.25562 10.5114 0.0847589 10.5114 0.764435V2.22849Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border border-[#C8C8C8] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.08)] rounded-lg py-4 px-5 from-[#F2F5FF] to-[#FDE0FA] bg-gradient-to-r">
                                                <div className="font-semibold text-sm">
                                                    Pay to a saved beneficiary
                                                </div>
                                                <div className="mt-2 text-[13px]  leading-[20px] text-[#ED2DF0]">
                                                    Platform fee: 5% of total fee, capped at €20
                                                </div>
                                                <div className="mt-4">
                                                    <div className="flex items-center gap-2 text-sm text-[#ED2DF0] font-bold">
                                                        <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.5114 2.22849H0.401785C0.179899 2.22849 0 2.39929 0 2.60994V4.39003C0 4.60068 0.179899 4.77148 0.401785 4.77148H10.5114V6.23557C10.5114 6.91524 11.3769 7.25562 11.8832 6.77503L14.7646 4.03945C15.0785 3.7415 15.0785 3.25846 14.7646 2.96055L11.8832 0.224972C11.377 -0.25562 10.5114 0.0847589 10.5114 0.764435V2.22849Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                case 2:
                                    return <div className="mt-8">
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Which currency are you paying with?
                                                </div>
                                                <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Your institution
                                                </div>
                                                <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Tuition amount
                                                </div>
                                                <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Amount we will deduct
                                                </div>
                                                <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                            </div>
                                        </div>
                                        <div className="mt-12">
                                            <button className="text-sm  bg-primary rounded-xl text-white py-4 w-full">
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                            }
                        })()
                    }
                </div>

            </div>
        </Modal>
    </>
    )
}

export const PayStudentVisaModal: React.FC<{ open: boolean, onClose: () => void }> = ({ open, onClose }) => {

    const [step, setStep] = useState(1);

    return (
        <Modal open={open} onClose={onClose} size="sm">
            <div className="p-4 text-left md:h-[90vh] flex flex-col justify-between overflow-auto">
                <div>
                    <div>
                        <div>
                            <span className="text-lg font-semibold text-black">
                                Pay Euro student visa fee
                            </span>
                        </div>
                        <div className="text-sm">
                            <span>
                                Please indicate your first name, last name, application/student number in the form to enable fast tracking your payment.
                            </span>
                        </div>
                    </div>
                    <div>
                        {
                            (() => {
                                switch (step) {
                                    case 1:
                                        return <div className="">
                                            <div className="mt-8 space-y-5">
                                                <div className="border border-[#C8C8C8] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.08)] rounded-lg py-4 px-5 from-[#F2F5FF] to-[#FDE0FA] bg-gradient-to-r">
                                                    <div className="font-semibold text-sm">
                                                        Visa fee in Naira: 300,000
                                                    </div>
                                                    <div className="mt-2 text-[13px]  leading-[20px] text-[#ED2DF0]">
                                                        Platform fee 5%
                                                    </div>
                                                    <div className="mt-4">
                                                        <div className="flex items-center gap-2 text-sm text-[#ED2DF0] font-bold">
                                                            <svg className="cursor-pointer" onClick={() => setStep(2)} width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5114 2.22849H0.401785C0.179899 2.22849 0 2.39929 0 2.60994V4.39003C0 4.60068 0.179899 4.77148 0.401785 4.77148H10.5114V6.23557C10.5114 6.91524 11.3769 7.25562 11.8832 6.77503L14.7646 4.03945C15.0785 3.7415 15.0785 3.25846 14.7646 2.96055L11.8832 0.224972C11.377 -0.25562 10.5114 0.0847589 10.5114 0.764435V2.22849Z" fill="currentColor" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                }
                            })()
                        }
                    </div>
                </div>
                <div className="mt-12 top-2/4 p-4">
                    <div className="flex gap-3">
                        <button className="text-sm bg-primary rounded-xl text-white py-3 w-full">
                            Pay
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export const PayRentModal: React.FC<{ open: boolean, onClose: () => void }> = ({ open, onClose }) => {

    const [step, setStep] = useState(1);

    return (
        <Modal open={open} onClose={onClose} size="sm">
            <div className="p-4 text-left md:h-[90vh] flex flex-col justify-between overflow-auto">
                <div>
                    <div>
                        <div>
                            <span className="text-lg font-semibold text-black">
                                Pay rent and accomodation fee
                            </span>
                        </div>
                        <div className="text-sm">
                            <span>
                                Fill the payment form appropriately
                            </span>
                        </div>
                    </div>
                    <div>
                        {
                            (() => {
                                switch (step) {
                                    case 1:
                                        return <div className="">
                                            <div className="mt-8 space-y-5">
                                                <div className="space-y-4">
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">
                                                            Which currency are you paying with
                                                        </div>
                                                        <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">
                                                            Property location
                                                        </div>
                                                        <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">
                                                            Property full address
                                                        </div>
                                                        <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">
                                                            Rent amount
                                                        </div>
                                                        <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">
                                                            Amount we will deduct
                                                        </div>
                                                        <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">
                                                            Recipient IBAN
                                                        </div>
                                                        <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">
                                                            Account name
                                                        </div>
                                                        <input type="text" className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                }
                            })()
                        }
                    </div>
                </div>
                <div className="mt-12 top-2/4 p-4">
                    <div className="flex gap-3">
                        <button className="text-sm bg-primary rounded-xl text-white py-3 w-full">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export const TransferNairaFundsModal: React.FC<{ open: boolean, onClose: () => void }> = ({ open, onClose }) => {
    const dispatch = useAppDispatch();

    const [showPinModal, setShowPinModal] = useState(false);
    const banks = useAppSelector(state => state.banks.banks);
    const [loading, setLoading] = useState(false);
    const virtualAccountBalance = useAppSelector(state => state.virtualWallet.account);

    const [enquiryData, setEnquiryData] = useState<any>();
    const validationSchema = Yup.object().shape({
        account_number: Yup.string().length(10, "Account number must be 10 digits").required("Account number is required"),
        amount: Yup.string().required("Amount is required"),
        // bank_code: Yup.string().required("Bank is required")
    });

    const user = useAppSelector(state => state.auth.user);
    const [pin, setPin] = useState("");
    const [pinConfirmation, setPinConfirmation] = useState("");


    const [transferData, setTransferData] = useState({
        account_number: "",
        bank_code: "",
        beneficiary_name: "",
        amount: "",
        session_id: "",
        narration: ""

    })

    const handleFetchVirtualAccountBalance = async () => {
        try {
            dispatch(updateVirtualAccountAsync())
        } catch (error) {

        }
    }

    const handleProfile = async () => {
        try {
            const response = await getProfile();
            dispatch(updateUser({ user: response.data.data }));
        } catch (error) {

        }
    }


    const handleSetPin = async (pin: string, pinConfirmation: string) => {
        try {
            const response = await createPin(pin, pinConfirmation)
            toast(response.data.message, { type: "success" });
        } catch (error: any) {
            if (error.response) {
                toast(error.response.data.message, { type: "error" })
            }

        }
    }

    const handleCompleteTransfer = async (pin: string, pinConfirmation: string) => {
        try {

            setLoading(true);
            if (loading) return;

            if (!user?.has_pin) {
                await handleSetPin(pin, pinConfirmation);
                handleProfile();
            }

            const data = { ...transferData, amount: Number(transferData.amount) * 100, beneficiary_name: enquiryData.name, session_id: enquiryData.session_id, pin };
            await APICall(makeTransfer, data, true);
            setPin("");
            setPinConfirmation("");
            dispatch(updateVirtualAccountAsync());
            setLoading(false);
            onClose();
            setTransferData({
                account_number: "",
                bank_code: "",
                beneficiary_name: "",
                amount: "",
                session_id: "",
                narration: ""
            })
        } catch (error: any) {
            setPin("");
            setPinConfirmation("");

            if (error.response) {
                dispatch(updateVirtualAccountAsync());
                toast(error.response.data.message, { type: "error" });
            }
            setLoading(false);
        }
    }


    const handleMakeTransfer = async (values: any, setSubmitting: (val: boolean) => void) => {
        try {
            if (!pin) {
                setShowPinModal(true);
                setSubmitting(false);
                return;
            }
            setSubmitting(false);
            setLoading(false);
        } catch (error: any) {
            setPin("");
            setPinConfirmation("");
            setSubmitting(false);
            setLoading(false);
        }
    }



    const handleGetNameEnquiry = async () => {
        try {
            setLoading(true);
            const response = await getNameEnquiry(transferData.account_number, transferData.bank_code);
            setEnquiryData(response.data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (transferData.account_number.length == 10 && transferData.bank_code) {
            handleGetNameEnquiry();
        }
    }, [transferData]);



    return (
        <>

            <PinModal open={showPinModal} onClose={(pin, pinConfirmation) => {
                setPin(pin as string);
                setPinConfirmation(pinConfirmation as string);
                if (pin) {
                    handleCompleteTransfer(pin, pinConfirmation as string);
                }
                setShowPinModal(false)

            }} />
            <Modal open={showPinModal ? false : open} onClose={onClose} size="sm">
                <Formik
                    initialValues={{
                        amount: '',
                        account_number: '',
                        // bank_code: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        handleMakeTransfer(values, setSubmitting)
                    }}
                >
                    {({ isSubmitting, values, handleChange, handleBlur, setFieldValue }) => (
                        <Form>
                            <div className="py-4 px-6 text-left md:h-[90vh] flex flex-col justify-between overflow-auto">

                                <div className="">
                                    <div className="flex justify-between">
                                        <span className="text-lg font-bold text-black">
                                            Transfer to a Nigerian bank account
                                        </span>
                                        <button onClick={onClose} className="outline-none">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-12">
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Naira Balance
                                                </div>
                                                <input type="text" value={"₦" + (virtualAccountBalance ? formatToCurrency(virtualAccountBalance.available / 100) : "0.00")} disabled={true} className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Amount to transfer?
                                                </div>
                                                <input
                                                    type="text"
                                                    value={formatToCurrency(values.amount)}
                                                    name="amount"
                                                    onChange={(e) => {
                                                        const val = e.target.value.replaceAll(",", "");
                                                        e.target.value = val;
                                                        if (!isNaN(Number(val)) && !(Number(val) > (virtualAccountBalance ? virtualAccountBalance?.available / 100 : 0))) {
                                                            setTransferData({ ...transferData, amount: val });
                                                            handleChange(e)
                                                        }
                                                    }}
                                                    onBlur={handleBlur}
                                                    className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                <ErrorMessage name="amount" component={"div"} className="text-red-600 text-sm text-left" />

                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Recipient bank
                                                </div>
                                                <Select
                                                    className="basic-single "
                                                    classNamePrefix="select"
                                                    onChange={(v) => {
                                                        if (v)
                                                            setTransferData({ ...transferData, bank_code: v.value })
                                                    }}
                                                    // isLoading={isLoading}
                                                    styles={{
                                                        control: (styles) => ({
                                                            ...styles, border: "1px solid #4888dc",
                                                            backgroundColor: "#F5F5F5",
                                                            borderRadius: "0.5rem",
                                                            padding: "0.5rem 1rem",
                                                            color: "#5A5A5A",
                                                            width: "100%"
                                                        })
                                                    }}
                                                    isClearable={true}
                                                    isSearchable={true}

                                                    name="bank_code"
                                                    options={banks.map(val => ({ value: val.code, label: val.name }))}
                                                />

                                                <ErrorMessage name="bank_code" component={"div"} className="text-red-600 text-sm text-left" />

                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Recipient account number
                                                </div>
                                                <input type="text"
                                                    value={transferData.account_number}
                                                    name="account_number"
                                                    onBlur={handleBlur}

                                                    onChange={(e) => {
                                                        if (!isNaN(Number(e.target.value)) && !(e.target.value.length > 10)) {
                                                            setTransferData({ ...transferData, account_number: e.target.value });
                                                            handleChange(e)
                                                        }
                                                    }}
                                                    className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                <ErrorMessage name="account_number" component={"div"} className="text-red-600 text-sm text-left" />

                                                <div className="text-sm font-semibold mb-2">
                                                    {enquiryData?.name}
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="mt-12 top-2/4">
                                    <div className="flex gap-3">
                                        <button
                                            // onClick={() => setShowPinModal(true)}
                                            disabled={loading}
                                            type="submit"
                                            className="text-sm border-2 bg-primary border-primary rounded-xl text-white py-3 px-12">
                                            {
                                                loading ? <svg className="w-5 h-5" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                                                    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                                        <animateTransform
                                                            attributeName="transform"
                                                            attributeType="XML"
                                                            type="rotate"
                                                            dur="1s"
                                                            from="0 50 50"
                                                            to="360 50 50"
                                                            repeatCount="indefinite" />
                                                    </path>
                                                </svg> : "Transfer"
                                            }
                                        </button>
                                        <button onClick={() => onClose()} className="text-sm border border-[#282828] rounded-xl text-[#282828] py-3 px-12">
                                            Exit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export const InternationalTransferModal: React.FC<{
    open: boolean,
    onClose: () => void,
    walletId: number,

}> = ({ open, onClose, walletId }) => {
    const dispatch = useAppDispatch();
    const [showCreateBeneficiary, setShowCreateBeneficiary] = useState(false);

    const [showPinModal, setShowPinModal] = useState(false);
    const beneficairies = useAppSelector(state => state.beneficiaries.beneficairies);
    const purposes = useAppSelector(state => state.purposes.purposes);
    const [loading, setLoading] = useState(false);

    const user = useAppSelector(state => state.auth.user);
    const [pin, setPin] = useState("");
    const [pinConfirmation, setPinConfirmation] = useState("");


    const validationSchema = Yup.object().shape({
        beneficiary_id: Yup.string().required("Beneficiary is required"),
        amount: Yup.string().required("Amount is required"),
        purpose_id: Yup.string().required("Purpose is required"),
    });

    const handleProfile = async () => {
        try {
            const response = await getProfile();
            dispatch(updateUser({ user: response.data.data }));
        } catch (error) {

        }
    }


    const handleSetPin = async (pin: string, pinConfirmation: string) => {
        try {
            const response = await createPin(pin, pinConfirmation)
            toast(response.data.message, { type: "success" });
        } catch (error: any) {
            if (error.response) {
                toast(error.response.data.message, { type: "error" })
            }

        }
    }


    const [transferData, setTransferData] = useState({
        beneficiary_id: "",
        amount: "",
        purpose_id: "",
        wallet_id: walletId
    })

    const handleCompleteTransfer = async (pin: string, pinConfirmation: string) => {
        try {

            setLoading(true);
            if (loading) return;

            if (!user?.has_pin) {
                await handleSetPin(pin, pinConfirmation);
                handleProfile();
            }


            const data = { ...transferData, amount: Number(transferData.amount) * 100, pin };
            await APICall(makeInternationTransfer, data, true);

            setPin("");
            setPinConfirmation("");

            setLoading(false);
            onClose();
            setTransferData({
                beneficiary_id: "",
                amount: "",
                purpose_id: "",
                wallet_id: walletId
            })
        } catch (error: any) {
            setPin("");
            setPinConfirmation("");
            if (error.response) {
                dispatch(updateVirtualAccountAsync());
                toast(error.response.data.message, { type: "error" });
            }
            setLoading(false);
        }
    }


    const handleMakeTransfer = async (values: any, setSubmitting: (val: boolean) => void) => {
        try {
            if (!pin) {
                setShowPinModal(true);
                setSubmitting(false);
                return;
            }

            setLoading(false)
            setSubmitting(false);


            if (!user?.has_pin) {
                await handleSetPin(pin, pinConfirmation);
                handleProfile();
            }

        } catch (error: any) {

            setLoading(false);
        }
    }


    return (
        <>
            <PinModal open={showPinModal} onClose={(pin, pinConfirmation) => {
                setPin(pin as string);
                setPinConfirmation(pinConfirmation as string);
                if (pin) {
                    handleCompleteTransfer(pin, pinConfirmation as string);
                }
                setShowPinModal(false)

            }} />

            {showCreateBeneficiary ? <>
                <CreateBeneficiaryModal open={showCreateBeneficiary} onClose={() => { setShowCreateBeneficiary(false) }} />
            </> :
                <Modal open={showPinModal ? false : open} onClose={onClose} size="sm">
                    <Formik
                        initialValues={{
                            beneficiary_id: "",
                            amount: "",
                            purpose_id: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            handleMakeTransfer(values, setSubmitting)
                        }}
                    >
                        {({ isSubmitting, values, handleChange, handleBlur, setFieldValue }) => (
                            <Form>
                                <div className="py-4 px-6 text-left md:h-[90vh] flex flex-col justify-between overflow-auto">

                                    <div className="">
                                        <div className="flex justify-between">
                                            <span className="text-lg font-bold text-black">
                                                Transfer to an International bank
                                            </span>
                                            <button onClick={onClose} className="outline-none">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="mt-12">
                                            <div className="space-y-4">
                                                <div>
                                                    <div className="text-sm font-medium mb-2">
                                                        Beneficiary
                                                    </div>
                                                    <select
                                                        value={values.beneficiary_id}
                                                        name="beneficiary_id"
                                                        onChange={(e) => {
                                                            setTransferData({ ...transferData, beneficiary_id: e.target.value })
                                                            handleChange(e)
                                                        }}
                                                        onBlur={handleBlur}
                                                        className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full">
                                                        <option value=""></option>
                                                        {
                                                            beneficairies.map((beneficiary) => {
                                                                return <option value={beneficiary.id}>{beneficiary.entity_type == "individual" ? beneficiary.first_name + " " + beneficiary.last_name : beneficiary.company_name}</option>
                                                            })
                                                        }
                                                    </select>
                                                    <div className="text-right flex justify-end">
                                                        <button
                                                            onClick={() => setShowCreateBeneficiary(true)}
                                                            className="inline-flex gap-1 items-center text-sm">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                                            </svg>
                                                            <span>Create Beneficiary</span>
                                                        </button>

                                                    </div>
                                                    <ErrorMessage name="beneficiary_id" component={"div"} className="text-red-600 text-sm text-left" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium mb-2">
                                                        Purpose
                                                    </div>
                                                    <select
                                                        value={values.purpose_id}
                                                        name="purpose_id"
                                                        onChange={(e) => {
                                                            setTransferData({ ...transferData, purpose_id: e.target.value })
                                                            handleChange(e)
                                                        }}
                                                        onBlur={handleBlur}
                                                        className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full">
                                                        <option value=""></option>
                                                        {
                                                            purposes.map((purpose) => {
                                                                return <option value={purpose.id}>{purpose.title}</option>
                                                            })
                                                        }
                                                    </select>
                                                    <ErrorMessage name="purpose_id" component={"div"} className="text-red-600 text-sm text-left" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium mb-2">
                                                        Amount to transfer?
                                                    </div>
                                                    <input
                                                        type="text"
                                                        value={formatToCurrency(values.amount)}
                                                        name="amount"
                                                        onChange={(e) => {
                                                            const val = e.target.value.replaceAll(",", "");
                                                            e.target.value = val;
                                                            if (!isNaN(Number(val))) {
                                                                setTransferData({ ...transferData, amount: val });
                                                                handleChange(e)
                                                            }
                                                        }}
                                                        onBlur={handleBlur}
                                                        className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                    <ErrorMessage name="amount" component={"div"} className="text-red-600 text-sm text-left" />
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="mt-12 top-2/4">
                                        <div className="flex gap-3">
                                            <button
                                                // onClick={() => setShowPinModal(true)}
                                                disabled={loading}
                                                type="submit"
                                                className="text-sm border-2 bg-primary border-primary rounded-xl text-white py-3 px-12">
                                                {
                                                    loading ? <svg className="w-5 h-5" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                                                        <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                                            <animateTransform
                                                                attributeName="transform"
                                                                attributeType="XML"
                                                                type="rotate"
                                                                dur="1s"
                                                                from="0 50 50"
                                                                to="360 50 50"
                                                                repeatCount="indefinite" />
                                                        </path>
                                                    </svg> : "Transfer"
                                                }
                                            </button>
                                            <button onClick={() => onClose()} className="text-sm border border-[#282828] rounded-xl text-[#282828] py-3 px-12">
                                                Exit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal>
            }
        </>
    )
}

export const LocalTransferModal: React.FC<{
    open: boolean,
    onClose: () => void,
    walletId: number,

}> = ({ open, onClose, walletId }) => {
    const dispatch = useAppDispatch();
    const [showPinModal, setShowPinModal] = useState(false);
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(false);

    const user = useAppSelector(state => state.auth.user);
    const [pin, setPin] = useState("");
    const [pinConfirmation, setPinConfirmation] = useState("");


    const validationSchema = Yup.object().shape({
        user_id: Yup.string().required("User ID is required"),
        amount: Yup.string().required("Amount is required"),
    });

    const [transferData, setTransferData] = useState({
        user_id: "",
        amount: "",
        wallet_id: walletId
    })

    const handleProfile = async () => {
        try {
            const response = await getProfile();
            dispatch(updateUser({ user: response.data.data }));
        } catch (error) {

        }
    }


    const handleSetPin = async (pin: string, pinConfirmation: string) => {
        try {
            const response = await createPin(pin, pinConfirmation)
            toast(response.data.message, { type: "success" });
        } catch (error: any) {
            if (error.response) {
                toast(error.response.data.message, { type: "error" })
            }

        }
    }

    const handleCompleteTransfer = async (pin: string, pinConfirmation: string) => {
        try {

            setLoading(true);
            if (loading) return;

            if (!user?.has_pin) {
                await handleSetPin(pin, pinConfirmation);
                handleProfile();
            }

            loadingBarRef.current?.continuousStart();

            const data = { ...transferData, amount: Number(transferData.amount) * 100, pin };
            const response = await makeLocalTransfer(walletId, data);
            toast(response.data.message, { type: "success" });

            loadingBarRef.current?.complete();

            setPin("");
            setPinConfirmation("");

            setLoading(false);
            onClose();
            setTransferData({
                user_id: "",
                amount: "",
                wallet_id: walletId
            })
        } catch (error: any) {
            setPin("");
            setPinConfirmation("");
            loadingBarRef.current?.complete();

            if (error.response) {
                dispatch(updateVirtualAccountAsync());
                toast(error.response.data.message, { type: "error" });
            }
            setLoading(false);
        }
    }



    const handleMakeTransfer = async (values: any, setSubmitting: (val: boolean) => void) => {
        try {
            if (!pin) {
                setShowPinModal(true);
                setSubmitting(false);

                return;
            }

            setLoading(false)
            setSubmitting(false);


        } catch (error: any) {

            setLoading(false);
        }
    }



    const verifyUsername = async () => {
        try {
            const response = await getUser(transferData.user_id);
            setUserName(response.data.data.first_name + " " + response.data.data.last_name);
        } catch (error: any) {
            if (error.response) {
                toast(error.response.data.message, { type: "error" });
            }
        }
    }

    useEffect(() => {
        if (transferData.user_id.length == 11) {
            verifyUsername();
        }
    }, [transferData])




    return (
        <>
            <PinModal open={showPinModal} onClose={(pin, pinConfirmation) => {
                setPin(pin as string);
                setPinConfirmation(pinConfirmation as string);
                if (pin) {
                    handleCompleteTransfer(pin, pinConfirmation as string)
                }
                setShowPinModal(false)

            }} />
            <Modal open={showPinModal ? false : open} onClose={onClose} size="sm">
                <Formik
                    initialValues={{
                        user_id: "",
                        amount: "",

                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        handleMakeTransfer(values, setSubmitting)
                    }}
                >
                    {({ isSubmitting, values, handleChange, handleBlur, setFieldValue }) => (
                        <Form>
                            <div className="py-4 px-6 text-left md:h-[90vh] flex flex-col justify-between overflow-auto">

                                <div className="">
                                    <div className="flex justify-between">
                                        <span className="text-lg font-bold text-black">
                                            Transfer to a PayWithFish user
                                        </span>
                                        <button onClick={onClose} className="outline-none">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-12">
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    User Phone number
                                                </div>
                                                <input
                                                    value={values.user_id}
                                                    name="user_id"
                                                    onChange={(e) => {
                                                        setTransferData({ ...transferData, user_id: e.target.value })
                                                        handleChange(e)
                                                    }}
                                                    onBlur={handleBlur}
                                                    className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />

                                                <ErrorMessage name="user_id" component={"div"} className="text-red-600 text-sm text-left" />
                                                <div>{userName}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Amount to transfer?
                                                </div>
                                                <input
                                                    type="text"
                                                    value={formatToCurrency(values.amount)}
                                                    name="amount"
                                                    onChange={(e) => {
                                                        const val = e.target.value.replaceAll(",", "");
                                                        e.target.value = val;
                                                        if (!isNaN(Number(val))) {
                                                            setTransferData({ ...transferData, amount: val });
                                                            handleChange(e)
                                                        }
                                                    }}
                                                    onBlur={handleBlur}
                                                    className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                <ErrorMessage name="amount" component={"div"} className="text-red-600 text-sm text-left" />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="mt-12 top-2/4">
                                    <div className="flex gap-3">
                                        <button
                                            // onClick={() => setShowPinModal(true)}
                                            disabled={loading}
                                            type="submit"
                                            className="text-sm border-2 bg-primary border-primary rounded-xl text-white py-3 px-12">
                                            {
                                                loading ? <svg className="w-5 h-5" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                                                    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                                        <animateTransform
                                                            attributeName="transform"
                                                            attributeType="XML"
                                                            type="rotate"
                                                            dur="1s"
                                                            from="0 50 50"
                                                            to="360 50 50"
                                                            repeatCount="indefinite" />
                                                    </path>
                                                </svg> : "Transfer"
                                            }
                                        </button>
                                        <button onClick={() => onClose()} className="text-sm border border-[#282828] rounded-xl text-[#282828] py-3 px-12">
                                            Exit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>

        </>
    )
}

export const PinModal: React.FC<{ open: boolean, onClose: (pin?: string, pin_confirmation?: string) => void }> = ({ open, onClose }) => {
    const user = useAppSelector(state => state.auth.user);
    const [pin, setPin] = useState("");
    const [pinConfirmation, setPinConfirmation] = useState("");


    return (
        <Modal open={open} onClose={() => {
            onClose("")
        }} size="xs">
            <div className="py-4 px-6 text-left  flex flex-col justify-between overflow-auto">

                <div className="">
                    <div className="flex justify-between">
                        <span className="text-lg font-bold text-black flex-1 text-center">
                            Transaction Pin
                        </span>
                        <button onClick={() => {
                            onClose("")
                            setPin("");
                            setPinConfirmation("")
                        }} className="outline-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    {!user?.has_pin && <div className="text-sm text-center">
                        <span> This your first transaction. <br /> Create your transaction pin</span>
                    </div>}
                    <div className="mt-6 px-4">
                        <div className="space-y-4">
                            <div>
                                {!user?.has_pin && <div className="text-sm font-medium mb-2">
                                    New pin
                                </div>}
                                <OtpInput
                                    value={pin}
                                    onChange={(v) => { setPin(v) }}
                                    numInputs={4}
                                    inputType="password"
                                    renderSeparator={" "}
                                    containerStyle={"justify-center"}
                                    inputStyle={"border border-slate-600 outline-none text-5xl mx-2 !w-14 h-12 rounded-lg bg-zinc-50 border-zinc-200 disabled:opacity-70"}
                                    renderInput={(props) => <input  {...props} autoFocus autoComplete="off" name="otp" />}
                                />
                                {!user?.has_pin && <> <div className="text-sm font-medium mb-2 mt-4">
                                    Confirm New pin
                                </div>
                                    <OtpInput
                                        value={pinConfirmation}
                                        onChange={(v) => { setPinConfirmation(v) }}
                                        numInputs={4}
                                        inputType="password"
                                        renderSeparator={" "}
                                        containerStyle={"justify-center"}
                                        inputStyle={"border border-slate-600 outline-none text-5xl mx-2 !w-14 h-12 rounded-lg bg-zinc-50 border-zinc-200 disabled:opacity-70"}
                                        renderInput={(props) => <input  {...props} autoComplete="off" name="otp" />}
                                    />
                                </>
                                }
                                {!user?.has_pin && pin.length == 4 && pin !== pinConfirmation && <div className="text-sm text-red-600 font-medium mb-2">
                                    Pin does not match
                                </div>}
                            </div>
                        </div>


                    </div>
                </div>
                <div className="mt-12 mb-4 top-2/4 px-4">
                    <div className="flex gap-3">

                        <button
                            disabled={(!user?.has_pin && pin.length == 4 && pin !== pinConfirmation) || pin.length !== 4}
                            onClick={() => {
                                onClose(pin, pinConfirmation)
                                setPin("");
                                setPinConfirmation("");
                            }}
                            className="text-sm  bg-primary rounded-xl text-white py-3 w-full disabled:opacity-60 disabled:cursor-not-allowed">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export const DeleteModal: React.FC<{ open: boolean, onClose: () => void, onConfirm: () => void, message: string }> = ({ open, onClose, message, onConfirm }) => {

    return (
        <Modal open={open} onClose={onClose} size="xs">
            <div className="py-4 px-6 text-left  flex flex-col justify-between overflow-auto">

                <div className="">
                    <div className="flex justify-end">
                        <button onClick={onClose} className="outline-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="py-6 text-center">
                        <svg className="inline w-36 h-36" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve">
                            <path fill="#CCCCCC" d="M255.832,32.021c123.697,0.096,223.907,100.45,223.811,224.147s-100.45,223.907-224.147,223.811  C131.863,479.883,31.685,379.633,31.685,256C31.869,132.311,132.143,32.117,255.832,32.021 M255.832,0  C114.443,0.096-0.096,114.779,0,256.168S114.779,512.096,256.168,512C397.485,511.904,512,397.317,512,256  C511.952,114.571,397.261-0.048,255.832,0z" />
                            <g>

                                <rect x="227.863" y="113.103" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0971 255.9227)" fill="#E21B1B" width="56.028" height="285.857" />

                                <rect x="112.943" y="227.962" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0594 255.9024)" fill="#E21B1B" width="285.857" height="56.028" />
                            </g>
                        </svg>

                    </div>
                    <div className="text-sm text-center">
                        <span>{message}</span>
                    </div>
                </div>
                <div className="mt-12 mb-4 top-2/4 px-4">
                    <div className="flex gap-3">

                        <button onClick={onConfirm} className="text-sm  bg-primary rounded-xl text-white py-3 w-full">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export const FundWalletModal: React.FC<{
    open: boolean,
    onClose: () => void,
    walletId: number,
    walletCurrency: string,
    walletName: string
}> = ({ open, onClose, walletId, walletName, walletCurrency }) => {
    const [showPinModal, setShowPinModal] = useState(false);
    const [step, setStep] = useState(1);
    const [rate, setRate] = useState("0.00");
    const [amount, setAmount] = useState("")
    const [selectedWallet, setSelectedWallet] = useState<WalletModel>(
        {
            id: 0,
            user_id: 18,
            vertofx_id: 2729,
            amount: 0,
            currency: "NGN",
            created_at: "2023-05-29T11:21:22.000000Z",
            updated_at: "2023-05-29T11:21:22.000000Z"
        }
    );
    const [loading, setLoading] = useState(false);

    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch();
    const [pin, setPin] = useState("");
    const [pinConfirmation, setPinConfirmation] = useState("");

    const wallets = useAppSelector(state => state.wallets.wallets)
    const virtualAccountBalance = useAppSelector(state => state.virtualWallet.account);


    const handleRateChange = async () => {
        try {
            const response = await calculateFX(selectedWallet.id ? wallets.find((wallet) => wallet.id == Number(selectedWallet.id))?.currency as string : "NGN", walletCurrency);
            setRate(response.data.data.rate);
        } catch (err) {

        }
    }

    const handleProfile = async () => {
        try {
            const response = await getProfile();
            dispatch(updateUser({ user: response.data.data }));
        } catch (error) {

        }
    }


    const handleSetPin = async (pin: string, pinConfirmation: string) => {
        try {
            const response = await createPin(pin, pinConfirmation)
            toast(response.data.message, { type: "success" });
        } catch (error: any) {
            if (error.response) {
                toast(error.response.data.message, { type: "error" })
            }

        }
    }

    const handleGetWallets = async () => {
        try {
            dispatch(updateWalletsAsync());
        } catch (err) {

        }
    }

    const handleConfirm = async (pin: string, pinConfirmation: string) => {
        try {
            setLoading(true);
            if (!user?.has_pin) {
                await handleSetPin(pin, pinConfirmation);
                handleProfile();
            }
            const response = selectedWallet?.id ? await convertFunds(Number(selectedWallet), walletId, Number(amount.replaceAll(",", "")) * 100, pin) : await creditWallet(walletId, Number(amount.replaceAll(",", "")) * 100, pin);
            setPin("");
            setPinConfirmation("");
            toast(response.data.message, { type: "success" });
            dispatch(updateVirtualAccountAsync());
            handleGetWallets();
            onClose();
            setLoading(false);
        } catch (error: any) {
            setLoading(false)
            setPin("");
            setPinConfirmation("");
            if (error.response) {
                toast(error.response.data.message, { type: "error" });
            }
        }
    }


    const handleFundWallet = async () => {
        try {
            if (!pin) {
                setShowPinModal(true);
                return;
            }

        } catch (error: any) {
            setLoading(false)
            setPin("");
            setPinConfirmation("");
        }
    }

    useEffect(() => {
        if (walletId)
            handleRateChange();
    }, [selectedWallet]);

    return (
        <>
            <PinModal open={showPinModal} onClose={(pin, pinConfirmation) => {
                setPin(pin as string);
                setPinConfirmation(pinConfirmation as string);
                if (pin) {
                    handleConfirm(pin, pinConfirmation as string)
                }
                setShowPinModal(false)

            }} />
            <Modal open={showPinModal ? false : open} onClose={onClose} size="sm">
                <div className="py-4 px-6 text-left md:h-[90vh] flex flex-col justify-between overflow-auto">

                    <div className="">
                        <div className="flex justify-between">
                            <span className="text-lg font-bold text-black">
                                Fund your {walletName} wallet
                            </span>
                            <button onClick={onClose} className="outline-none">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-12">
                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm font-medium mb-2">
                                        Wallet to fund from
                                    </div>
                                    <Listbox value={selectedWallet} onChange={setSelectedWallet}>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full">
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        {/* {<img className="w-6" src={getIcon(currencies.find(val => val.name == selectedWallet.currency)?.icon as string)} alt="" />} */}
                                                        <span className={`fi fi-${selectedWallet.currency.substring(0, 2).toLowerCase()} object-fill fis !w-5 !h-5 rounded-full border border-white`}></span>

                                                    </div>
                                                    {selectedWallet.currency == "NGN" ?
                                                        <div className="font-semibold text-sm">
                                                            {selectedWallet?.currency} Balance: {virtualAccountBalance ? formatToCurrency(virtualAccountBalance?.available / 100) : "0.00"}
                                                        </div> :
                                                        <div className="font-semibold text-sm">
                                                            {selectedWallet?.currency} Balance: {selectedWallet?.amount ? formatToCurrency(selectedWallet?.amount / 100) : "0.00"}
                                                        </div>}
                                                </div>
                                            </Listbox.Button>
                                            <Transition
                                                as={React.Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    <Listbox.Option
                                                        className={"flex items-center gap-2 py-2 cursor-pointer hover:bg-zinc-100 px-3"}
                                                        value={{
                                                            id: 0,
                                                            user_id: 18,
                                                            vertofx_id: 2729,
                                                            amount: 0,
                                                            currency: "NGN",
                                                            created_at: "2023-05-29T11:21:22.000000Z",
                                                            updated_at: "2023-05-29T11:21:22.000000Z"
                                                        }}
                                                    >
                                                        <div>
                                                            <span className={`fi fi-ng object-fill fis !w-5 !h-5 rounded-full border border-white`}></span>
                                                        </div>
                                                        <div className="font-semibold text-sm">
                                                            NGN Balance: {virtualAccountBalance ? formatToCurrency(virtualAccountBalance?.available / 100) : "0.00"}

                                                        </div>
                                                    </Listbox.Option>
                                                    {wallets.map((wallet, walletIdx) => (
                                                        <Listbox.Option
                                                            key={walletIdx + "wallet"}
                                                            className={"flex items-center gap-2 py-2 cursor-pointer hover:bg-zinc-100 px-3"}
                                                            value={wallet}
                                                        >
                                                            <div>
                                                                <span className={`fi fi-${wallet.currency.substring(0, 2).toLowerCase()} object-fill fis !w-5 !h-5 rounded-full border border-white`}></span>
                                                            </div>
                                                            <div className="font-semibold text-sm">
                                                                {wallet.currency} Balance: {wallet.amount ? formatToCurrency(wallet.amount / 100) : "0.00"}
                                                            </div>
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>
                                {/* <div>
                                    <div className="text-sm font-medium mb-2">
                                        Naira Balance
                                    </div>
                                    <input type="text" value={"₦" + formatToCurrency(virtualAccountBalance?.available / 100)} disabled={true} className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                </div> */}
                                <div>
                                    <div className="text-sm font-medium mb-2">
                                        Amount
                                    </div>
                                    <input
                                        type="text"
                                        value={amount}
                                        name="amount"
                                        onChange={(e) => {
                                            const val = e.target.value.replaceAll(",", "");
                                            if (!isNaN(Number(val))) {
                                                setAmount(formatToCurrency(val));
                                            }
                                        }}
                                        className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium mb-2">
                                        Amount you'll recieve
                                    </div>
                                    <input type="text"
                                        value={(Number(amount.replaceAll(",", "")) * Number(rate))}
                                        readOnly={true}
                                        className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="mt-12 top-2/4">
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleFundWallet()}
                                disabled={loading}
                                className="text-sm border-2 bg-primary border-primary rounded-xl text-white py-3 px-12">

                                {
                                    loading ? <svg className="w-5 h-5" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                                        <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                            <animateTransform
                                                attributeName="transform"
                                                attributeType="XML"
                                                type="rotate"
                                                dur="1s"
                                                from="0 50 50"
                                                to="360 50 50"
                                                repeatCount="indefinite" />
                                        </path>
                                    </svg> : "Fund wallet"
                                }
                            </button>
                            <button
                                onClick={() => onClose()}
                                className="text-sm border border-[#282828] rounded-xl text-[#282828] py-3 px-12">
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export const WithdrawFundsModal: React.FC<{
    open: boolean,
    onClose: () => void,
    walletId: number,
    walletCurrency: string,
    walletName: string
}> = ({ open, onClose, walletId, walletName, walletCurrency }) => {
    const [showPinModal, setShowPinModal] = useState(false);
    const [step, setStep] = useState(1);
    const [rate, setRate] = useState("0.00");
    const [amount, setAmount] = useState("")

    const [loading, setLoading] = useState(false);

    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch();
    const [pin, setPin] = useState("");
    const [pinConfirmation, setPinConfirmation] = useState("");

    const wallets = useAppSelector(state => state.wallets.wallets)
    const virtualAccountBalance = useAppSelector(state => state.virtualWallet.account);

    const currencies = [
        { id: 1, name: 'USD', icon: "usa.png" },
        { id: 2, name: 'NGN', icon: "nigeria.png" },
        { id: 3, name: 'EUR', icon: "euro-nation.png" },
        { id: 4, name: 'GBP', icon: "uk.png" },
        { id: 4, name: 'GBP', icon: "uk.png" },
        { id: 4, name: 'GBP', icon: "uk.png" },
    ]

    const handleRateChange = async () => {
        try {
            const response = await calculateFX(walletCurrency, "NGN");
            setRate(response.data.data.rate);
        } catch (err) {

        }
    }

    const handleProfile = async () => {
        try {
            const response = await getProfile();
            dispatch(updateUser({ user: response.data.data }));
        } catch (error) {

        }
    }


    const handleSetPin = async (pin: string, pinConfirmation: string) => {
        try {
            const response = await createPin(pin, pinConfirmation)
            toast(response.data.message, { type: "success" });
        } catch (error: any) {
            if (error.response) {
                toast(error.response.data.message, { type: "error" })
            }

        }
    }

    const handleGetWallets = async () => {
        try {
            dispatch(updateWalletsAsync());
        } catch (err) {

        }
    }

    const handleConfirm = async (pin: string, pinConfirmation: string) => {
        try {
            setLoading(true);
            if (!user?.has_pin) {
                await handleSetPin(pin, pinConfirmation);
                handleProfile();
            }
            const response = await withdrawWallet(walletId, Number(amount.replaceAll(",", "")) * 100, pin);
            setPin("");
            setPinConfirmation("");
            toast(response.data.message, { type: "success" });
            dispatch(updateVirtualAccountAsync());
            handleGetWallets();
            onClose();
            setLoading(false);
        } catch (error: any) {
            setLoading(false)
            setPin("");
            setPinConfirmation("");
            if (error.response) {
                toast(error.response.data.message, { type: "error" });
            }
        }
    }


    const handleWithdrawFunds = async () => {
        try {
            if (!pin) {
                setShowPinModal(true);
                return;
            }

        } catch (error: any) {
            setLoading(false)
            setPin("");
            setPinConfirmation("");
        }
    }

    useEffect(() => {
        console.log("rat")
        handleRateChange();
    }, [open])


    return (
        <>
            <PinModal open={showPinModal} onClose={(pin, pinConfirmation) => {
                setPin(pin as string);
                setPinConfirmation(pinConfirmation as string);
                if (pin) {
                    handleConfirm(pin, pinConfirmation as string)
                }
                setShowPinModal(false)

            }} />
            <Modal open={showPinModal ? false : open} onClose={onClose} size="sm">
                <div className="py-4 px-6 text-left md:h-[90vh] flex flex-col justify-between overflow-auto">

                    <div className="">
                        <div className="flex justify-between">
                            <span className="text-lg font-bold text-black">
                                Withdraw from your {walletName} wallet
                            </span>
                            <button onClick={onClose} className="outline-none">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-12">
                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm font-medium mb-2">
                                        Amount
                                    </div>
                                    <input
                                        type="text"
                                        value={amount}
                                        name="amount"
                                        onChange={(e) => {
                                            const val = e.target.value.replaceAll(",", "");
                                            if (!isNaN(Number(val))) {
                                                setAmount(formatToCurrency(val));
                                            }
                                        }}
                                        className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium mb-2">
                                        Amount you'll recieve
                                    </div>
                                    <input type="text"
                                        value={(Number(amount.replaceAll(",", "")) * Number(rate))}
                                        readOnly={true}
                                        className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="mt-12 top-2/4">
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleWithdrawFunds()}
                                disabled={loading}
                                className="text-sm border-2 bg-primary border-primary rounded-xl text-white py-3 px-12">

                                {
                                    loading ? <svg className="w-5 h-5" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                                        <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                            <animateTransform
                                                attributeName="transform"
                                                attributeType="XML"
                                                type="rotate"
                                                dur="1s"
                                                from="0 50 50"
                                                to="360 50 50"
                                                repeatCount="indefinite" />
                                        </path>
                                    </svg> : "Withdraw"
                                }
                            </button>
                            <button
                                onClick={() => onClose()}
                                className="text-sm border border-[#282828] rounded-xl text-[#282828] py-3 px-12">
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export const CreateBeneficiaryModal: React.FC<{ open: boolean, onClose: () => void, beneficiary?: BeneficiariesModel }> = ({ open, onClose, beneficiary }) => {
    const [loading, setLoading] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({ id: 1, name: 'USD', icon: "usa.png" });
    const dispatch = useAppDispatch();
    const validationSchema = Yup.object().shape({
        entity_type: Yup.string().required("Entity type is required"),
        currency: Yup.string().required("Currency is required"),
        country_code: Yup.string().required("Country code is required"),
        account_number: Yup.string().required("Account number is required"),
        national_identification: Yup.string().required("Nation identification is required"),
        country: Yup.string().required("Nation identification is required"),
        first_name: Yup.string()
            .when('entity_type', {
                is: "individual", // alternatively: (val) => val == true
                then: () => Yup.string()
                    .required('Fist name is required.'),
            }),

        last_name: Yup.string()
            .when('entity_type', {
                is: "individual", // alternatively: (val) => val == true
                then: () => Yup.string()
                    .required('Last name is required.'),
            }),
        company_name: Yup.string()
            .when('company', {
                is: "individual", // alternatively: (val) => val == true
                then: () => Yup.string()
                    .required('Last name is required.'),
            })

    });

    const handleCreateBeneficiary = async (values: any, setSubmitting: (val: boolean) => void) => {
        try {
            setLoading(true)
            setSubmitting(true);
            const response = beneficiary ? await APICall(updateBeneficiary, { id: beneficiary.id, ...values, currency: selectedCurrency.name }, true) : await APICall(createBeneficiary, values, true);
            dispatch(updateBeneficiariesAsync());
            setSubmitting(false);
            setLoading(false);
            onClose();

        } catch (error: any) {
            if (error.response)
                toast(error.response.data.message, { type: "error" });
            setLoading(false);
        }
    }

    const currencies = [
        { id: 1, name: 'USD', icon: "usa.png" },
        { id: 2, name: 'NGN', icon: "nigeria.png" },
        { id: 3, name: 'EUR', icon: "euro-nation.png" },
        { id: 4, name: 'GBP', icon: "uk.png" },
        { id: 4, name: 'AUD', icon: "aud.png" },
        { id: 4, name: 'BGN', icon: "uk.png" },
    ]

    const [beneficiaryData, setBeneficiaryData] = useState({
        entity_type: "",
        currency: "",
        country_code: "",
        account_number: "",
        national_identification: "",
        country: "",
        first_name: "",
        last_name: "",
        company_name: ""

    })


    return (
        <>

            <Modal open={open} onClose={onClose} size="sm">
                <Formik
                    initialValues={{
                        entity_type: beneficiary?.entity_type,
                        currency: beneficiary?.currency,
                        country_code: beneficiary?.country_code,
                        account_number: beneficiary?.account_number,
                        national_identification: beneficiary?.national_identification,
                        country: beneficiary?.country,
                        first_name: beneficiary?.first_name,
                        last_name: beneficiary?.last_name,
                        company_name: beneficiary?.company_name

                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {

                        handleCreateBeneficiary(values, setSubmitting);
                    }}
                >
                    {({ isSubmitting, values, handleChange, handleBlur, setFieldValue, setTouched, setValues }) => (
                        <Form>
                            <div className="py-4 px-6 text-left md:h-[90vh] flex flex-col justify-between overflow-auto">

                                <div className="">
                                    <div className="flex justify-between">
                                        <span className="text-lg font-bold text-black">
                                            Create a new beneficiary
                                        </span>
                                        <button onClick={onClose} className="outline-none">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-12">
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Entity type
                                                </div>
                                                <select
                                                    value={values.entity_type}
                                                    name="entity_type"
                                                    onChange={(e) => {
                                                        setBeneficiaryData({ ...beneficiaryData, entity_type: e.target.value })
                                                        handleChange(e)
                                                    }}
                                                    onBlur={handleBlur}
                                                    className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full">
                                                    <option value=""></option>
                                                    <option value="individual">Individual</option>
                                                    <option value="company">Company</option>
                                                </select>
                                                <ErrorMessage name="entity_type" component={"div"} className="text-red-600 text-sm text-left" />
                                            </div>
                                            <div>

                                                <div className="text-sm font-medium mb-2">
                                                    Currency
                                                </div>

                                                <Listbox value={selectedCurrency} onChange={(val) => { setSelectedCurrency(val); setFieldValue("currency", val.name) }}>
                                                    <div className="relative mt-1">
                                                        <Listbox.Button className="relative border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full">
                                                            <div className="flex items-center gap-2">
                                                                <div>
                                                                    <img className="w-6" src={getIcon(selectedCurrency.icon)} alt="" />
                                                                </div>

                                                                <div className="font-semibold text-sm">
                                                                    {selectedCurrency.name}
                                                                </div>
                                                            </div>
                                                        </Listbox.Button>
                                                        <Transition
                                                            as={React.Fragment}
                                                            leave="transition ease-in duration-100"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                                                                {currencies.map((currency, currencyID) => (
                                                                    <Listbox.Option
                                                                        key={currencyID + "wallet"}
                                                                        className={"flex items-center gap-2 py-2 cursor-pointer hover:bg-zinc-100 px-3"}
                                                                        value={currency}
                                                                    >
                                                                        <div>
                                                                            {<img className="w-6" src={getIcon(currency.icon)} alt="" />}
                                                                        </div>
                                                                        <div className="font-semibold text-sm">
                                                                            {currency.name}
                                                                        </div>
                                                                    </Listbox.Option>
                                                                ))}
                                                            </Listbox.Options>
                                                        </Transition>
                                                    </div>
                                                </Listbox>
                                                <ErrorMessage name="currency" component={"div"} className="text-red-600 text-sm text-left" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Account Number
                                                </div>
                                                <input
                                                    type="text"
                                                    value={values.account_number}
                                                    name="account_number"
                                                    onChange={(e) => {
                                                        setBeneficiaryData({ ...beneficiaryData, account_number: e.target.value });
                                                        handleChange(e)
                                                    }}
                                                    onBlur={handleBlur}
                                                    className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                <ErrorMessage name="account_number" component={"div"} className="text-red-600 text-sm text-left" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    National Identification
                                                </div>
                                                <input
                                                    type="text"
                                                    value={values.national_identification}
                                                    name="national_identification"
                                                    placeholder="Sort code, Swift code, ABA code, BIC code, IFSC code or Routing number"
                                                    onChange={(e) => {
                                                        setBeneficiaryData({ ...beneficiaryData, national_identification: e.target.value });
                                                        handleChange(e)
                                                    }}
                                                    onBlur={handleBlur}
                                                    className="border bg-[#F5F5F5] border-primary placeholder:text-xs rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                <ErrorMessage name="national_identification" component={"div"} className="text-red-600 text-sm text-left" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Country
                                                </div>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    onChange={(v) => {
                                                        if (v) {
                                                            setFieldValue("country", v.val.name);
                                                            setFieldValue("country_code", v.val.code);
                                                        }
                                                    }}
                                                    // isLoading={isLoading}
                                                    styles={{
                                                        control: (styles) => ({
                                                            ...styles, border: "1px solid #4888dc",
                                                            backgroundColor: "#F5F5F5",
                                                            borderRadius: "0.5rem",
                                                            padding: "0.5rem 1rem",
                                                            color: "#5A5A5A",
                                                            width: "100%"
                                                        })
                                                    }}
                                                    defaultInputValue="Select country"
                                                    isClearable={true}
                                                    isSearchable={true}
                                                    name="country"
                                                    options={countryData.map(v => ({ val: v, label: v.name }))}
                                                />
                                                <ErrorMessage name="country" component={"div"} className="text-red-600 text-sm text-left" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium mb-2">
                                                    Country Code
                                                </div>
                                                <input
                                                    type="text"
                                                    value={values.country_code}
                                                    name="country_code"
                                                    placeholder="Country code"
                                                    readOnly
                                                    className="border bg-[#F5F5F5] border-primary placeholder:text-xs rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />

                                                <ErrorMessage name="country_code" component={"div"} className="text-red-600 text-sm text-left" />
                                            </div>
                                            {
                                                values.entity_type == "individual" ? <>
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">
                                                            First Name
                                                        </div>
                                                        <input
                                                            type="text"
                                                            value={values.first_name}
                                                            name="first_name"
                                                            onChange={(e) => {
                                                                setBeneficiaryData({ ...beneficiaryData, first_name: e.target.value });
                                                                handleChange(e)
                                                            }}
                                                            onBlur={handleBlur}
                                                            className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                        <ErrorMessage name="first_name" component={"div"} className="text-red-600 text-sm text-left" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">
                                                            Last Name
                                                        </div>
                                                        <input
                                                            type="text"
                                                            value={values.last_name}
                                                            name="last_name"
                                                            onChange={(e) => {
                                                                setBeneficiaryData({ ...beneficiaryData, last_name: e.target.value });
                                                                handleChange(e)
                                                            }}
                                                            onBlur={handleBlur}
                                                            className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                        <ErrorMessage name="last_name" component={"div"} className="text-red-600 text-sm text-left" />
                                                    </div>
                                                </> : <>
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">
                                                            Company Name
                                                        </div>
                                                        <input
                                                            type="text"
                                                            value={values.company_name}
                                                            name="company_name"
                                                            onChange={(e) => {
                                                                setBeneficiaryData({ ...beneficiaryData, company_name: e.target.value });
                                                                handleChange(e)
                                                            }}
                                                            onBlur={handleBlur}
                                                            className="border bg-[#F5F5F5] border-primary rounded-lg py-4 px-6 text-sm text-[#5A5A5A] w-full" />
                                                        <ErrorMessage name="company_name" component={"div"} className="text-red-600 text-sm text-left" />
                                                    </div>
                                                </>
                                            }

                                        </div>


                                    </div>
                                </div>
                                <div className="mt-12 top-2/4">
                                    <div className="flex gap-3">
                                        <button
                                            type="submit"
                                            className="text-sm border-2 bg-primary border-primary rounded-xl text-white py-3 px-12">

                                            {
                                                loading ? <svg className="w-5 h-5" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                                                    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                                        <animateTransform
                                                            attributeName="transform"
                                                            attributeType="XML"
                                                            type="rotate"
                                                            dur="1s"
                                                            from="0 50 50"
                                                            to="360 50 50"
                                                            repeatCount="indefinite" />
                                                    </path>
                                                </svg> : "Create"
                                            }
                                        </button>
                                        <button onClick={() => onClose()} className="text-sm border border-[#282828] rounded-xl text-[#282828] py-3 px-12">
                                            Exit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

