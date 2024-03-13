import { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { UserContext } from "@context/user";
import { LoggedUserType } from "@types";
import { socket } from "@socket";
import Logo from "@components/Sidebar/Logo";

import UserSection from "./auth/UserSection"
import Searchbar from "./Searchbar"
import Login from "./auth/Login"
import { BellIcon, ChromeCastIcon, SearchIcon } from "@components/Icons";

const Header = () => {
  const { user, updateUser } = useContext(UserContext);

  const connectToServer = useCallback((user: LoggedUserType) => {
    if (!user) return;
    socket.connect();
    socket.emit('user.loggedin', user);
  }, [user])

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const tryAutoLogin = async () => {
      try {
        const token = Cookies.get('token');
        if (!user || !token) {
          if (!token) return null;
          const { data: loadedUser } = await axios.get(import.meta.env.VITE_API_URL + '/auth/profile', { headers: { Authorization: `Bearer ${token}` }, signal });
          updateUser({ jwt: token, ...loadedUser });
        }
      } catch (error) {
        console.log("no auth loaded");
      }
    }
    tryAutoLogin();

    return () => {
      controller.abort();
    }
  }, [user])

  useEffect(() => {
    if (!!user) {
      connectToServer(user);
    }
    return () => {
      if (!!user) {
        socket.disconnect();
      }
    }
  }, [user])

  return (
    <>
      <div className="bg-zinc-900 text-white hidden md:flex w-full h-20 overflow-hidden outline-none">
        <div className="basis-1/4" />
        <Searchbar />
        {!user && <Login />}
        {!!user && <UserSection />}
      </div>
      <div className="bg-zinc-900 text-white h-16 flex md:hidden pl-1">
        <Logo includeCountry={false} />
        <div className="w-full h-14 flex flex-row justify-end items-center">
          <ChromeCastIcon className="ml-6" size="24" />
          <BellIcon className="ml-6" size="24" />
          <SearchIcon className="ml-6 mr-4" size="24" />
        </div>
      </div>
    </>
  )
}

export default Header