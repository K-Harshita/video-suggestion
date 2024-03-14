import React, { useEffect, useRef, useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ videoUrl }) => {
  const [videoId, setVideoId] = useState("")
  const playerRef = useRef(null)
  console.log(videoUrl, "videoUrl")

  useEffect(() => {
    setVideoId(getYouTubeIdFromURL(videoUrl))
  }, [videoUrl])

  const getYouTubeIdFromURL = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url?.match(regExp)

    if (match && match[2].length === 11) {
      return match[2]
    } else {
      console.error("Invalid YouTube URL")
      return null
    }
  }

  const onReady = (event) => {
    // Access the player object here
    playerRef.current = event.target
  }

  const onPause = (event) => {
    // Handle pause event here
    const currentTime = playerRef.current.getCurrentTime()
    console.log("Paused at:", currentTime)
  }

  const opts = {
    height: "150",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} onPause={onPause} />
    </div>
  )
}

export default VideoPlayer
