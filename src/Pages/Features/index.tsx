import { Button } from "../../Components/Button";
import { getImage } from "../../Utils";
import { Tab, Disclosure } from '@headlessui/react'


const Features = () => {
    return (
        <div className="relative mt-[80px]">

            <header className="relative bg-gradient-to-tr from-[#083F62] to-[#07211F ]">
                <div className="container px-4 mx-auto py-24">
                    <div className="text-center">
                        <h2 className="text-4xl font-raleway font-bold">
                            Easiest way to start podcasting
                        </h2>
                        <p className="text-lg max-w-4xl mx-auto mt-6 text-[#EAECF0]">
                            Wokpa gives you everything yoyu need to host, provide and track your podcast.
                        </p>
                    </div>
                    <div className="mt-16 px-4">
                        <img src={getImage("features.png")} alt="" className="w-full" />
                    </div>
                </div>
            </header>

            <section>
                <div className="container px-4 mx-auto py-24">
                    <div className="text-center">
                        <h2 className="text-4xl font-raleway font-bold">
                            Specially built for you
                        </h2>
                        <p className="text-lg max-w-4xl mx-auto mt-6 text-[#EAECF0]">
                            Wokpa records audio mp3 to give you the picture-perfect quality that your video podcast deserves.Record in 16-bit 48k WAV audio track per guest, regardless of internet connection (local recording), with no time limits.
                        </p>
                    </div>
                    <div className="mt-16 container mx-auto px-4">
                        <div className="flex gap-8 justify-center">
                            <div className="rounded-xl bg-[#18181B] py-12 px-10 w-56 text-center">
                                <svg className="inline text-center" width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_2977_88960)">
                                        <rect x="0.5" width="72" height="72" rx="8" fill="white" fill-opacity="0.2" />
                                        <path d="M36.5008 31.2002H44.5008C45.3495 31.2002 46.1634 31.5373 46.7635 32.1375C47.3636 32.7376 47.7008 33.5515 47.7008 34.4002C47.7008 35.2489 47.3636 36.0628 46.7635 36.6629C46.1634 37.2631 45.3495 37.6002 44.5008 37.6002H28.5008C27.6521 37.6002 26.8382 37.2631 26.238 36.6629C25.6379 36.0628 25.3008 35.2489 25.3008 34.4002C25.3008 33.5515 25.6379 32.7376 26.238 32.1375C26.8382 31.5373 27.6521 31.2002 28.5008 31.2002H30.1008" stroke="#F79009" stroke-width="2" stroke-linecap="round" />
                                        <path d="M31.7004 43.9996C31.7004 44.6361 31.4475 45.2466 30.9974 45.6967C30.5474 46.1468 29.9369 46.3996 29.3004 46.3996C28.6639 46.3996 28.0534 46.1468 27.6033 45.6967C27.1532 45.2466 26.9004 44.6361 26.9004 43.9996C26.9004 43.3631 27.1532 42.7526 27.6033 42.3026C28.0534 41.8525 28.6639 41.5996 29.3004 41.5996C29.9369 41.5996 30.5474 41.8525 30.9974 42.3026C31.4475 42.7526 31.7004 43.3631 31.7004 43.9996Z" stroke="#F79009" stroke-width="2" />
                                        <path d="M41.3 35.2V37.6M38.1 44H46.1M27.7 26.4L41.3 20M52.5 39.2C52.5 45.2336 52.5 48.2512 50.6248 50.1248C48.7512 52 45.7336 52 39.7 52H33.3C27.2664 52 24.2488 52 22.3752 50.1248C20.5 48.2512 20.5 45.2336 20.5 39.2C20.5 33.1664 20.5 30.1488 22.3752 28.2752C24.2488 26.4 27.2664 26.4 33.3 26.4H39.7C45.7336 26.4 48.7512 26.4 50.6248 28.2752C51.6712 29.32 52.1336 30.72 52.3368 32.8" stroke="#F79009" stroke-width="2" stroke-linecap="round" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_2977_88960" x="-7.5" y="-8" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2977_88960" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2977_88960" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <div className="font-raleway text-2xl font-bold text-[#FCFCFD] mt-4">
                                    Distribute
                                </div>
                            </div>
                            <div className="rounded-xl bg-[#18181B] py-12 px-10 w-56 text-center">
                                <svg className="inline text-center" width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_2978_89527)">
                                        <rect x="0.5" width="72" height="72" rx="8" fill="white" fill-opacity="0.2" />
                                        <g clip-path="url(#clip0_2978_89527)">
                                            <path d="M37 20C32.7565 20 28.6869 21.6857 25.6863 24.6863C22.6857 27.6869 21 31.7565 21 36C21 40.2435 22.6857 44.3131 25.6863 47.3137C28.6869 50.3143 32.7565 52 37 52C41.2435 52 45.3131 50.3143 48.3137 47.3137C51.3143 44.3131 53 40.2435 53 36C53 31.7565 51.3143 27.6869 48.3137 24.6863C45.3131 21.6857 41.2435 20 37 20ZM25.2667 30.6667H29.5333C30.0991 30.6667 30.6418 30.8914 31.0418 31.2915C31.4419 31.6916 31.6667 32.2342 31.6667 32.8V34.9333C31.6667 36 30.856 36.8533 29.832 37.0027L32.328 41.3333H29.8533L27.4 37.0667V41.3333H25.2667M35.9333 30.6667H40.2V32.8H35.9333V34.9333H40.2V37.0667H35.9333V39.2H40.2V41.3333H35.9333C35.3675 41.3333 34.8249 41.1086 34.4248 40.7085C34.0248 40.3084 33.8 39.7658 33.8 39.2V32.8C33.8 32.2342 34.0248 31.6916 34.4248 31.2915C34.8249 30.8914 35.3675 30.6667 35.9333 30.6667ZM44.4667 30.6667H48.7333V32.8H44.4667V39.2H48.7333V41.3333H44.4667C43.9009 41.3333 43.3583 41.1086 42.9582 40.7085C42.5581 40.3084 42.3333 39.7658 42.3333 39.2V32.8C42.3333 32.2342 42.5581 31.6916 42.9582 31.2915C43.3583 30.8914 43.9009 30.6667 44.4667 30.6667ZM27.4 32.8V34.9333H29.5333V32.8" fill="#D92D20" />
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_2978_89527" x="-7.5" y="-8" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2978_89527" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2978_89527" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_2978_89527">
                                            <rect width="32" height="32" fill="white" transform="translate(20.5 20)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <div className="font-raleway text-2xl font-bold text-[#FCFCFD] mt-4">
                                    Record
                                </div>
                            </div>
                            <div className="rounded-xl bg-[#18181B] py-12 px-10 w-56 text-center">
                                <svg className="inline text-center" width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_2977_89347)">
                                        <rect x="0.5" width="72" height="72" rx="8" fill="white" fill-opacity="0.2" />
                                        <path d="M34.5013 30.666C33.976 30.666 33.4559 30.7695 32.9706 30.9705C32.4853 31.1715 32.0443 31.4662 31.6729 31.8376C31.3014 32.209 31.0068 32.65 30.8058 33.1353C30.6048 33.6206 30.5013 34.1407 30.5013 34.666C30.5013 35.1913 30.6048 35.7114 30.8058 36.1967C31.0068 36.6821 31.3014 37.123 31.6729 37.4944C32.0443 37.8659 32.4853 38.1605 32.9706 38.3615C33.4559 38.5626 33.976 38.666 34.5013 38.666C35.5622 38.666 36.5796 38.2446 37.3297 37.4944C38.0799 36.7443 38.5013 35.7269 38.5013 34.666C38.5013 33.6051 38.0799 32.5877 37.3297 31.8376C36.5796 31.0874 35.5622 30.666 34.5013 30.666ZM32.5013 34.666C32.5013 34.1356 32.712 33.6269 33.0871 33.2518C33.4622 32.8767 33.9709 32.666 34.5013 32.666C35.0317 32.666 35.5404 32.8767 35.9155 33.2518C36.2906 33.6269 36.5013 34.1356 36.5013 34.666C36.5013 35.1964 36.2906 35.7052 35.9155 36.0802C35.5404 36.4553 35.0317 36.666 34.5013 36.666C33.9709 36.666 33.4622 36.4553 33.0871 36.0802C32.712 35.7052 32.5013 35.1964 32.5013 34.666ZM23.168 29.666C23.168 28.8704 23.484 28.1073 24.0466 27.5447C24.6093 26.9821 25.3723 26.666 26.168 26.666H42.8346C43.2286 26.666 43.6187 26.7436 43.9827 26.8944C44.3467 27.0451 44.6774 27.2661 44.956 27.5447C45.2345 27.8233 45.4555 28.154 45.6063 28.518C45.757 28.8819 45.8346 29.2721 45.8346 29.666V39.666C45.8346 40.06 45.757 40.4501 45.6063 40.8141C45.4555 41.178 45.2345 41.5088 44.956 41.7873C44.6774 42.0659 44.3467 42.2869 43.9827 42.4377C43.6187 42.5884 43.2286 42.666 42.8346 42.666H26.168C25.3723 42.666 24.6093 42.3499 24.0466 41.7873C23.484 41.2247 23.168 40.4617 23.168 39.666V29.666ZM26.168 28.666C25.9028 28.666 25.6484 28.7714 25.4609 28.9589C25.2733 29.1464 25.168 29.4008 25.168 29.666V30.666H26.168C26.4332 30.666 26.6875 30.5607 26.8751 30.3731C27.0626 30.1856 27.168 29.9312 27.168 29.666V28.666H26.168ZM25.168 36.666H26.168C26.9636 36.666 27.7267 36.9821 28.2893 37.5447C28.8519 38.1073 29.168 38.8704 29.168 39.666V40.666H39.8346V39.666C39.8346 38.8704 40.1507 38.1073 40.7133 37.5447C41.2759 36.9821 42.039 36.666 42.8346 36.666H43.8346V32.666H42.8346C42.039 32.666 41.2759 32.3499 40.7133 31.7873C40.1507 31.2247 39.8346 30.4617 39.8346 29.666V28.666H29.168V29.666C29.168 30.06 29.0904 30.4501 28.9396 30.8141C28.7888 31.178 28.5679 31.5088 28.2893 31.7873C28.0107 32.0659 27.68 32.2869 27.316 32.4377C26.952 32.5884 26.5619 32.666 26.168 32.666H25.168V36.666ZM43.8346 30.666V29.666C43.8346 29.4008 43.7293 29.1464 43.5417 28.9589C43.3542 28.7714 43.0999 28.666 42.8346 28.666H41.8346V29.666C41.8346 30.218 42.2826 30.666 42.8346 30.666H43.8346ZM43.8346 38.666H42.8346C42.5694 38.666 42.3151 38.7714 42.1275 38.9589C41.94 39.1464 41.8346 39.4008 41.8346 39.666V40.666H42.8346C43.0999 40.666 43.3542 40.5607 43.5417 40.3731C43.7293 40.1856 43.8346 39.9312 43.8346 39.666V38.666ZM25.168 39.666C25.168 40.218 25.616 40.666 26.168 40.666H27.168V39.666C27.168 39.4008 27.0626 39.1464 26.8751 38.9589C26.6875 38.7714 26.4332 38.666 26.168 38.666H25.168V39.666ZM26.3693 44.666C26.7204 45.2744 27.2255 45.7795 27.8338 46.1306C28.4422 46.4817 29.1323 46.6664 29.8346 46.666H43.5013C44.333 46.666 45.1566 46.5022 45.925 46.1839C46.6934 45.8656 47.3915 45.3991 47.9796 44.811C48.5677 44.2229 49.0343 43.5247 49.3525 42.7563C49.6708 41.988 49.8346 41.1644 49.8346 40.3327V33.3327C49.8349 32.6303 49.6501 31.9403 49.299 31.332C48.948 30.7237 48.4429 30.2185 47.8346 29.8673V40.3327C47.8346 41.482 47.3781 42.5842 46.5654 43.3968C45.7528 44.2095 44.6506 44.666 43.5013 44.666H26.3693Z" fill="#4CA30D" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_2977_89347" x="-7.5" y="-8" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2977_89347" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2977_89347" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                                <div className="font-raleway text-2xl font-bold text-[#FCFCFD] mt-4">
                                    Monetize
                                </div>
                            </div>
                            <div className="rounded-xl bg-[#18181B] py-12 px-10 w-56 text-center">
                                <svg className="inline text-center" width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_2977_89354)">
                                        <rect x="0.5" width="72" height="72" rx="8" fill="white" fill-opacity="0.2" />
                                        <path d="M32.5 48H26.6333C25.8866 48 25.5132 48 25.228 47.8547C24.9771 47.7268 24.7732 47.5229 24.6453 47.272C24.5 46.9868 24.5 46.6134 24.5 45.8667V26.1333C24.5 25.3866 24.5 25.0132 24.6453 24.728C24.7732 24.4771 24.9771 24.2732 25.228 24.1453C25.5132 24 25.8866 24 26.6333 24H30.3667C31.1134 24 31.4868 24 31.772 24.1453C32.0229 24.2732 32.2268 24.4771 32.3547 24.728C32.5 25.0132 32.5 25.3866 32.5 26.1333V29.3333M32.5 48H40.5M32.5 48L32.5 29.3333M32.5 29.3333H38.3667C39.1134 29.3333 39.4868 29.3333 39.772 29.4787C40.0229 29.6065 40.2268 29.8105 40.3547 30.0613C40.5 30.3466 40.5 30.7199 40.5 31.4667V48M40.5 34.6667H46.3667C47.1134 34.6667 47.4868 34.6667 47.772 34.812C48.0229 34.9398 48.2268 35.1438 48.3547 35.3947C48.5 35.6799 48.5 36.0533 48.5 36.8V45.8667C48.5 46.6134 48.5 46.9868 48.3547 47.272C48.2268 47.5229 48.0229 47.7268 47.772 47.8547C47.4868 48 47.1134 48 46.3667 48H40.5" stroke="#6938EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_2977_89354" x="-7.5" y="-8" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2977_89354" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2977_89354" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                                <div className="font-raleway text-2xl font-bold text-[#FCFCFD] mt-4">
                                    Analyze
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ background: "linear-gradient(27deg, #005FF8 0%, #384459 100%)" }} className="relative bg-gradient-to-tr from-[#005FF8] to-[#384459]">
                <div className="container px-4 mx-auto py-24">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-4xl font-raleway font-bold">
                            Celebrate your podcast's success with Tips from listeners
                        </h2>
                        <p className="text-lg max-w-4xl mx-auto mt-6 text-[#EAECF0]">
                            Wokpa gives you everything yoyu need to host, provide and track your podcast.
                        </p>
                    </div>
                    <div className="mt-16 px-4">
                        <img src={getImage("celebrate.png")} alt="" className="w-full" />
                    </div>
                    <div className="mt-12 text-center">
                        <Button className="text-lg font-semibold font-inter from-white to-white text-secondary py-4">Try Wokpa for free</Button>

                    </div>
                </div>
            </section>
            <section>
                <div className="container px-4 mx-auto py-24">
                    <div className="text-center">
                        <h2 className="text-5xl font-raleway font-bold">
                            All-In-<span className="text-primary">One</span>
                        </h2>
                        <p className="text-lg max-w-4xl mx-auto mt-6">
                            Wokpa is the ultimate all-in-one podcasting platform. We've bundled all your podcasting needs — record, edit, distribute and monetize all from the same place. It's never been easier to podcast.
                        </p>
                    </div>
                    <div className="mt-10 container mx-auto px-4">
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-full bg-[#18181B]  max-w-lg mx-auto">
                                {["Record", "Produce", "Host", "Analyse", "Monetize"].map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            `w-full rounded-full py-3  leading-5 outline-none ${selected ? 'bg-[#FCFCFD] text-[#101828] font-semibold' : 'hover:bg-white/[0.12] text-[#667085]  font-medium'}`
                                        }
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels >
                                <Tab.Panel as="div" className="mt-12">
                                    <div className="flex gap-24 items-center">
                                        <div className="">
                                            <img src={getImage("record-image.png")} alt="" />
                                        </div>
                                        <div className="w-6/12">
                                            <div className="text-left">
                                                <h2 className="text-4xl font-raleway font-bold">
                                                    Tips & support -<span className="text-primary">Income</span>
                                                </h2>
                                                <p className="text-xl max-w-4xl mx-auto mt-6">
                                                    Wokpa records audio mp3 to give you the picture-perfect quality that your video podcast deserves.Record in 16-bit 48k WAV audio track per guest, regardless of internet connection (local recording), with no time limits.
                                                </p>
                                                <div className="mt-4">
                                                    <Button className="text-sm py-2">Try Wokpa for free</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel as="div" className="mt-16">
                                    <div className="flex flex-row-reverse gap-24 items-center">
                                        <div className="">
                                            <img src={getImage("produce-image.png")} alt="" />
                                        </div>
                                        <div className="w-6/12">
                                            <div className="text-left">
                                                <h2 className="text-4xl font-raleway font-bold">
                                                    Robust wallet<span className="text-primary">System</span>
                                                </h2>
                                                <p className="text-xl max-w-4xl mx-auto mt-6">
                                                    Wokpa’s postproduction process takes the headache out of audio production. Set the right podcast loudness and levels while reducing background noise with a click of a button.
                                                </p>
                                                <div className="mt-4">
                                                    <Button className="text-sm py-2">Try Wokpa for free</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel as="div" className="mt-16">
                                    <div className="flex gap-24 items-center">
                                        <div className="">
                                            <img src={getImage("host-image.png")} alt="" />
                                        </div>
                                        <div className="w-6/12">
                                            <div className="text-left">
                                                <h2 className="text-4xl font-raleway font-bold">
                                                    <span className="text-primary">Unlimited</span> Audio Distribution
                                                </h2>
                                                <p className="text-xl max-w-4xl mx-auto mt-6">
                                                    It doesn’t matter if you publish your podcast on a daily, weekly, or monthly schedule, there are no caps on your uploads or downloads.
                                                </p>
                                                <div className="mt-4">
                                                    <Button className="text-sm py-2">Try Wokpa for free</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel as="div" className="mt-16">
                                    <div className="flex flex-row-reverse gap-24 items-center">
                                        <div className="">
                                            <img src={getImage("analyse-image.png")} alt="" />
                                        </div>
                                        <div className="w-6/12">
                                            <div className="text-left">
                                                <h2 className="text-4xl font-raleway font-bold">
                                                    Robost Analytics Sytem
                                                </h2>
                                                <p className="text-xl max-w-4xl mx-auto mt-6">
                                                    Understand where your listeners are located and what platforms they use to listen. With download by location, go beyond the country level and also see what regions/states and cities your audience are listening from.
                                                </p>
                                                <div className="mt-4">
                                                    <Button className="text-sm py-2">Try Wokpa for free</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel as="div" className="mt-16">
                                    <div className="flex gap-24 items-center">
                                        <div className="">
                                            <img src={getImage("monetize-image.png")} alt="" />
                                        </div>
                                        <div className="w-6/12">
                                            <div className="text-left">
                                                <h2 className="text-4xl font-raleway font-bold">
                                                    Robost Ad Managment Sytem
                                                </h2>
                                                <p className="text-xl max-w-4xl mx-auto mt-6">
                                                    Connect your show and access Wokpa’s Ad Marketplace, and let AI match your show with the right brands that resonate with your audience. You don’t need a massive audience to make money podcasting, so we’ve created a flexible way for you to earn.
                                                </p>
                                                <div className="mt-4">
                                                    <Button className="text-sm py-2">Try Wokpa for free</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </section>


            <section className="relative bg-[#CEEAB0]">
                <div className="absolute left-0 -top-10">
                    <svg width="213" height="176" viewBox="0 0 213 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M200.904 115.922C201.208 116.692 202.08 117.069 202.85 116.765C203.621 116.46 203.998 115.588 203.693 114.818L200.904 115.922ZM89.2248 101.275L88.9036 102.74L88.904 102.74L89.2248 101.275ZM123.13 44.0481L121.923 44.9389L121.923 44.939L123.13 44.0481ZM11.6845 97.5159C11.4802 98.3188 11.9655 99.1352 12.7683 99.3394C13.5712 99.5437 14.3876 99.0584 14.5919 98.2556L11.6845 97.5159ZM209.586 102.518C209.864 101.737 209.457 100.879 208.676 100.601C207.896 100.323 207.038 100.731 206.76 101.511L209.586 102.518ZM202.94 116.706L202.621 118.172C203.359 118.332 204.1 117.92 204.353 117.209L202.94 116.706ZM187.725 112.192C186.902 112.101 186.16 112.694 186.069 113.518C185.977 114.341 186.571 115.082 187.394 115.174L187.725 112.192ZM202.298 115.37C203.693 114.818 203.693 114.817 203.692 114.816C203.692 114.815 203.691 114.814 203.691 114.813C203.69 114.81 203.688 114.807 203.687 114.802C203.683 114.792 203.677 114.779 203.67 114.761C203.656 114.726 203.635 114.675 203.608 114.608C203.554 114.474 203.473 114.277 203.366 114.022C203.152 113.512 202.833 112.769 202.411 111.826C201.567 109.939 200.309 107.252 198.649 104.037C195.331 97.6092 190.394 89.0484 183.922 80.5361C171.036 63.585 151.77 46.4513 126.822 47.403L126.937 50.4009C150.361 49.5072 168.805 65.6075 181.534 82.3517C187.871 90.687 192.719 99.0892 195.983 105.413C197.615 108.573 198.848 111.208 199.672 113.051C200.084 113.972 200.394 114.694 200.6 115.184C200.702 115.429 200.779 115.616 200.83 115.74C200.855 115.802 200.874 115.849 200.886 115.879C200.893 115.895 200.897 115.906 200.9 115.913C200.901 115.917 200.902 115.919 200.903 115.921C200.903 115.921 200.903 115.922 200.904 115.922C200.904 115.922 200.904 115.922 202.298 115.37ZM126.822 47.403C102.123 48.3453 87.1654 60.6298 81.0302 73.4835C77.9782 79.8778 77.0908 86.467 78.3775 91.843C79.6758 97.2678 83.2229 101.494 88.9036 102.74L89.5461 99.8096C85.1885 98.8541 82.3768 95.6642 81.2951 91.1447C80.2017 86.5765 80.913 80.6936 83.7376 74.7757C89.3559 63.0049 103.264 51.304 126.937 50.4009L126.822 47.403ZM88.904 102.74C94.3732 103.938 100.691 102.578 106.655 99.5753C112.641 96.5614 118.419 91.8216 122.866 86.0167C131.771 74.3911 135.47 58.2362 124.337 43.1571L121.923 44.939C132.043 58.6459 128.826 73.3022 120.484 84.1924C116.307 89.6453 110.879 94.0895 105.306 96.8958C99.7091 99.7134 94.1135 100.81 89.5457 99.8095L88.904 102.74ZM124.337 43.1573C118.683 35.4974 109.548 31.6912 99.045 31.0609C88.544 30.4307 76.5357 32.9561 64.8272 38.1084C41.4306 48.404 18.8445 69.371 11.6845 97.5159L14.5919 98.2556C21.4694 71.2208 43.2567 50.8781 66.0355 40.8543C77.4146 35.8469 88.9444 33.4602 98.8652 34.0555C108.784 34.6508 116.955 38.2078 121.923 44.9389L124.337 43.1573ZM206.76 101.511L201.527 116.203L204.353 117.209L209.586 102.518L206.76 101.511ZM202.94 116.706C203.259 115.24 203.259 115.24 203.259 115.24C203.259 115.24 203.259 115.24 203.259 115.24C203.258 115.24 203.258 115.24 203.257 115.24C203.256 115.239 203.253 115.239 203.25 115.238C203.244 115.237 203.235 115.235 203.223 115.232C203.2 115.227 203.165 115.22 203.119 115.21C203.027 115.19 202.893 115.161 202.721 115.124C202.377 115.049 201.882 114.943 201.279 114.814C200.073 114.557 198.432 114.21 196.696 113.852C193.263 113.145 189.335 112.371 187.725 112.192L187.394 115.174C188.832 115.333 192.594 116.07 196.091 116.79C197.818 117.146 199.451 117.492 200.653 117.748C201.253 117.876 201.746 117.982 202.088 118.056C202.259 118.093 202.393 118.122 202.483 118.142C202.529 118.152 202.563 118.159 202.586 118.164C202.598 118.167 202.607 118.168 202.613 118.17C202.616 118.17 202.618 118.171 202.619 118.171C202.62 118.171 202.62 118.171 202.621 118.172C202.621 118.172 202.621 118.172 202.621 118.172C202.621 118.172 202.621 118.172 202.94 116.706Z" fill="#4FFFEB" />
                    </svg>
                </div>
                <div className="absolute bottom-0 left-10">
                    <svg width="162" height="154" viewBox="0 0 162 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M72.104 58.2023C57.0662 45.833 44.8812 31.1025 35.7246 13.9405C33.8933 10.5222 29.6322 9.21829 26.1809 11.0508C22.7648 12.8833 21.4615 17.1474 23.2928 20.601C33.365 39.384 46.6774 55.5241 63.1591 69.0916C66.1526 71.5584 70.625 71.1355 73.0902 68.1401C75.5555 65.1094 75.0975 60.6691 72.104 58.2023Z" fill="#4FFFEB" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64.0845 10.029C64.8593 24.266 65.5638 38.5031 66.4442 52.7402C66.6908 56.6166 70.0364 59.5768 73.9103 59.3301C77.7842 59.0834 80.7425 55.7356 80.4959 51.8592C79.6155 37.6573 78.911 23.4556 78.1362 9.21852C77.9249 5.35266 74.5793 2.37484 70.7054 2.59333C66.8315 2.81182 63.838 6.14197 64.0845 10.029Z" fill="#4FFFEB" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M116.368 12.9192C107.353 26.522 97.1399 39.0674 86.8564 51.7539C84.3912 54.7845 84.8488 59.225 87.8775 61.6566C90.9062 64.1234 95.3438 63.6651 97.7738 60.6345C108.339 47.6308 118.834 34.6976 128.131 20.7072C130.279 17.4651 129.363 13.0954 126.123 10.9458C122.919 8.79613 118.516 9.67712 116.368 12.9192Z" fill="#4FFFEB" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M151.292 63.4885C126.851 64.581 100.896 64.6162 76.455 63.0657C72.5811 62.8542 69.2355 65.7792 68.989 69.6908C68.7424 73.5673 71.7007 76.9151 75.5746 77.1618C100.509 78.7123 126.992 78.6771 151.926 77.5846C155.8 77.4084 158.828 74.096 158.652 70.2195C158.476 66.3431 155.166 63.3123 151.292 63.4885Z" fill="#4FFFEB" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M63.14 67.9639C78.213 86.4298 93.8145 104.544 107.796 123.855C110.085 126.992 114.487 127.696 117.657 125.406C120.791 123.115 121.495 118.71 119.206 115.573C105.049 96.0503 89.2716 77.7254 74.0225 59.048C71.5573 56.0526 67.1197 55.5946 64.1262 58.0614C61.0975 60.5282 60.6748 64.9685 63.14 67.9639Z" fill="#4FFFEB" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.7049 73.3214C71.6492 92.5626 72.741 110.958 73.0228 130.446C73.058 134.322 76.2628 137.423 80.1367 137.388C84.0459 137.318 87.1449 134.146 87.0745 130.234C86.7927 109.83 85.6307 90.6244 81.5103 70.467C80.7003 66.661 77.0025 64.194 73.1638 65.0046C69.3603 65.7798 66.8949 69.5155 67.7049 73.3214Z" fill="#4FFFEB" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M68.3407 71.7719C56.9303 94.6076 51.049 119.981 38.8286 142.323C36.962 145.706 38.2296 150.005 41.6457 151.873C45.0618 153.741 49.3234 152.472 51.1899 149.089C63.4808 126.606 69.4323 101.092 80.9484 78.0798C82.6741 74.591 81.2653 70.3622 77.814 68.6002C74.3275 66.8734 70.1016 68.2831 68.3407 71.7719Z" fill="#4FFFEB" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M74.6204 66.5893C51.9052 70.6067 29.2252 72.4391 6.36913 75.1526C2.49522 75.6108 -0.251738 79.0997 0.206088 82.9761C0.663914 86.8525 4.15076 89.6013 8.02467 89.1432C31.1273 86.4296 54.089 84.5266 77.0859 80.474C80.8894 79.7692 83.4603 76.1041 82.7911 72.2982C82.0868 68.457 78.4591 65.8845 74.6204 66.5893Z" fill="#4FFFEB" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M90.4272 55.8786C85.7432 55.6671 81.3058 55.3499 76.7275 54.6803C72.8536 54.1164 69.2966 56.7947 68.7331 60.6359C68.1697 64.4771 70.846 68.0717 74.6847 68.6355C79.756 69.3756 84.6513 69.728 89.7931 69.9394C93.667 70.1156 96.9773 67.12 97.1181 63.2084C97.2942 59.3319 94.3011 56.0548 90.4272 55.8786Z" fill="#4FFFEB" />
                    </svg>

                </div>
                <div className="container px-4 mx-auto py-24">

                    <div className="mt-10  mx-auto px-4 text-[#101828]">
                        <div className="space-y-16 mt-16">
                            <div className="flex flex-row-reverse gap-24 items-center">
                                <div className="w-6/12">
                                    <div className="text-left">
                                        <h2 className="text-4xl font-raleway font-bold">
                                            Build your audience at any stage
                                        </h2>
                                        <p className="text-xl max-w-4xl mx-auto mt-6">
                                            Wokpa records audio mp3 to give you the picture-perfect quality that your video podcast deserves.Record in 16-bit 48k WAV audio track per guest, regardless of internet connection (local recording), with no time limits.
                                        </p>
                                        <div className="mt-4">
                                            <Button className="font-inter py-2 font-semibold">See more features</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={getImage("podcaster-1.png")} alt="" />
                                </div>
                            </div>
                            <div className="flex gap-24 items-center">
                                <div className="w-6/12">
                                    <div className="text-left">
                                        <h2 className="text-4xl font-raleway font-bold">
                                            Build your audience at any stage
                                        </h2>
                                        <p className="text-xl max-w-4xl mx-auto mt-6">
                                            Wokpa records audio mp3 to give you the picture-perfect quality that your video podcast deserves.Record in 16-bit 48k WAV audio track per guest, regardless of internet connection (local recording), with no time limits.
                                        </p>
                                        <div className="mt-4">
                                            <Button className="font-inter py-2 font-semibold">See more features</Button>

                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={getImage("podcaster-2.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative bg-[#18181B]">
                <div className="container px-4 mx-auto py-24">
                    <div className="flex items-center gap-16">
                        <div className="w-6/12">
                            <div className="">
                                <svg width="116" height="20" viewBox="0 0 116 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4100_49327)">
                                        <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#F2F4F7" />
                                        <g clip-path="url(#clip1_4100_49327)">
                                            <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#FEC84B" />
                                        </g>
                                    </g>
                                    <g clip-path="url(#clip2_4100_49327)">
                                        <path d="M33.5383 1.60996C33.7091 1.19932 34.2909 1.19932 34.4617 1.60996L36.5278 6.57744C36.5998 6.75056 36.7626 6.86885 36.9495 6.88383L42.3123 7.31376C42.7556 7.3493 42.9354 7.90256 42.5976 8.19189L38.5117 11.6919C38.3693 11.8139 38.3071 12.0053 38.3506 12.1876L39.5989 17.4208C39.7021 17.8534 39.2315 18.1954 38.8519 17.9635L34.2606 15.1592C34.1006 15.0615 33.8994 15.0615 33.7394 15.1592L29.1481 17.9635C28.7685 18.1954 28.2979 17.8534 28.4011 17.4208L29.6494 12.1876C29.6929 12.0053 29.6307 11.8139 29.4883 11.6919L25.4024 8.19189C25.0646 7.90256 25.2444 7.3493 25.6877 7.31376L31.0505 6.88383C31.2374 6.86885 31.4002 6.75056 31.4722 6.57744L33.5383 1.60996Z" fill="#F2F4F7" />
                                        <g clip-path="url(#clip3_4100_49327)">
                                            <path d="M33.5383 1.60996C33.7091 1.19932 34.2909 1.19932 34.4617 1.60996L36.5278 6.57744C36.5998 6.75056 36.7626 6.86885 36.9495 6.88383L42.3123 7.31376C42.7556 7.3493 42.9354 7.90256 42.5976 8.19189L38.5117 11.6919C38.3693 11.8139 38.3071 12.0053 38.3506 12.1876L39.5989 17.4208C39.7021 17.8534 39.2315 18.1954 38.8519 17.9635L34.2606 15.1592C34.1006 15.0615 33.8994 15.0615 33.7394 15.1592L29.1481 17.9635C28.7685 18.1954 28.2979 17.8534 28.4011 17.4208L29.6494 12.1876C29.6929 12.0053 29.6307 11.8139 29.4883 11.6919L25.4024 8.19189C25.0646 7.90256 25.2444 7.3493 25.6877 7.31376L31.0505 6.88383C31.2374 6.86885 31.4002 6.75056 31.4722 6.57744L33.5383 1.60996Z" fill="#FEC84B" />
                                        </g>
                                    </g>
                                    <g clip-path="url(#clip4_4100_49327)">
                                        <path d="M57.5383 1.60996C57.7091 1.19932 58.2909 1.19932 58.4617 1.60996L60.5278 6.57744C60.5998 6.75056 60.7626 6.86885 60.9495 6.88383L66.3123 7.31376C66.7556 7.3493 66.9354 7.90256 66.5976 8.19189L62.5117 11.6919C62.3693 11.8139 62.3071 12.0053 62.3506 12.1876L63.5989 17.4208C63.7021 17.8534 63.2315 18.1954 62.8519 17.9635L58.2606 15.1592C58.1006 15.0615 57.8994 15.0615 57.7394 15.1592L53.1481 17.9635C52.7685 18.1954 52.2979 17.8534 52.4011 17.4208L53.6494 12.1876C53.6929 12.0053 53.6307 11.8139 53.4883 11.6919L49.4024 8.19189C49.0646 7.90256 49.2444 7.3493 49.6877 7.31376L55.0505 6.88383C55.2374 6.86885 55.4002 6.75056 55.4722 6.57744L57.5383 1.60996Z" fill="#F2F4F7" />
                                        <g clip-path="url(#clip5_4100_49327)">
                                            <path d="M57.5383 1.60996C57.7091 1.19932 58.2909 1.19932 58.4617 1.60996L60.5278 6.57744C60.5998 6.75056 60.7626 6.86885 60.9495 6.88383L66.3123 7.31376C66.7556 7.3493 66.9354 7.90256 66.5976 8.19189L62.5117 11.6919C62.3693 11.8139 62.3071 12.0053 62.3506 12.1876L63.5989 17.4208C63.7021 17.8534 63.2315 18.1954 62.8519 17.9635L58.2606 15.1592C58.1006 15.0615 57.8994 15.0615 57.7394 15.1592L53.1481 17.9635C52.7685 18.1954 52.2979 17.8534 52.4011 17.4208L53.6494 12.1876C53.6929 12.0053 53.6307 11.8139 53.4883 11.6919L49.4024 8.19189C49.0646 7.90256 49.2444 7.3493 49.6877 7.31376L55.0505 6.88383C55.2374 6.86885 55.4002 6.75056 55.4722 6.57744L57.5383 1.60996Z" fill="#FEC84B" />
                                        </g>
                                    </g>
                                    <g clip-path="url(#clip6_4100_49327)">
                                        <path d="M81.5383 1.60996C81.7091 1.19932 82.2909 1.19932 82.4617 1.60996L84.5278 6.57744C84.5998 6.75056 84.7626 6.86885 84.9495 6.88383L90.3123 7.31376C90.7556 7.3493 90.9354 7.90256 90.5976 8.19189L86.5117 11.6919C86.3693 11.8139 86.3071 12.0053 86.3506 12.1876L87.5989 17.4208C87.7021 17.8534 87.2315 18.1954 86.8519 17.9635L82.2606 15.1592C82.1006 15.0615 81.8994 15.0615 81.7394 15.1592L77.1481 17.9635C76.7685 18.1954 76.2979 17.8534 76.4011 17.4208L77.6494 12.1876C77.6929 12.0053 77.6307 11.8139 77.4883 11.6919L73.4024 8.19189C73.0646 7.90256 73.2444 7.3493 73.6877 7.31376L79.0505 6.88383C79.2374 6.86885 79.4002 6.75056 79.4722 6.57744L81.5383 1.60996Z" fill="#F2F4F7" />
                                        <g clip-path="url(#clip7_4100_49327)">
                                            <path d="M81.5383 1.60996C81.7091 1.19932 82.2909 1.19932 82.4617 1.60996L84.5278 6.57744C84.5998 6.75056 84.7626 6.86885 84.9495 6.88383L90.3123 7.31376C90.7556 7.3493 90.9354 7.90256 90.5976 8.19189L86.5117 11.6919C86.3693 11.8139 86.3071 12.0053 86.3506 12.1876L87.5989 17.4208C87.7021 17.8534 87.2315 18.1954 86.8519 17.9635L82.2606 15.1592C82.1006 15.0615 81.8994 15.0615 81.7394 15.1592L77.1481 17.9635C76.7685 18.1954 76.2979 17.8534 76.4011 17.4208L77.6494 12.1876C77.6929 12.0053 77.6307 11.8139 77.4883 11.6919L73.4024 8.19189C73.0646 7.90256 73.2444 7.3493 73.6877 7.31376L79.0505 6.88383C79.2374 6.86885 79.4002 6.75056 79.4722 6.57744L81.5383 1.60996Z" fill="#FEC84B" />
                                        </g>
                                    </g>
                                    <g clip-path="url(#clip8_4100_49327)">
                                        <path d="M105.538 1.60996C105.709 1.19932 106.291 1.19932 106.462 1.60996L108.528 6.57744C108.6 6.75056 108.763 6.86885 108.949 6.88383L114.312 7.31376C114.756 7.3493 114.935 7.90256 114.598 8.19189L110.512 11.6919C110.369 11.8139 110.307 12.0053 110.351 12.1876L111.599 17.4208C111.702 17.8534 111.231 18.1954 110.852 17.9635L106.261 15.1592C106.101 15.0615 105.899 15.0615 105.739 15.1592L101.148 17.9635C100.769 18.1954 100.298 17.8534 100.401 17.4208L101.649 12.1876C101.693 12.0053 101.631 11.8139 101.488 11.6919L97.4024 8.19189C97.0646 7.90256 97.2444 7.3493 97.6877 7.31376L103.051 6.88383C103.237 6.86885 103.4 6.75056 103.472 6.57744L105.538 1.60996Z" fill="#F2F4F7" />
                                        <g clip-path="url(#clip9_4100_49327)">
                                            <path d="M105.538 1.60996C105.709 1.19932 106.291 1.19932 106.462 1.60996L108.528 6.57744C108.6 6.75056 108.763 6.86885 108.949 6.88383L114.312 7.31376C114.756 7.3493 114.935 7.90256 114.598 8.19189L110.512 11.6919C110.369 11.8139 110.307 12.0053 110.351 12.1876L111.599 17.4208C111.702 17.8534 111.231 18.1954 110.852 17.9635L106.261 15.1592C106.101 15.0615 105.899 15.0615 105.739 15.1592L101.148 17.9635C100.769 18.1954 100.298 17.8534 100.401 17.4208L101.649 12.1876C101.693 12.0053 101.631 11.8139 101.488 11.6919L97.4024 8.19189C97.0646 7.90256 97.2444 7.3493 97.6877 7.31376L103.051 6.88383C103.237 6.86885 103.4 6.75056 103.472 6.57744L105.538 1.60996Z" fill="#FEC84B" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4100_49327">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_4100_49327">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip2_4100_49327">
                                            <rect width="20" height="20" fill="white" transform="translate(24)" />
                                        </clipPath>
                                        <clipPath id="clip3_4100_49327">
                                            <rect width="20" height="20" fill="white" transform="translate(24)" />
                                        </clipPath>
                                        <clipPath id="clip4_4100_49327">
                                            <rect width="20" height="20" fill="white" transform="translate(48)" />
                                        </clipPath>
                                        <clipPath id="clip5_4100_49327">
                                            <rect width="20" height="20" fill="white" transform="translate(48)" />
                                        </clipPath>
                                        <clipPath id="clip6_4100_49327">
                                            <rect width="20" height="20" fill="white" transform="translate(72)" />
                                        </clipPath>
                                        <clipPath id="clip7_4100_49327">
                                            <rect width="20" height="20" fill="white" transform="translate(72)" />
                                        </clipPath>
                                        <clipPath id="clip8_4100_49327">
                                            <rect width="20" height="20" fill="white" transform="translate(96)" />
                                        </clipPath>
                                        <clipPath id="clip9_4100_49327">
                                            <rect width="20" height="20" fill="white" transform="translate(96)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <h2 className="text-5xl font-raleway mt-8 leading-tight">
                                    Wokpa has saved us thousands of hours of <br />work. We’re able to spin up projects and features <br /> faster.
                                </h2>
                                <div className="mt-12">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-lg font-semibold">Alisa Hester</div>
                                            <div className="mt-1 text-[#D0D5DD]">
                                                Podcaster, ABR
                                            </div>
                                        </div>
                                        <div>
                                            <svg width="144" height="56" viewBox="0 0 144 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_b_4100_49353)">
                                                    <rect width="56" height="56" rx="28" fill="white" fill-opacity="0.9" />
                                                    <path d="M35 28H21M21 28L28 35M21 28L28 21" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#EAECF0" />
                                                </g>
                                                <g filter="url(#filter1_b_4100_49353)">
                                                    <rect x="88" width="56" height="56" rx="28" fill="white" fill-opacity="0.9" />
                                                    <path d="M109 28H123M123 28L116 21M123 28L116 35" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <rect x="88.5" y="0.5" width="55" height="55" rx="27.5" stroke="#EAECF0" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_b_4100_49353" x="-8" y="-8" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4100_49353" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4100_49353" result="shape" />
                                                    </filter>
                                                    <filter id="filter1_b_4100_49353" x="80" y="-8" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4100_49353" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4100_49353" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-6/12">
                            <img src={getImage("alister.png")} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features;