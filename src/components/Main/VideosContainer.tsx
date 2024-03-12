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
  // const { data: videos, isLoading, error } = useSWR<VideoType[]>(import.meta.env.VITE_API_URL + "/videos", fetcher, { revalidateOnFocus: false, errorRetryCount: 0 });
  const isLoading = false;
  const videos: VideoType[] = [
    {
      id: "1",
      description: "mi video",
      name: "mi video 1",
      src: "",
      thumbs: [],
      author: {
        avatar: "", email: "email1@gmail.com", id: "1asd", username: "Pepe"
      }
    },
    {
      id: "2",
      description: "mi video",
      name: "subiendo mi video",
      src: "",
      thumbs: [],
      author: {
        avatar: "", email: "email1@gmail.com", id: "1asd", username: "Pepe"
      }
    },
    {
      id: "3",
      description: "mi video",
      name: "preparando grabaciones",
      src: "",
      thumbs: [],
      author: {
        avatar: "", email: "email1@gmail.com", id: "1asd", username: "Pepe"
      }
    },
    {
      id: "4",
      description: "mi video",
      name: "utilizando conexion de sockets",
      src: "",
      thumbs: [],
      author: {
        avatar: "", email: "email1@gmail.com", id: "1asd", username: "Pepe"
      }
    },
    {
      id: "5",
      description: "mi video",
      name: "utilizando docker para crear un contenedor",
      src: "",
      thumbs: [],
      author: {
        avatar: "", email: "email1@gmail.com", id: "1asd", username: "Pepe"
      }
    },
    {
      id: "1",
      description: "mi video",
      name: "mi video 1",
      src: "",
      thumbs: [],
      author: {
        avatar: "", email: "email1@gmail.com", id: "1asd", username: "Pepe"
      }
    },
    {
      id: "2",
      description: "mi video",
      name: "holaaa amigos",
      src: "",
      thumbs: [],
      author: {
        avatar: "", email: "email1@gmail.com", id: "1asd", username: "Pepe"
      }
    },
    {
      id: "3",
      description: "mi video",
      name: "preparando grabaciones",
      src: "",
      thumbs: [],
      author: {
        avatar: "", email: "email1@gmail.com", id: "1asd", username: "Pepe"
      }
    },
    {
      id: "4",
      description: "mi video",
      name: "utilizando conexion de sockets",
      src: "",
      thumbs: [],
      author: {
        avatar: "", email: "email1@gmail.com", id: "1asd", username: "Pepe"
      }
    },
    {
      id: "5",
      description: "mi video",
      name: "utilizando docker para crear un contenedor",
      src: "",
      thumbs: [],
      author: {
        avatar: "", email: "email1@gmail.com", id: "1asd", username: "Pepe"
      }
    }
  ];

  const handleVideoCreatedFromServer = useCallback((newVideo: VideoType) => {
    setSocketVideos((prev: VideoType[]) => [newVideo, ...prev]);
  }, [])

  useEffect(() => {
    socket.on('video.created', handleVideoCreatedFromServer);
    return () => {
      socket.off('video.created', handleVideoCreatedFromServer);
    }
  }, [])

  // if (error) return <ErrorComponent error={error} />

  return (
    <>
      {isLoading && <LoadingVideos amount={6} />}
      {!!videos && (
        // <section className="grid grid-cols-1 xl:grid-cols-2 min-[1909px]:grid-cols-3 gap-6 md:pl-10 pb-20">
        <section className="flex flex-wrap gap-6 md:pl-10 pb-20">
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