import NearestPark from '@/components/ParkCards/NearestPark';
import ParkSearch from '@/components/ParkCards/ParkSearch';
import MainPageSlider from '@/components/Slider/MainPageSlider';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="relative">
        <MainPageSlider />
        <div className=" -bottom-[18rem] left-3 md:px-4">
          <div className="flex gap-px justify-between">
            <ParkSearch />
            <ParkSearch />
          </div>
          <NearestPark/>
        </div>
      </div>
    </div>
  );
};

export default page;
