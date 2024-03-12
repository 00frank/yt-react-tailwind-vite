const LoadingVideos = ({ amount }: { amount: number }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 pl-10">
      {Array.from({ length: amount }).map((_, i) => (
        <div className="video-mockup" key={i}>
          <div className="video-mockup_image bg-[#252525] w-[480px] h-[270px] rounded-lg" />
          <div className="video-mockup_info flex flex-row">
            <div className="video-mockup_user-image bg-[#252525] w-12 h-12 rounded-full mt-4" />
            <div className="video-mockup_data-container mt-4 ml-4 w-[340px]">
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