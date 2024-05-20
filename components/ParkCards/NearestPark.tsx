import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function NearestPark() {
        const images = [
          'https://wallpapercave.com/wp/wp11440150.jpg',
          'https://wallpapercave.com/wp/wp5210402.jpg',
          'https://wallpapercave.com/uwp/uwp4215524.jpeg',
          'https://wallpapercave.com/wp/wp8366025.jpg',
          'https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://getwallpapers.com/wallpaper/full/8/4/4/859240-vertical-wildlife-desktop-backgrounds-1920x1200-photo.jpg',
          'https://th.bing.com/th/id/OIP.3YD6BYo7QXfw5Y5d_79tGwHaFj?rs=1&pid=ImgDetMain',
          'https://wallpaperaccess.com/full/156340.jpg',

        ];
  return (
    <Card>
      <h2 className=" text-[21px] font-semibold py-2">Parks near me</h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((i, index) => (
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/5">
              <div className="">
                <Card className="m-0. p-0">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Image
                      src={i}
                      width={300}
                      height={300}
                      alt="Park Image"
                      className=" w-full h-full object-cover object-center cursor-pointer"
                    />
                  </CardContent>
                <p>Kaziranga Narional Park</p>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="  left-0 bg-transparent border-[0px] h-full w-16 hover:border-[2px] hover:bg-transparent border-white" />
        <CarouselNext className="right-0 bg-transparent border-[0px] h-full w-16 hover:border-[2px] hover:bg-transparent border-white" />
      </Carousel>
    </Card>
  );
}
