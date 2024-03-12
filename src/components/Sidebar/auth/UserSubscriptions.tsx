import { useCallback, useContext, useEffect, useState } from "react";
// import { useSocketIO } from "react-use-websocket";

import { User1Icon, User2Icon, User3Icon, User4Icon, User5Icon, User6Icon } from "@components/Icons/Users"
import { UserContext } from "@context/user";
import { SuscriptionType } from "@types";
import { socket } from "@socket";

import './usersubscriptions.css';

const UserImage = [<User1Icon />, <User2Icon />, <User3Icon />, <User4Icon />, <User5Icon />, <User6Icon />];

const UserSubscriptions = () => {
  const user = useContext(UserContext).user;
  const [suscriptions, setSuscriptions] = useState<SuscriptionType[]>([])

  const handleToggleSuscription = useCallback((id: number) => {
    socket.emit('suscriptions.toggle', { jwt: user.jwt, id });
  }, [user])

  const handleSuscriptionsModifiedFromServer = useCallback((updatedSuscriptions: SuscriptionType[]) => {
    if (!user) return;
    if (!!updatedSuscriptions.length)
      updatedSuscriptions = updatedSuscriptions.sort((a, b) => (a.liked && !b.liked) ? -1 : ((!a.liked && b.liked) ? 1 : 0))
    setSuscriptions(updatedSuscriptions);
  }, [user])

  useEffect(() => {
    socket.on('suscriptions.modified', handleSuscriptionsModifiedFromServer);

    return () => {
      socket.off('suscriptions.modified', handleSuscriptionsModifiedFromServer);
    }
  }, [user])

  if (!user) return null;

  return (
    <div className="px-3 text-white pb-6">
      <div className="border-t border-white/30 pb-3" />
      <div className="text-lg font-semibold flex py-3 pl-4 rounded-md">
        Suscripciones
      </div>
      {suscriptions.map((suscription: SuscriptionType) => (
        <div key={suscription.id} className="user-suscriptions text-lg font-medium flex relative py-3 pl-4 rounded-md">
          {UserImage[suscription.id]}
          <span className="pl-5 truncate max-w-48">{suscription.name}</span>
          <div className="absolute flex justify-center h-auto w-6 right-0 rounded-3xl">
            <span className="cursor-pointer" onClick={() => handleToggleSuscription(suscription.id)}>
              {!suscription.liked ? "🔔" : "🚫"}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserSubscriptions