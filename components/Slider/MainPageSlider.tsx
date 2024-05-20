"use client"
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function MainPageSlider() {
    const images = [
      'https://wallpapercave.com/wp/wp11440150.jpg',
      'https://wallpapercave.com/wp/wp5210402.jpg',
      'https://wallpapercave.com/uwp/uwp4215524.jpeg',
      'https://wallpapercave.com/wp/wp8366025.jpg',
      'https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ];
        
    
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((i, index) => (
          <CarouselItem key={index}>
            <div className="">
              <img
                src={i}
                alt="Park Image"
                className=" w-screen h-[300px] md:h-[450px] object-cover object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="  left-0 bg-transparent border-[0px] h-full w-16 hover:border-[2px] hover:bg-transparent border-white" />
      <CarouselNext className="right-0 bg-transparent border-[0px] h-full w-16 hover:border-[2px] hover:bg-transparent border-white" />
    </Carousel>
  );
}
