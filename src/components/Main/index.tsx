import Thumbs from "./Thumbs"
import VideosContainer from "./VideosContainer"
import MobileFooter from "./MobileFooter"

const Main = () => {
  return (
    <div className="bg-zinc-900 md:pl-72 w-full">
      <Thumbs />
      <VideosContainer />
      <MobileFooter />
    </div>
  )
}

export default Main