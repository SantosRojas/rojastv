'use client'
import React, { useState } from "react";
import { Channels } from "../lib/definitions"
import Image from "next/image"
import {ChannelSkeleton } from "./skeletons"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";

interface CarouselProps {
  channelsFiltered: Channels[];
  currentChannel: Channels | null,
  setCurrentChannel: (channel: Channels) => void
}

const MyCarousel = ({ channelsFiltered, currentChannel, setCurrentChannel }: CarouselProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // Configura las opciones del carrusel
  const responsive = {
    desktopLarge: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8, // Número de elementos visibles en el escritorio
      partialVisibilityGutter: 50, // Espacio entre los elementos
    },
    desktop: {
      breakpoint: { max: 1400, min: 700 },
      items: 6, // Número de elementos visibles en el escritorio
      partialVisibilityGutter: 40, // Espacio entre los elementos
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 5, // Número de elementos visibles en tablet
      partialVisibilityGutter: 30, // Espacio entre los elementos
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2, // Número de elementos visibles en móvil
      partialVisibilityGutter: 20, // Espacio entre los elementos
    }
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  }

  return (
    <Carousel responsive={responsive}>
      {channelsFiltered.map((channel, index) => (
        <div key={index}
          className="flex justify-center items-center mx-2 bg-violet-600 h-[14vh] rounded-md cursor-pointer px-1 box-border overflow-hidden"
          onClick={(e) => setCurrentChannel(channel)}>
            {!isLoaded && <ChannelSkeleton/>}
          <div className="h-full w-full relative bg-transparent">
            <Image
              src={channel.url_image}
              fill
              quality={80}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 18vw, 20vw"
              style={{ objectFit: "contain" }}
              alt={channel.name}
              onLoad={handleImageLoad}
            />
            {channel === currentChannel && (
              <div className="absolute top-1 left-1 w-12 h-12 p-2 rounded-full bg-violet-200">
                <SpeakerWaveIcon />
              </div>
            )}
          </div>
        </div>
      ))}
    </Carousel>

  );
};


export default MyCarousel;