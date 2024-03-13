import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@utils";

import Video from "@components/Main/Video";
import LoadingVideos from "@components/Main/LoadingVideos";
import ErrorComponent from "@components/Main/ErrorComponent";

import { VideoType } from "@types";
import { socket } from "@socket";

const VideosContainer = () => {
  const [socketVideos, setSocketVideos] = useState<VideoType[]>([]);
  const { data: videos, isLoading, error } = useSWR<VideoType[]>(import.meta.env.VITE_API_URL + "/videos", fetcher, { revalidateOnFocus: false, errorRetryCount: 0 });

  const handleVideoCreatedFromServer = useCallback((newVideo: VideoType) => {
    setSocketVideos((prev: VideoType[]) => [newVideo, ...prev]);
  }, [])

  useEffect(() => {
    socket.on('video.created', handleVideoCreatedFromServer);
    return () => {
      socket.off('video.created', handleVideoCreatedFromServer);
    }
  }, [])

  if (error) return <ErrorComponent error={error} />

  return (
    <>
      {isLoading && <LoadingVideos amount={12} />}
      {!!videos && (
        <section className="grid grid-cols-1 xl:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-y-12 md:gap-6 md:px-10 pb-20">
          {videos.map((video, i) => (
            <Video key={i} data={video} />
          ))}
          {socketVideos.map((video, i) => (
            <Video key={i} data={video} />
          ))}
        </section>
      )}
    </>
  )
}

export default VideosContainer