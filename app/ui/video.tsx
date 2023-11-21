'use client'
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { CardSkeleton } from "./skeletons"
import { Channels } from "../lib/definitions";

interface VideoProps{
    currentChannel: Channels | null;
}

const Rtv = ({currentChannel}:VideoProps) => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        isClient ? (
            <ReactPlayer
                url={currentChannel?.url}
                controls
                height="100%"
                width="auto"
                playing
            />
        ) : <CardSkeleton />
    )
}

export default Rtv;
