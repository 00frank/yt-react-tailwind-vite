import { HomeIcon, ShortsIcon, SubscriptionsIcon, YTMusicIcon } from "@components/Icons"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import UserQuickAccess from "./auth/UserQuickAccess"
import UserSubscriptions from "./auth/UserSubscriptions"
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="bg-zinc-900 fixed hidden md:flex flex-col inset-y-0 w-72 h-screen overflow-hidden">
      <div className="flex pl-3 pt-3 min-h-16">
        <Hamburger />
        <Logo />
      </div>
      <div className="sidebar h-full overflow-y-scroll">
        <div className="text-white px-3 py-3">
          <div className="bg-slate-100/10 text-lg font-medium flex py-3 pl-4 rounded-md">
            <HomeIcon />
            <span className="pl-5">Principal</span>
          </div>
          <div className="text-lg font-medium flex py-3 pl-4 rounded-md">
            <ShortsIcon />
            <span className="pl-5">Shorts</span>
          </div>
          <div className="text-lg font-medium flex py-3 pl-4 rounded-md">
            <SubscriptionsIcon />
            <span className="pl-5">Suscripciones</span>
          </div>
          <div className="text-lg font-medium flex py-3 pl-4 rounded-md">
            <YTMusicIcon />
            <span className="pl-5">YouTube Music</span>
          </div>
        </div>
        <UserQuickAccess />
        <UserSubscriptions />
      </div>
    </div>
  )
}

export default Sidebar