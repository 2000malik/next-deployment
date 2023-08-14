import ExchangeCard from "../../../../components/exchange-card"
import { APICall, dataURLtoFile, formatToCurrency, getIcon, getImage } from "../../../../Utils"
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { confirmBVN, confirmBVNImage, getProfile, resendBVNOTP, verifyBVN } from "../../../../Api/Auth"
import { useAppDispatch, useAppSelector } from "../../../../Hooks";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { updateUser } from "../../../../redux/auth"
import { Tab, Listbox, Disclosure, Switch } from '@headlessui/react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import getSymbolFromCurrency from 'currency-symbol-map'
import { Button } from "../../../../components/button/button"
import { Input } from "../../../../components/input";


const CreatePodcastPage

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
                            Dashboard
                        </div>
                        <div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="#D0D5DD" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="text-sm font-medium text-[#66C6BF]">
                            Create a new podcast
                        </div>

                    </div>
                </div>
                <div className="mt-8">
                    <div className="pr-5">
                        <div className={`font-bold text-3xl pb-2 font-raleway`}>
                            Create Podcast
                        </div>
                        <div className="mt-2">
                            <span className="inline-flex items-center gap-4 rounded-xl py-2 px-6 bg-blue-100">
                                <div>
                                    <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0835 13.4163H11.9168V15.2497H10.0835V13.4163ZM10.0835 17.083H11.9168V22.583H10.0835V17.083ZM11.0002 8.83301C5.94016 8.83301 1.8335 12.9397 1.8335 17.9997C1.8335 23.0597 5.94016 27.1663 11.0002 27.1663C16.0602 27.1663 20.1668 23.0597 20.1668 17.9997C20.1668 12.9397 16.0602 8.83301 11.0002 8.83301ZM11.0002 25.333C6.95766 25.333 3.66683 22.0422 3.66683 17.9997C3.66683 13.9572 6.95766 10.6663 11.0002 10.6663C15.0427 10.6663 18.3335 13.9572 18.3335 17.9997C18.3335 22.0422 15.0427 25.333 11.0002 25.333Z" fill="#2196F3" />
                                    </svg>
                                </div>
                                <div className="text-sm text-indigo-900">
                                    By creating content on Wokpa, you adhere to our <a href="" className="font-semibold underline"> Community rules</a>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div>
                            <div className="space-y-8">
                                <div className="flex">
                                    <div className="w-6/12">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Podcast Title*
                                        </label>
                                        <Input name="email" placeholder="Enter podcast title" />
                                        <div className="text-xs text-[#D0D5DD] mt-1">
                                            Learn how to write a professional podcast title.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-6/12">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Language
                                        </label>
                                        <Input name="email" placeholder="Select language" />
                                    </div>
                                    <div className="w-6/12">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Category
                                        </label>
                                        <Input name="email" placeholder="Select a category" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-medium">
                                        Picture
                                    </div>
                                    <div className="w-[348px] py-4">
                                        <div className="text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 inline">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                            <div className="text-xs text-[#EAECF0] px-6">
                                                We recommend uploading an artwork of at least 1400x1400 pixels and maximum 5MB. We support jpg, png, gif and tiff formats.
                                            </div>
                                            <div className="mt-4">
                                                <button className="bg-[#F9F5FF] rounded-full py-2 px-4 text-sm font-semibold text-[#042946]">
                                                    Upload image
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-6/12">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Description
                                        </label>
                                        <textarea rows={8} className={`w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-500 `} name="email" placeholder="Enter descrption" />
                                        <div className="text-xs text-[#D0D5DD] mt-1">
                                            Listeners want to know what your podcast is about before they tune in. Hook them in with a persuasive description that quickly sums up what the main concept and structure of your podcast is.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-6/12">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Tips
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <Switch
                                                checked={true}
                                                onChange={() => { }}
                                                className={`${true ? 'bg-[#21A79C]' : 'bg-teal-700'} relative inline-flex h-[18px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                            >
                                                <span className="sr-only">Use setting</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={`${true ? 'translate-x-[0.82rem]' : 'translate-x-0'} pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                                />
                                            </Switch>
                                            <div className="text-sm font-medium">
                                                Activate tips and donations
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-6/12">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Set amount
                                        </label>
                                        <Input name="email" placeholder="Enter podcast title" />
                                        <div className="text-xs text-[#D0D5DD] mt-1">
                                            Input a range of amount
                                        </div>
                                        <div className="mt-1">
                                            <Button className="py-2 text-sm font-medium">Add amount</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-6/12">
                                        <label htmlFor="password" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <Input name="email" placeholder="Enter your email address" />
                                        <div className="text-xs text-[#D0D5DD] mt-1">
                                            By adding your email address here, it will be displayed on your podcast page and RSS feed. This email address allows you to confirm the ownership into platforms like Spotify and Google Podcasts.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

export default CreatePodcastPage
