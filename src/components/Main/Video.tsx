import useSWR from "swr";
import { fetcher } from "@utils";
import image from "../../assets/0.png";

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

const Video = ({ data }: { data: VideoType }) => {
  // let { data: authorData, isLoading } = useSWR(import.meta.env.VITE_USERS_API_URL, fetcher, { revalidateOnFocus: false })
  // const author = !!authorData && authorData.results[0];
  const author = { ...data.author, picture: { thumbnail: "" } }
  const isLoading = false;

  return (
    <div className="video bg-red-600 md:max-w-[480px] md:max-h-[270px] w-full flex flex-col max-[1908px]:justify-self-center">
      <div className="video_image relative bg-[#252525] md:max-w-[480px] md:max-h-[270px] rounded-lg">
        <img
          className="w-auto h-auto rounded-lg object-cover"
          // src={!!data.src ? 'http://localhost:3002' + data.src.split('public')[1] : 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'}
          src={image}
          alt={data.name} />
        <div className="absolute px-1 bottom-2 right-2 rounded-md bg-[#252525]/80 md:bg-black text-white">{getVideoDurationString()}</div>
      </div>
      <div className="video_info flex flex-row">
        {isLoading && <div className="video-mockup_user-image bg-[#252525] w-12 h-12 rounded-full mt-4" />}
        {!!author && <div className="video_user-image bg-[#252525] w-12 h-12 rounded-full mt-4">
          <img
            className="w-12 h-12 rounded-full"
            src={author?.picture?.thumbnail}
            alt='author image' />
        </div>}
        <div className="video_data-container mt-4 ml-4 w-5/6">
          {isLoading && <div className="video-mockup_title bg-[#252525] w-5/6 h-6 leading-[2.2rem]" />}
          {!!author && (
            <div className="video_title text-lg text-white font-semibold min-h-6 leading-[2.2rem]">
              {data.name}
            </div>
          )}
          <div className="video_description text-white w-4/6 h-6">
            {isLoading && <div className="video-mockup_description bg-[#252525] w-3/6 h-6" />}
            {!!author && (
              <span className="text-[#aaa]">{data.author.username} • {getVideoCreationDateString()}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video