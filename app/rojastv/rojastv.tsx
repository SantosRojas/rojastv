'use client'
import { useEffect, useState } from "react"
import { Channels } from "../lib/definitions"
import { useSearchParams } from "next/navigation"
import Rtv from "../ui/video"
import MyCarousel from "../ui/carousel"
interface RojasTvProps {
    channels: Channels[]
}
export default function RojasTv({ channels }: RojasTvProps) {
    const [channelsFiltered, setChannelsFiltered] = useState<Channels[]>([])
    const [currentChannel, setCurrentChannel] = useState<Channels | null>(channels[0])
    const params = useSearchParams()
    const category = params.get("category") || "nacionales"

    useEffect(() => {
        const channelsFiltrados = channels.filter(channel => channel.category === category);
        setChannelsFiltered(channelsFiltrados);
    }, [category,channels]);

    return (
        <main className="flex md:h-screen flex-col p-2 justify-between gap-2">
            <div className="h-5/6 flex justify-center rounded-md overflow-hidden">
                <Rtv currentChannel={currentChannel} />
            </div>
            <div className='h-1/6 w-full box-border'>
                <MyCarousel channelsFiltered={channelsFiltered} currentChannel={currentChannel} setCurrentChannel={setCurrentChannel} />
            </div>
        </main>
    );
}
