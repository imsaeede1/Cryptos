"use client";
import { MdOutlineCircle, MdLogout } from "react-icons/md";
import {
  BiChart,
  BiWalletAlt,
  BiMessageDetail,
  BiMessageRoundedDots,
} from "react-icons/bi";
import { IoIosAnalytics } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import {
  MdOutlineSettingsApplications,
  MdOutlineLightMode,
} from "react-icons/md";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {

  const [isChecked, setIsChecked] = useState(true); // Initialize the state with true

  const handleToggleChange = () => {
    setIsChecked((prevState) => !prevState); // Toggle the state when the input is changed
  };
  const pathname = usePathname();
  return (
    <div className="flex lg:h-full h-auto  flex-col  justify-between items-around">
      <div className="flex flex-col space-y-3 rounded-2xl pt-0">
        <ul className="flex flex-col space-y-3 rounded-2xl p-5 pt-2">
          <li>
            <Link
              href="/"
              className={`w-full h-11 inline-flex items-center text-right gap-3  rounded-xl text-white transition-colors pb-6 px-4
            ${
              pathname === "/courses"
                ? "bg-background rounded-xl text-black"
                : " "
            }`}
            >
              <MdOutlineCircle className="text-[#544EF8] w-8 h-8" />

              <span className="font-semibold text-2xl"> Cryptos</span>
            </Link>
          </li>
          <li>
            <Link
              href=""
              className={`w-full h-11 inline-flex items-center text-right gap-3  rounded-xl  px-4  
                          ${
                            pathname === "/"
                              ? "bg-background rounded-xl text-black"
                              : ""
                          }`}
            >
              <BsGridFill className="w-5 h-5" />
              <span className="font-semibold text-sm mt-1">Overview</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`w-full h-11 inline-flex items-center text-right gap-3  rounded-xl text-white transition-colors hover:bg-background hover:text-black px-4
            ${
              pathname === "/courses"
                ? "bg-background rounded-xl text-black"
                : " "
            }`}
            >
              <BiChart className="w-5 h-5" />
              <span className="font-semibold text-sm mt-1"> Trade</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`w-full h-11 inline-flex items-center text-right gap-3  rounded-xl text-white transition-colors hover:bg-background hover:text-black px-4
            ${
              pathname === "/wishlist"
                ? "bg-background rounded-xl text-black"
                : " "
            }`}
            >
              <BiWalletAlt className="w-5 h-5" />
              <span className="font-semibold text-sm mt-1"> Wallet</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`w-full h-11 inline-flex items-center text-right gap-3  rounded-xl text-white transition-colors hover:bg-background hover:text-black px-4
            ${
              pathname === "/financial"
                ? "bg-background rounded-xl text-black"
                : " "
            }`}
            >
              <IoIosAnalytics className="w-5 h-5" />
              <span className="font-semibold text-sm mt-1">Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`w-full h-11 inline-flex items-center text-right gap-3  rounded-xl text-white transition-colors hover:bg-background hover:text-black px-4
            ${
              pathname === "/comments"
                ? "bg-background rounded-xl text-black"
                : " "
            }`}
            >
              <HiOutlineUsers className="w-5 h-5" />
              <span className="font-semibold text-sm mt-1">Community</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`w-full h-11 inline-flex items-center text-right gap-3  rounded-xl text-white transition-colors hover:bg-background hover:text-black px-4
            ${
              pathname === "/notifications"
                ? "bg-background rounded-xl text-black"
                : " "
            }`}
            >
              <BiMessageDetail className="w-5 h-5" />
              <span className="font-semibold text-sm mt-1">Message</span>
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex flex-col space-y-3 rounded-2xl p-5">
        <li>
          <Link
            href="/"
            className={`w-full h-11 inline-flex items-center text-right gap-3  rounded-xl text-white transition-colors hover:bg-background hover:text-black px-4
            ${
              pathname === "/financial"
                ? "bg-background rounded-xl text-black"
                : " "
            }`}
          >
            <BiMessageRoundedDots className="w-5 h-5" />
            <span className="font-semibold text-sm mt-1">Support</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`w-full h-11 inline-flex items-center text-right gap-3  rounded-xl text-white transition-colors hover:bg-background hover:text-black px-4
            ${
              pathname === "/comments"
                ? "bg-background rounded-xl text-black"
                : " "
            }`}
          >
            <MdOutlineSettingsApplications className="w-5 h-5" />
            <span className="font-semibold text-sm mt-1">Setting</span>
          </Link>
        </li>
        <li>
          <div
            className={`w-full h-11 inline-flex items-center text-right gap-3  rounded-xl text-white transition-colors px-4
            ${
              pathname === "/notifications"
                ? "bg-background rounded-xl text-black"
                : " "
            }`}
          >
            <MdOutlineLightMode className="w-5 h-5" />

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isChecked}
                onChange={handleToggleChange}
              />
              <div
                className={`relative w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#534EFF]`}
              />
            </label>
          </div>
        </li>
        <li>
          <button
            type="button"
            className="w-full h-11 inline-flex items-center text-right gap-3  rounded-xl text-white transition-colors hover:bg-primary hover:text-primary-foreground px-4"
          >
            <MdLogout className="w-5 h-5" />
            <span className="font-semibold text-sm mt-1"> Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
