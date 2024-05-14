"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

import { BsThreeDotsVertical } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

import { useRef, useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import useOutsideClick from "@/hooks/useOutsideClick";

function Header() {

  const [isToggledNav, setIsToggledNav] = useState(false);
  const handleClickNav = () => {
    setIsToggledNav(!isToggledNav);
  };
  const navRef = useRef();
  useOutsideClick(navRef, "navId", () => setIsToggledNav(!isToggledNav));
  return (
    <header className="relative z-30">
      <div className="w-full relative mx-auto">
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <button
                type="button"
                id="navId"
                onClick={handleClickNav}
                className="lg:hidden inline-flex items-center justify-center relative"
              >
                <GiHamburgerMenu className="w-7 h-7 mx-4" />
              </button>
              <h3 className=" text-xl">
                Welcome Back, <bdi className="text-2xl font-bold">Sally!</bdi>
              </h3>
            </div>
            <div className="flex gap-5">
              <div className="lg:flex hidden items-center gap-5">
                <form action="#" className="flex-grow">
                  <div className="flex items-center text-[#9EA0A2]  relative">
                    <input
                      type="text"
                      className="form-input pl-8 bg-[#232C2C] text-[#9EA0A2] !ring-0 !ring-offset-0 h-10  !border-0 rounded-xl text-foreground"
                      placeholder="search"
                    />
                    <span className="absolute left-2 ">
                      <FiSearch />
                    </span>
                    <span className="absolute right-2 ">
                      <BsSliders />
                    </span>
                  </div>
                </form>
              </div>
              <div className="flex items-center md:gap-2 gap-3">
                <div className="inline-flex items-center justify-center relative w-7 h-7 rounded-full text-foreground">
                  <IoIosNotificationsOutline className="h-7 w-7 text-white" />
                  <span className="absolute top-1 right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary"></span>
                    <span className="relative inline-flex items-center justify-center rounded-full h-2 w-2 bg-primary text-primary-foreground font-bold text-xs"></span>
                  </span>
                </div>
                <div className="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden">
                  <Image
                    src={`/images/avatars/01.jpeg`}
                    className="w-full h-full object-cover"
                    width="54"
                    height="54"
                    alt="..."
                  />
                </div>
                <BsThreeDotsVertical className="text-white h-9" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isToggledNav && (
        <div >
          <div
          ref={navRef}
            className="fixed inset-y-0 pt-4 left-0 xs:w-80 w-72 bg-[#414a4a] rounded-r-2xl  transition-transform z-50"
          >
            <div className="flex items-center justify-end gap-x-4 absolute right-0 top-0 bg-[#414a4a] p-4 z-10">
              <button
                onClick={handleClickNav}
                className="text-white focus:outline-none hover:text-red-500"
              >
              <IoIosClose className="w-7 h-7"/>
              </button>
            </div>
         <Sidebar/>
          </div>
          <div className="fixed inset-0 h-screen bg-[#182122]/70 cursor-pointer transition-all duration-1000 z-40"></div>
        </div>
      )}
    </header>
  );
}
export default Header;
