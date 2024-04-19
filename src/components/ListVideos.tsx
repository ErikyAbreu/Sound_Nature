'use client'

import { useVideo } from "@/context/VideoContext"

export function ListVideos(){
    const{list, handleVideo} = useVideo()
    return(
        <ul className="flex flex-col gap-4">
                {list.map((video, index) => (
                    <li onClick={() => {handleVideo(video)}} key={index} className="h-42 cursor-pointer">
                        
                        <img src={video.imageURL} alt={video.description} className="w-80 h-40 rounded-lg"/>

                        {video.description}
                    </li>
                ))}
        </ul>
    )
}