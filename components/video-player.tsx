"use client"

import { Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  // 这里可以替换为您的实际视频URL
  const videoUrl = "/视频封面.mp4" // 替换为您的视频URL
  const thumbnailUrl = "/视频.jpg" // 替换为您的视频封面图URL

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
      {!isPlaying ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={thumbnailUrl || "/placeholder.svg"} alt="视频封面" fill className="object-cover" />
          <button
            onClick={handlePlay}
            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
          >
            <Play className="h-6 w-6 pl-1" />
            <span className="sr-only">播放视频</span>
          </button>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <video src={videoUrl} controls autoPlay className="h-full w-full" />
        </div>
      )}
    </div>
  )
}

