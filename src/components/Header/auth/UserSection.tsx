import { useContext } from "react"
import { UserContext } from "@context/user"

import { BellIcon, CameraIcon } from "@components/Icons"
import { User6Icon } from "@components/Icons/Users";

const UserSection = () => {
  const user = useContext(UserContext).user;
  return (
    <div className="flex justify-end basis-1/4 pt-3 pr-10">
      <button className="hover:bg-zinc-800 flex justify-center items-center ml-4 h-12 w-12 rounded-full">
        <CameraIcon />
      </button>
      <button className="hover:bg-zinc-800 flex justify-center items-center ml-4 h-12 w-12 rounded-full">
        <BellIcon />
      </button>
      <button className="flex justify-center items-center ml-4 h-12 w-12 rounded-full">
        {user.avatar && <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full" />}
        {!user.avatar && <User6Icon />}
      </button>
    </div>
  )
}

export default UserSection