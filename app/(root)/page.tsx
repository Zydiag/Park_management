import NearestPark from '@/components/ParkCards/NearestPark';
import ParkSearch from '@/components/ParkCards/ParkSearch';
import TrendingParks from '@/components/ParkCards/TrendingParks';
import MainPageSlider from '@/components/Slider/MainPageSlider';
import Spacer from '@/components/Spacer';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="relative">
        <MainPageSlider />
        <Spacer />
        <div className=" -bottom-[18rem] left-3 md:px-4">
          {/* <div className="flex gap-px justify-between">
            <ParkSearch />
            <ParkSearch />
          </div> */}
          <NearestPark />
          <Spacer />
          <TrendingParks />
          <Spacer />
        </div>
      </div>
    </div>
  );
};

export default page;
