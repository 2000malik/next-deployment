import ExchangeCard from "../../../../Components/ExchangeCard"
import { APICall, dataURLtoFile, formatToCurrency, getIcon, getImage } from "../../../../Utils"
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { confirmBVN, confirmBVNImage, getProfile, resendBVNOTP, verifyBVN } from "../../../../Api/Auth"
import { useAppDispatch, useAppSelector } from "../../../../Hooks";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { updateUser } from "../../../../Redux/Auth"
import { Tab, Listbox, Disclosure, Switch } from '@headlessui/react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import getSymbolFromCurrency from 'currency-symbol-map'
import { Button } from "../../../../Components/Button"
import { Input } from "../../../../Components/Input";


const WebsitePageSettings


    = () => {
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
                                <path d="M6 12L10 8L6 4" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="text-sm font-medium">
                            Settings
                        </div>
                        <div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="text-sm font-medium text-[#66C6BF]">
                            Website page settings
                        </div>

                    </div>
                </div>
                <div className="mt-8">
                    <div className="pr-5">
                        <div className={`font-bold text-xl pb-2`}>
                            Website page settings
                        </div>
                        <div>
                            <p className="text-sm">
                                In this section you can configure your Podcast web page.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div>
                            <div className="space-y-8">
                                <div className="flex">
                                    <div className="w-8/12">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Website
                                        </label>
                                        <Input name="email" placeholder="www.wokpa.com/emaxpodcast" />
                                        <div className="text-xs text-[#D0D5DD] mt-1">
                                            Please note: this is the website associated with your podcast, it also sets the tag of your RSS feed
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-6/12">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Itunes
                                        </label>
                                        <Input name="email" placeholder="Enter profile link" />
                                    </div>
                                    <div className="w-6/12">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Twitter
                                        </label>
                                        <Input name="email" placeholder="Enter profile link" />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-6/12">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Facebook
                                        </label>
                                        <Input name="email" placeholder="Enter profile link" />
                                    </div>
                                    <div className="w-6/12">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Youtube
                                        </label>
                                        <Input name="email" placeholder="Enter channel link" />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-6/12">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Telephone number
                                        </label>
                                        <Input name="email" placeholder="Enter number" />
                                    </div>
                                    <div className="w-6/12">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Others
                                        </label>
                                        <Input name="email" placeholder="Enter link" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

export default WebsitePageSettings

