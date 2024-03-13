import { HomeIcon, PlusIcon, ShortsIcon, SubscriptionsIcon, UnauthenticatedUserIcon } from "@components/Icons";
import { UserContext } from "@context/user";
import { LoggedUserType } from "@types";
import { useContext } from "react";

const MobileFooter = () => {
  const { user }: { user: LoggedUserType } = useContext(UserContext);
  return (
    <section className="bg-zinc-900 h-16 w-full fixed flex justify-between px-4 pt-1 border-t border-zinc-500 bottom-0 md:hidden">
      <div className="flex flex-col w-[46px] items-center">
        <HomeIcon size="32" />
        <p className="text-xs text-white">
          Principal
        </p>
      </div>
      <div className="flex flex-col w-[46px] items-center">
        <ShortsIcon size="32" />
        <p className="text-xs text-white">
          Shorts
        </p>
      </div>
      <div>
        <PlusIcon size="40" />
      </div>
      <div className="flex flex-col w-[46px] items-center">
        <SubscriptionsIcon size="32" />
        <p className="text-xs text-white">
          Suscripciones
        </p>
      </div>
      <div className="flex flex-col w-[46px] items-center">
        {!!user?.avatar
          ? <img className="w-8 rounded-full" src={user.avatar} alt="user image" />
          : <UnauthenticatedUserIcon fill="#fff" size="32" />}
        <p className="text-xs text-white">
          Tú
        </p>
      </div>

    </section>
  )
}

export default MobileFooter