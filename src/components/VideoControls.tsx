'use client'
import { useVideo } from '@/context/VideoContext'
import { convertNumberToTime } from '@/utils/convertNumberToTime'
import { Pause, Play } from 'lucide-react'
import { AudioContainer } from './AudioContainer'
import { ProgressBar } from './ProgressBar'

export function VideoControls() {
  const { totalTime, isPlaying, togglePlay, toggleExpanded } = useVideo()

  return (
    <div className="flex items-center gap-4 w-full h-12 bg-black-600 mb-4">
      <button onClick={togglePlay}>{isPlaying ? <Pause /> : <Play />}</button>
      <AudioContainer />
      <ProgressBar />
      <span>{convertNumberToTime(totalTime)}</span>
    </div>
  )
}
