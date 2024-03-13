import NoImageVideo from "@assets/noimage.webp";

import { VideoType } from "@types";

const getVideoCreationDateString = (_data?: VideoType) => {
  const number = 1;
  const unit = ' año';
  return 'hace ' + number + unit;
}

const getVideoDurationString = (_data?: VideoType) => {
  let aux = Math.floor(Math.random() * 59) + 1;

  const min = aux < 10 ? '0' + aux : aux.toString();
  aux = Math.floor(Math.random() * 59) + 1;
  const sec = aux < 10 ? '0' + aux : aux.toString();

  return min + ':' + sec;
}

const getVideoViewsString = (_data?: VideoType) => {
  const number = Math.floor(Math.random() * 1000) + 1;
  const unit = 'K visualizaciones';
  return number + unit;
}

const Video = ({ data }: { data: VideoType }) => {
  return (
    <div className="video flex flex-col max-[1908px]:justify-self-center">
      <div className="video_image relative md:max-w-[418px] md:min-h-[207px] rounded-lg">
        <img
          className="w-full rounded-lg"
          src={!!data.src ? data.src : NoImageVideo}
          alt={data.name} />
        <div className="absolute px-1 bottom-2 right-2 rounded-md bg-[#252525]/80 md:bg-black text-white">{getVideoDurationString()}</div>
      </div>
      <div className="video_info flex flex-row">
        <div className="video_user-image bg-[#252525] w-12 h-12 rounded-full mt-4">
          <img
            className="w-12 h-12 rounded-full"
            src={data.author.avatar}
            alt='author image' />
        </div>
        <div className="video_data-container mt-4 ml-4 w-5/6">
          <div className="video_title text-lg text-white font-semibold min-h-6 leading-[2.2rem]">
            {data.name}
          </div>
          <div className="video_description text-white">
            <p className="text-[#aaa]">{data.author.username}</p>
            <p className="text-[#aaa]">{getVideoViewsString()} • {getVideoCreationDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video