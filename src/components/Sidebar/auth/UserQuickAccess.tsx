import { useContext } from "react"
import { DownloadsIcon, HistoryIcon, ShowMoreIcon, WatchLaterIcon, YourChannelIcon, YourVideosIcon } from "@components/Icons"
import { UserContext } from "@context/user"

const UserQuickAccess = () => {
  const user = useContext(UserContext).user;
  if (!user) return null;

  return (
    <div className="px-3 pb-3 text-white">
      <div className="border-t border-white/30 pb-3" />
      <div className="text-lg font-semibold flex py-3 pl-4 rounded-md">
        Tú <span className="pl-3">{">"}</span>
      </div>
      <div className="text-lg font-medium flex py-3 pl-4 rounded-md">
        <YourChannelIcon />
        <span className="pl-5">Tu canal</span>
      </div>
      <div className="text-lg font-medium flex py-3 pl-4 rounded-md">
        <HistoryIcon />
        <span className="pl-5">Historial</span>
      </div>
      <div className="text-lg font-medium flex py-3 pl-4 rounded-md">
        <YourVideosIcon />
        <span className="pl-5">Tus videos</span>
      </div>
      <div className="text-lg font-medium flex py-3 pl-4 rounded-md">
        <WatchLaterIcon />
        <span className="pl-5">Ver más tarde</span>
      </div>
      <div className="text-lg font-medium flex py-3 pl-4 rounded-md">
        <DownloadsIcon />
        <span className="pl-5">Descargas</span>
      </div>
      <div className="text-lg font-medium flex py-3 pl-4 rounded-md">
        <ShowMoreIcon />
        <span className="pl-5">Mostrar más</span>
      </div>
    </div>
  )
}

export default UserQuickAccess