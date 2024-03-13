import loadingVideoImage from "@assets/videoloading.webp";

const LoadingVideos = ({ amount }: { amount: number }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-y-12 md:gap-6 md:px-10 pb-20">
      {Array.from({ length: amount }).map((_, i) => (
        <div className="video-mockup flex flex-col max-[1908px]:justify-self-center" key={i}>
          <div className="video-mockup_image relative md:max-w-[418px] rounded-lg">
            <img
              className="w-full rounded-lg"
              src={loadingVideoImage}
              alt="loading video" />
          </div>
          <div className="video-mockup_info flex flex-row">
            <div className="video-mockup_user-image bg-[#252525] w-12 h-12 rounded-full mt-4" />
            <div className="video-mockup_data-container mt-4 ml-4 w-5/6">
              <div className="video-mockup_title bg-[#252525] w-5/6 h-6 mb-3" />
              <div className="video-mockup_description bg-[#252525] w-3/6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingVideos