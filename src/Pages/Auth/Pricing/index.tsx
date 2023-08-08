import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../Components/Button";
import { Input } from "../../../Components/Input";
import { PasswordInput } from "../../../Components/PasswordInput";
import { getIcon } from "../../../Utils";
import { WokpaLogo } from "../../../Components/WokpaLogo";


const FreePlan = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#18181B] pt-10 px-6 rounded-3xl">
            <div>
                <span className="rounded-3xl bg-[#E5F5F4] py-1 px-6 text-[#0D8478] text-lg font-semibold">
                    Free
                </span>
            </div>
            <div>
                <div className="py-6">
                    <div>
                        <span className="text-4xl font-raleway font-medium">
                            ₦0 <span className="text-lg font-sans text-[#8C8C8D]">
                                /month
                            </span>
                        </span>
                    </div>

                    <div className="mt-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="text-sm font-medium text-[#FCFCFD]">
                                    2 hours
                                    <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                        Audio uploads
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="text-sm font-medium text-[#FCFCFD]">
                                    2 hours
                                    <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                        Audio uploads
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="text-sm font-medium text-[#FCFCFD]">
                                    3 days
                                    <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                        Audio storage
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="text-sm font-medium text-[#FCFCFD]">
                                    1
                                    <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                        Audio hosting
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="text-sm font-medium text-[#FCFCFD]">
                                    5 platforms
                                    <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                        Distribution
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="text-sm font-medium text-[#FCFCFD]">
                                    Basic
                                    <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                        Analytics
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="text-sm font-medium text-[#FCFCFD]">
                                    Single
                                    <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                        Podcast Channels
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="text-sm font-medium text-[#FCFCFD]">
                                    5 minutes
                                    <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                        Audio Transcription
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="text-sm font-medium text-[#FCFCFD]">
                                    Audience Support

                                </span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button onClick={() => navigate("/payment")} className="w-full">
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SoloPlan = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="bg-[#25AEA4] py-3 px-6 rounded-t-3xl text-center">
                Best for indie Podcasters
            </div>
            <div className="bg-[#18181B] pt-10 px-6 rounded-b-3xl">
                <div>
                    <span className="rounded-3xl bg-[#E5F5F4] py-1 px-6 text-[#0D8478] text-lg font-semibold">
                        Solo
                    </span>
                </div>
                <div>
                    <div className="py-6">
                        <div>
                            <span className="text-4xl font-raleway font-medium">
                                ₦10,000 <span className="text-lg font-sans text-[#8C8C8D]">
                                    /month
                                </span>
                            </span>
                        </div>

                        <div className="mt-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        unlimited
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Audio uploads
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        unlimited
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Audio uploads
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        unlimited
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Audio storage
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        unlimited
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Audio hosting
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        20 platforms
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Distribution
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Single
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Podcast Channels
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Basic
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Analytics
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Single
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Podcast Channels
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        5 hours
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Audio Transcription
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Audience Support

                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Programmatic, self...
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Monetization
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Self-service Ad insertion...
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            PodAds
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Mailing List

                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Telegram Group
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Whatsapp Group
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Customization
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Podcast Page
                                    </span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Button onClick={() => navigate("/payment/solo")} className="w-full">
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


const PremiumPlan = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="bg-[#25AEA4] py-3 px-6 rounded-t-3xl text-center">
                Best for Radio Stations, Churches, Large Organization, Media Company
            </div>
            <div className="bg-[#18181B] pt-10 px-6 rounded-b-3xl">
                <div>
                    <span className="rounded-3xl bg-[#E5F5F4] py-1 px-6 text-[#0D8478] text-lg font-semibold">
                        Premium +
                    </span>
                </div>
                <div>
                    <div className="py-6">
                        <div>
                            <span className="text-4xl font-raleway font-medium">
                                ₦10,000 <span className="text-lg font-sans text-[#8C8C8D]">
                                    /month
                                </span>
                            </span>
                        </div>

                        <div className="mt-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        unlimited
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Audio uploads
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        unlimited
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Audio uploads
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        unlimited
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Audio storage
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        unlimited
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Audio hosting
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        20 platforms
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Distribution
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Single
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Podcast Channels
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Basic
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Analytics
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Single
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Podcast Channels
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        5 hours
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Audio Transcription
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Audience Support

                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Programmatic, self...
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            Monetization
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Self-service Ad insertion...
                                        <span className="text-sm font-medium text-[#D1D1D6] ml-2">
                                            PodAds
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Mailing List

                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Telegram Group
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Whatsapp Group
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Customization
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="12" fill="#D1FADF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                    </svg>

                                    <span className="text-sm font-medium text-[#FCFCFD]">
                                        Podcast Page
                                    </span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Button onClick={() => navigate("/payment/solo")} className="w-full">
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const PricingPlans = () => {
    return (
        <div>
            <div className="">

                <div className="bg-dark contianer md:px-24 py-8 min-h-screen">
                    <div className="text-center">
                        <WokpaLogo />
                    </div>
                    <div className="text-center mt-24">
                        <h1 className="text-5xl font-bold font-raleway">
                            Pricing Plans
                        </h1>
                        <div className="mt-1">
                            <p className="text-gray-100">
                                Choose from our range of affordable pricing plans to start your podcasting <br /> journey today!
                            </p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <div className="grid grid-cols-3 gap-12">
                            <div>
                                <FreePlan />
                            </div>
                            <div>
                                <SoloPlan />
                            </div>
                            <div>
                                <PremiumPlan />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PricingPlans;