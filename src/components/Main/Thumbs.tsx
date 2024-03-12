const Thumbs = () => {
  const thumbs = ["Todos", "Videojuegos", "Hollow Knight", "Música", "Listas de reproducción", "Chill out", "Telenovelas", "Rock", "Comedias", "En tiempo real", "Subidos recientemente", "Novedad para ti", "Jazz", "Lofi"]

  return (
    <div className="hidden md:flex overflow-clip pt-2 ml-10 mb-6">
      <div className="bg-white grow shrink-0 m-3 ml-0 mt-0 h-9 text-lg font-semibold py-1 px-4 rounded-lg">
        {thumbs[0]}
      </div>
      {thumbs.slice(1).map((thumb, i) => (
        <div className="bg-zinc-800 grow shrink-0 m-3 ml-0 mt-0 h-9 text-white text-lg font-semibold py-1 px-4 rounded-lg" key={i}>
          {thumb}
        </div>
      ))}
      <div className="absolute flex right-0 text-white">
        <div className="bg-gradient-to-l from-zinc-900 w-20 h-9"></div>
        <div className="bg-zinc-900 w-24 flex justify-end pr-8">
          <div className="flex items-center justify-center select-none w-10 h-10 rounded-full hover:bg-zinc-800 text-2xl">
            {">"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thumbs