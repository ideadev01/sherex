
import React from "react";
import { useState } from 'react';
import Image from "next/image";
const Section2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div id="earn" className="relative w-screen h-auto overflow-hidden"
      style={{
        backgroundImage: 'url(/images/backgrounds/section_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className=" absolute w-full h-full top-0 bg-[#FAC43D] opacity-10 z-10 " ></div>
      <div className="flex flex-col h-screen justify-between items-center gap-[44px] w-full my-[85px] z-20 ">
        <div className="flex flex-col w-full items-center z-20">
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-white text-4xl lg:text-[37px] text-center font-bold leading-[44.4px] tracking-[0%] font-Nulshock">
              Earn Rewards with Sherex DEX
            </h1>
            <p className="text-[#FAC43D] text-lg text-center font-normal ">
              Maximize your memecoin holdings by staking and providing liquidity
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[60%] justify-center items-center gap-[50px] z-20">
          <div className="relative group flex flex-col gap-[18px] justify-center rounded-r-[36px] bg-[rgba(255,255,255,0.1)] px-[14.5px] min-h-[179px] backdrop-blur-[2px] transition-colors duration-300 text-white cursor-pointer w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="gap-[9px] flex flex-col px-24">
              <p className="text-[#FB9B00] text-[38px] text-left font-bold leading-10 uppercase font-Nulshock">Stake $SHRX Tokens</p>
              <p className="text-[28px] text-left font-normal leading-9">Lock your tokens to earn exclusive rewards.</p>
            </div>
            <Image
              src={isHovered ? "images/icons/Ellipse1-hover.svg" : "images/icons/Ellipse1.svg"}
              height={180}
              width={180}
              className="absolute left-[-10%] transition-transform duration-300"
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-[18px] justify-center rounded-r-[36px] bg-[rgba(255,255,255,0.1)] px-[14.5px] min-h-[179px] backdrop-blur-[29px] transition-colors duration-300 text-white cursor-pointer w-full"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <div className="gap-[9px] flex flex-col  px-24">
              <p className="text-[#FF5A03] text-[38px] text-left font-bold leading-10 uppercase font-Nulshock">Add Liquidity</p>
              <p className="text-[28px] text-left font-normal leading-9">Provide liquidity to pools and earn your share of trading fees. </p>
            </div>
            <Image
              src={isHovered1 ? "images/icons/Ellipse2-hover.svg" : "images/icons/Ellipse2.svg"}
              height={180}
              width={180}
              className="absolute left-[-10%] transition-transform duration-300"
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-[18px] justify-center rounded-r-[36px] bg-[rgba(255,255,255,0.1)] px-[14.5px] min-h-[179px] backdrop-blur-[29px] transition-colors duration-300 text-white cursor-pointer w-full"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div className="gap-[9px] flex flex-col justify-center px-24">
              <p className="text-[#FB9B00] text-[38px] text-left font-bold leading-10 uppercase font-Nulshock">Incentives and Bonuses</p>
              <p className="text-[28px] text-left font-normal leading-9">Participate in referral programs, token burns, and exclusive airdrops.</p>
            </div>
            <Image
              src={isHovered2 ? "images/icons/Ellipse3-hover.svg" : "images/icons/Ellipse3.svg"}
              height={180}
              width={180}
              className="absolute left-[-10%] transition-transform duration-300"
              alt="logo"
            />
          </div>
        </div>
        <div className="flex items-center cursor-pointer bg-[#FAC43D] rounded-full py-[19px] px-[25.5px] z-20">
          <p className="text-[28px] leading-8 text-[#291A15] font-bold uppercase font-Nulshock">Start Earning</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
