'use client';
import React, { useState } from 'react';
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiStar,
  HiTv,
} from 'react-icons/hi2';
import { IoReorderThree } from 'react-icons/io5';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import { FaLock } from 'react-icons/fa';
import Image from 'next/image';
import { logoImg } from '../constants';
import NavbarItem from './NavbarItem';
import { Button } from '../ui/button';
import SheetDrawer from '../SheetDrawer';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: 'Home',
      icon: HiHome,
    },
    {
      name: 'About',
      icon: HiMagnifyingGlass,
    },
    {
      name: 'Services',
      icon: HiPlus,
    },
    {
      name: 'DDA Portal',
      icon: HiStar,
    },
  ];
  return (
    <div className="">
      <div className="hidden md:flex justify-between px-8 py-2">
        <div className="flex gap-8 bg-nav-color">
          <div className="flex gap-2">
            <Image src={logoImg} alt="Logo Image" width={40} height={40} />
            <h4 className=" self-center font-bold text-2xl">IITR Travels</h4>
          </div>
          {menu.map((i, index) => {
            return <NavbarItem key={index} name={i.name} Icon={i.icon} />;
          })}
        </div>
        <Button className=" self-center">
          <FaLock className="mr-2 h-4 w-4" /> Login
        </Button>
      </div>
      <div className="flex md:hidden justify-between px-2">
        <div className="flex gap-2">
          <Image src={logoImg} alt="Logo Image" width={60} height={60} />
          <h4 className=" self-center font-bold text-2xl">IITR Travels</h4>
        </div>
        <SheetDrawer
          trigger={
            <IoReorderThree className="mr-2 h-10 w-10 self-center items-center mt-3 cursor-pointer" />
          }
        >
          <div>
            {menu.map((i, index) => {
              return (
                <div className="my-3" key={index}>
                  <NavbarItem key={index} name={i.name} Icon={i.icon} />
                </div>
              );
            })}
            <Button className="my-5 self-center">
              <FaLock className="mr-2 h-4 w-4" /> Login
            </Button>
          </div>
        </SheetDrawer>
      </div>
    </div>
  );
};

export default Navbar;
