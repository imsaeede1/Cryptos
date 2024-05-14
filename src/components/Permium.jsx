import Image from "next/image";

const Permium = () => {
    return ( 
        <div className="bg-gradient-to-r h-[160px] flex justify-between rounded-xl from-[#3E3F93] to-[#373A99]">
           
                  <div className="pl-7 pt-5">
                    <h2 className="text-xl text-white font">Upgrade Your Plan to <bdi className="text-[#B1E366] font-semibold">Permium</bdi> <br/>
                    and Get inlimited access</h2>
                    <button className="bg-[#534EFF] px-6 rounded-lg mt-4 py-2 text-white font-semibold">Upgrade Now</button>
                  </div>
                  <Image
                    src={`/images/bitc.png`}
                    className="w-fit object-cover rounded-t-xl rounded-b-xl"
                    width="250"
                    height="160"
                    alt="..."
                  />
        </div>
     );
}
 
export default Permium;