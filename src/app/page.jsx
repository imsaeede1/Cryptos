import BuySell from "@/components/BuySell";
import Chart from "@/components/Chart";
import Permium from "@/components/Permium";
import TotalAssets from "@/components/TotalAssets";
import TotalBalance from "@/components/TotalBalance";

export default function Home() {
  return (
    <div className="grid grid-cols-7  px-8 pt-2 pb-5 gap-4">
      <div className="col-span-5">
        <Permium />
        <TotalAssets />
        <Chart />
      </div>
      <div className="col-span-2 flex flex-col">
        <TotalBalance />
        <BuySell className="flex-1"/>
      </div>
    </div>
  );
}
