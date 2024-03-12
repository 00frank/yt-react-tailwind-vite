import { useState } from "react"
import useSWR from "swr/immutable";

import { fetcher } from "@utils";
import { OfflineIcon } from "@components/Icons"

const ErrorComponent = ({ error }: { error: any }) => {
  const [isRetrying, setIsRetrying] = useState(false);
  const { mutate } = useSWR(import.meta.env.VITE_API_URL + "/videos", fetcher);

  const handleReload = async () => {
    setIsRetrying(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await mutate();
    setIsRetrying(false);
  }

  if (error.code === "ERR_NETWORK")
    return (
      <div className="w-full h-96 pt-16">
        <div className="w-full h-48">
          <OfflineIcon />
        </div>
        <div className="flex flex-col items-center mt-3">
          <p className="text-white text-3xl">Conéctate a Internet</p>
          <p className="text-white text-lg mt-3">No estás conectado. Revisa tu conexión.</p>
          <button className="border-zinc-700 hover:bg-[#263850] border rounded-3xl px-4 h-12 mt-5" onClick={handleReload}>
            <span className="text-[#3ea6ff] font-semibold text-lg">
              {isRetrying && isRetrying ? "Recargando..." : "Reintentar"}
            </span>
          </button>
        </div>
      </div>
    )

  return (
    <></>
  )
}

export default ErrorComponent