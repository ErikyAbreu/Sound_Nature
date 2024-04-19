'use client'

import { useVideo } from '@/context/VideoContext'
import { VideoControls } from './VideoControls'

export function VideoPlayer() {
  const { selectedVideo, updateTime, isExpanded } = useVideo()

  return (
    <div className="flex flex-col flex-1 justify-center">
      
      <video
        id="video"
        className="w-full"
        src={selectedVideo?.videoURL}
        hidden
        onTimeUpdate={updateTime}
      />
      
      <canvas
        data-expand={isExpanded ? 'true' : 'false'}
        id="canvas"
        className="flex w-full h-full rounded-lg data-[expand=true]:w-screen data-[expand=true]:h-screen data-[expand=true]:z-50 data-[expand=true]:absolute top-0 left-0"
      />
      <VideoControls />
      <h1 className='text-lg text-wrap w-full font-bold mb-4'> {selectedVideo?.description}</h1>
      <section className='flex gap-2 items-center '>
        <img src={selectedVideo?.imageProfile} className='h-12 w-12 rounded-full'/> 
        <h1> {selectedVideo?.profile}</h1>
       </section>  
    </div>
  )
}
