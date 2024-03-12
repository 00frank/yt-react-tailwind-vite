import { useContext } from "react"
import { toast } from "sonner";
import axios from "axios";
import Cookies from "js-cookie";

import { UserContext } from "@context/user"
import { UnauthenticatedUserIcon } from "@components/Icons"
import { LoggedUserType } from "@types";

const Login = () => {
  const updateUser = useContext(UserContext).updateUser;

  const handleClick = async () => {
    try {
      const email = prompt('Introduzca su email');
      if (!email) return;
      const password = prompt('Introduzca la contraseña');

      const { data: user } = await axios.post<LoggedUserType>(import.meta.env.VITE_API_URL + '/auth/login', { email, password });
      updateUser({ name: user.username, email: user.email, jwt: user.jwt, avatar: user.avatar });
      if (!!user.jwt)
        Cookies.set('token', user.jwt);
    } catch (error: any) {
      console.log('error: ', error);
      if (error.code === "ERR_NETWORK")
        return toast.error('El servicio de autenticación no esta disponible');

      if (!!error.response && error.response.data)
        return toast.error(error.response?.data.message);
    }
  }

  return (
    <div className="flex justify-end basis-1/4 pt-3 pr-9">
      <button
        onClick={handleClick}
        className="border-zinc-700 hover:bg-[#263850] border rounded-3xl flex flex-row justify-center items-center px-4 h-12">
        <UnauthenticatedUserIcon className="mr-3 w-7 h-7" />
        <span className="text-[#3ea6ff] font-semibold text-lg">Acceder</span>
      </button>
    </div>
  )
}

export default Login