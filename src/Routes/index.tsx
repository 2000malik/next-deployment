import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar"
import UnauthApp, { AuthApp, loadingBarRef } from "../App"
import LoginPage from "../Pages/Auth/Login"
import Home from "../Pages/Home"
import UserDashboard from "../Pages/User/Dashboard"
import SignUpPage from "../Pages/Auth/Signup"
import { OnboardingOne, OnboardingTwo } from "../Pages/Auth/Onboarding"
import PricingPlans from "../Pages/Auth/Pricing"
import PaymentPage, { PaymentPageSolo } from "../Pages/Auth/Payment"
import ForgotPassword from "../Pages/Auth/ForgotPassword"
import EpisodesPage from "../Pages/User/Podcast/Episodes"
import EpisodeViewPage from "../Pages/User/Podcast/EpisodeView"
import DistributionPage from "../Pages/User/Podcast/Distruibution"
import SocialSharingPage from "../Pages/User/Podcast/SocialSharing"
import CreatePodcastPage from "../Pages/User/Podcast/CreatePodcast"
import WalletPage from "../Pages/User/Monitize/WalletPage"
import PaymentHistoryPage from "../Pages/User/Monitize/PaymentHistory"
import WokpaAdsPage from "../Pages/User/Monitize/WokpaAds"
import CampaignPage from "../Pages/User/Monitize/Campaign"
import PodcastSettingsPage from "../Pages/User/Serttings/PodcastSettings"
import WebsitePageSettings from "../Pages/User/Serttings/WebsitePageSettings"
import CollaboratorsPage from "../Pages/User/Serttings/Collaborators"
import RssSettingsPage from "../Pages/User/Serttings/RssSettings"
import RadioStations from "../Pages/RadioStations"
import ReligiousGroup from "../Pages/ReligiousGroup"
import MediaOrganizations from "../Pages/MediaOrganizations"
import IndiePodcaster from "../Pages/IndiePodcaster"
import Features from "../Pages/Features"
import Listen from "../Pages/Listen"
import Company from "../Pages/Company"


const router = createBrowserRouter([
    {
        path: "",
        element: <UnauthApp />,
        errorElement: <></>,
        children: [
            {
                path: "/",
                index: true,
                 element: <Home />,
            },
            {
                path: "/radio-stations",
                element: <RadioStations />
            },
            {
                path: "/religious-groups",
                element: <ReligiousGroup />
            },
            {
                path: "/media-organizations",
                element: <MediaOrganizations />
            },
            {
                path: "/indie-podcaster",
                element: <IndiePodcaster />
            },
            {
                path: "/features",
                element: <Features />
            },
            {
                path: "/listen",
                element: <Listen />
            },
            {
                path: "/company",
                element: <Company />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/onboarding/1",
                element: <OnboardingOne />
            },
            {
                path: "/onboarding/2",
                element: <OnboardingTwo />
            },
            {
                path: "/pricing-plans",
                element: <PricingPlans />
            },
            {
                path: "/pricing",
                element: <PricingPlans />
            },
            {
                path: "/payment",
                element: <PaymentPage />
            },
            {
                path: "/payment/solo",
                element: <PaymentPageSolo />
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />
            },
        ],
    },
    {
        path: "",
        element: <AuthApp />,
        errorElement: <>Errors</>,
        children: [
            {
                path: "/dashboard",
                element: <UserDashboard />
            },
            {
                path: "/episodes",
                element: <EpisodesPage />
            },
            {
                path: "/episodes/:episodeId",

                element: <EpisodeViewPage />
            },
            {
                path: "/distribution",
                element: <DistributionPage />
            },
            {
                path: "/social-distribution",
                element: <SocialSharingPage />
            },
            {
                path: "/create-podcast",
                element: <CreatePodcastPage />
            },
            {
                path: "/wallet",
                element: <WalletPage />
            },
            {
                path: "/payment-history",
                element: <PaymentHistoryPage />
            },
            {
                path: "/wokpa-ads",
                index: true,
                element: <WokpaAdsPage />
            },
            {
                path: "/campaign",
                element: <CampaignPage />
            },
            {
                path: "/podcast-settings",
                element: <PodcastSettingsPage />
            },
            {
                path: "/website-page-settings",
                element: <WebsitePageSettings />
            },
            {
                path: "/collaborators",
                element: <CollaboratorsPage />
            },
            {
                path: "/rss-settings",
                element: <RssSettingsPage />
            },
        ]
    }
])

export const AppRoutes = () => {
    return (
        <>
            <LoadingBar color='#004F32' ref={loadingBarRef as React.RefObject<LoadingBarRef>} height={5} />
            <ToastContainer position='top-right' hideProgressBar />
            <RouterProvider
                router={router}
            />
        </>

    )
}