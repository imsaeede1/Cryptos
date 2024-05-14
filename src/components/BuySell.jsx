"use client";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";

const tabData = [{ label: " Buy" }, { label: " Sell" }, { label: " Exchange" }];

const BuySell = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index) => {
    setActiveTab(index + 1);
  };
  return (
    <div className=" bg-[#232C2C] rounded-xl p-5 flex-1 mt-3">
      <div className="tabs-container">
        <ul className="flex justify-between gap-2 p-1 tabs">
          {tabData.map((tab, index) => (
            <li key={index} className="flex-1">
              <button
                type="button"
                className={`tab flex items-center w-full justify-center  gap-x-2 relative rounded-full py-2 ${
                  index === activeTab - 1
                    ? "bg-white"
                    : "text-white border border-[#414a4a] text-xs"
                }`}
                onClick={() => handleTabClick(index)}
              >
                <span className="whitespace-nowrap font-semibold text-sm">
                  {tab.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {activeTab === 1 && (
            <>
              {" "}
              <div x-show="activeTab === 'tabOne'">
                <div>
                  <div className="relative text-white my-3">
                    <span>Coin</span>
                    <select className="block w-full py-3 pl-3 pr-10 mt-2 leading-6 bg-[#182122] text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option value="ethereum">Ethereum </option>
                      <option value="ripple">Ripple</option>
                      <option value="litecoin">Litecoin</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"></div>
                  </div>
                  <div className="relative text-white my-3 ">
                    <span>Amount</span>
                    <div className="flex justify-between items-center w-full py-2 px-3 leading-6 rounded-md bg-[#182122]">$1,342.00
                    <select className="block w-fit py-1 px-2 leading-6 bg-[#232C2C] text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option value="ethereum">USD </option>
                      <option value="ripple">RL</option>
                      <option value="litecoin">Lit</option>
                    </select>
                    </div>
                   
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"></div>
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <div className="flex text-white justify-between">
                        <span>Total:</span>
                        <span className="font-semibold">$1,342.00</span>
                    </div>
                    <button className="bg-white w-full flex items-center justify-center rounded-md py-2 gap-2 font-semibold"><FaEthereum/> Buy Ethereum</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuySell;
