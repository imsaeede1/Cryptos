import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const TotalBalance = () => {
    return ( 
        <div className="flex flex-col justify-center items-center gap-2  bg-[#232C2C] rounded-xl py-5">
          <div className="flex-shrink-0 w-20 h-20 rounded-full ring-4 mb-2 ring-[#524EDE] overflow-hidden">
            <Image
              src={`/images/avatars/01.jpeg`}
              className="w-full h-full object-cover"
              width="80"
              height="80"
              alt="..."
            />
          </div>
          <h5 className="text-white text-md">Total Balance</h5>
          <h2 className="text-white text-3xl font-semibold">$15,453.05</h2>
          <div className="flex gap-2">
            <div className="bg-[#B1E366] rounded-full flex items-center text-xs font-semibold px-2">+12.34%</div> <div className="bg-[#B1E366] rounded-full flex items-center justify-center w-6 h-6" ><FiArrowUpRight/></div>
          </div>
        </div>
     );
}
 
export default TotalBalance;