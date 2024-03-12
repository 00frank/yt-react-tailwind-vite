import { MicrophoneIcon, SearchIcon } from "@components/Icons"

const Searchbar = () => {
  return (
    <div className="flex basis-2/4 pl-20 pt-3">
      <div className="h-12 w-[668px] flex overflow-hidden border border-zinc-700 focus-within:border-sky-800 rounded-[40px] rounded-e-none">
        <input
          className="bg-zinc-900 w-full text-white pl-4"
          type="text"
          spellCheck="false"
          name="searchbar"
          placeholder="Buscar"
          id="searchbar" />
      </div>
      <button className="bg-zinc-800 border-zinc-700 flex justify-center items-center w-[74px] h-12 border border-s-0 px-4 rounded rounded-s-none rounded-e-3xl">
        <SearchIcon />
      </button>
      <button className="bg-zinc-800 flex justify-center items-center ml-4 h-12 w-12 rounded-full">
        <MicrophoneIcon />
      </button>
    </div>
  )
}

export default Searchbar