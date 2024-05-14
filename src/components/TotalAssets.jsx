"use client"
import { useState } from "react";
import { CiMoneyBill } from "react-icons/ci";
import { RiHandbagLine } from "react-icons/ri";
import { BsBarChart } from "react-icons/bs";

const data = [{icon:<CiMoneyBill  className="w-8 h-8"/>,total:"$1,234", label: " Total Assets" }, {icon:<RiHandbagLine  className="w-8 h-8"/>,total:"$2,556", label: " Total Deposits" }, {icon:<BsBarChart  className="w-8 h-8"/>, total:"+8.6%",label: " APY" }];

const TotalAssets = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (index) => {
      setActiveTab(index + 1);
    };
    return ( 
        <div className="mt-8">
              <ul className="flex justify-between gap-5 p-1 tabs">
          {data.map((tab, index) => (
            <li key={index} className="flex-1">
              <div
                className={`tab flex flex-col gap-2 justify-around items-center w-full cursor-pointer  gap-x-2 relative rounded-xl py-2 ${
                  index === activeTab - 1
                    ? "bg-[#B1E366]"
                    : "text-white bg-[#232C2C]"
                }`}
                onClick={() => handleTabClick(index)}
              >
                <div className={`tab -mt-8 flex flex-col justify-around items-center w-12 cursor-pointer  gap-x-2 relative rounded-full p-2 ${
                  index === activeTab - 1
                    ? "bg-[#B1E366]"
                    : "text-white bg-[#232C2C]"
                }`}>{tab.icon}</div>
                <span className="whitespace-nowrap font-semibold text-3xl">
                  {tab.total}
                </span>
                <span className="whitespace-nowrap font-normal text-sm mb-3">
                  {tab.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
        </div>
     );
}
 
export default TotalAssets;