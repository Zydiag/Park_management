import React from 'react'

const NavbarItem = ({name, Icon}:{name:string, Icon:any}) => {
  return (
    <div className="flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}

export default NavbarItem
