"use client";
import { useState } from "react";
import Image from "next/image";

const tabData = [
  { label: " Portfolio performance" },
  { label: " Statistic" },
  { label: " Transactions" },
];
const tabDate = [
  { label: "24H" },
  { label: "1W" },
  { label: "1M" },
  { label: "1Y" },
  { label: "All" },
];

const Chart = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index) => {
    setActiveTab(index + 1);
  };
  const [activeTabDate, setActiveTabDate] = useState(1);
  const handleTabDateClick = (index) => {
    setActiveTabDate(index + 1);
  };
  return (
    <div className="mt-3">
      <div className="tabs-container">
        <div className="flex justify-between items-center">
          <ul className="flex justify-start gap-6 p-1 tabs">
            {tabData.map((tab, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`tab flex flex-col items-center w-full justify-center  gap-x-2 relative py-2 ${
                    index === activeTab - 1
                      ? " text-white"
                      : "text-muted"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <span className="whitespace-nowrap font-semibold text-sm">
                    {tab.label}
                  </span>
                   {
                    index === activeTab - 1
                      &&<div className="border-b-2 border-white h-2 w-1/2"></div>
                  }
                </button>
              </li>
            ))}
          </ul>
          <ul className="flex justify-start gap-2 p-1 tabs">
            {tabDate.map((tab, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`tab flex items-center w-14 justify-center rounded-full gap-x-2 relative py-1 ${
                    index === activeTabDate - 1
                      ? "bg-white"
                      : "text-white border border-[#414a4a] text-xs"
                  }`}
                  onClick={() => handleTabDateClick(index)}
                >
                  <span className="whitespace-nowrap font-semibold text-sm">
                    {tab.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content">
          {activeTab === 1 && (
            <div className="h-[222px] w-full flex justify-between mt-2">
              <Image
                src={`/images/chart.png`}
                className="w-full rounded-t-xl rounded-b-xl"
                width="681"
                height="222"
                alt="..."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chart;
