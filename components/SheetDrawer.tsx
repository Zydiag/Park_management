import React, { ReactNode } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IoCloseSharp } from 'react-icons/io5';
import { Button } from './ui/button';
type MyComponentProps = {
  children: React.ReactNode;
  trigger: React.ReactNode
};
const SheetDrawer: React.FC<MyComponentProps> = ({children, trigger}) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{trigger}</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>IITR Travels</SheetTitle>
            <SheetDescription>
              Make your travel journey easy with IITR Travels
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          {children}
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit"><IoCloseSharp className='w-8 h-8'/>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetDrawer;
