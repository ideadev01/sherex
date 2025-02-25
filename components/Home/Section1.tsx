import { useState } from 'react';
import Image from "next/image";

const Section1 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  return (
    <div id="about"
      className="relative h-auto w-full flex flex-col bg-gradient"
    >
      <div className="flex flex-col justify-center items-center gap-14 py-[85px] px-[150px]">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-white text-4xl lg:text-[37px] text-center font-bold leading-[44.4px] tracking-[0%] font-Nulshock">
            Why Trade on Sherex DEX?
          </h1>
          <p className="text-white text-lg text-center font-normal w-1/2">
            Sherex DEX is not just another exchange, it`s the ultimate platform for memecoin trading. Built on BNB Smart Chain, Sherex DEX offers speed, security, and innovation tailored for the memecoin community.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[41px]">
          <div className="group flex flex-col gap-[18px] justify-center items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] pt-[44px] pb-[51px] backdrop-blur-[29px] transition-colors duration-300 hover:bg-gradient-to-t to-[#FF5A03] from-[#FAC43D] text-white hover:text-black cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={isHovered ? "images/icons/transaction-hover.svg" : "images/icons/transaction.svg"}
              alt="logo"
              height={55}
              width={55}
              priority
            />
            <div className="gap-[9px] flex flex-col justify-center items-center">
              <p className="text-white text-lg  text-center font-bold leading-5 font-Nulshock">Lightning-Fast Transactions</p>
              <p className=" text-base text-center font-semibold leading-5">Built on the BNB Smart Chain, Sherex processes trades with minimal latency.</p>
            </div>
          </div>
          <div className="group flex flex-col gap-[18px] justify-center items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] pt-[44px] pb-[51px] backdrop-blur-[29px] transition-colors duration-300 hover:bg-gradient-to-t to-[#FF5A03] from-[#FAC43D] text-white hover:text-black cursor-pointer"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <Image
              src={isHovered1 ? "images/icons/transparent-hover.svg" : "images/icons/transparent.svg"}
              alt="logo"
              height={55}
              width={55}
              priority
            />

            <div className="gap-[9px] flex flex-col justify-center items-center">
              <p className="text-white text-lg  text-center font-bold leading-5 font-Nulshock">Secure and Transparent</p>
              <p className=" text-base text-center font-semibold leading-5">Fully audited smart contracts ensure user funds are always safe. </p>
            </div>
          </div>
          <div className="group flex flex-col gap-[18px] justify-center items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] pt-[44px] pb-[51px] backdrop-blur-[29px] transition-colors duration-300 hover:bg-gradient-to-t to-[#FF5A03] from-[#FAC43D] text-white hover:text-black cursor-pointer"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <Image
              src={isHovered2 ? "images/icons/lowfee-hover.svg" : "images/icons/lowfee.svg"}
              alt="logo"
              height={55}
              width={55}
              priority
            />
            <div className="gap-[9px] flex flex-col justify-center items-center">
              <p className="text-white text-lg  text-center font-bold leading-5 font-Nulshock">Low Fees</p>
              <p className=" text-base text-center font-semibold leading-5">Enjoy ultra-low transaction fees that maximize your profits.</p>
            </div>
          </div>
          <div className="group flex flex-col gap-[18px] justify-center items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] pt-[44px] pb-[51px] backdrop-blur-[29px] transition-colors duration-300 hover:bg-gradient-to-t to-[#FF5A03] from-[#FAC43D] text-white hover:text-black cursor-pointer"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >

            <Image
              src={isHovered3 ? "images/icons/exclusive-hover.svg" : "images/icons/exclusive.svg"}
              alt="logo"
              height={55}
              width={55}
              priority
            />
            <div className="gap-[9px] flex flex-col justify-center items-center">
              <p className="text-white text-lg  text-center font-bold leading-5 font-Nulshock">Exclusive to Memecoins</p>
              <p className=" text-base text-center font-semibold leading-5">The first DEX tailored for meme tokens like Dogecoin, Shiba Inu, and $SHRX.</p>
            </div>
          </div>
          <div className="group flex flex-col gap-[18px] justify-center items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] pt-[44px] pb-[51px] backdrop-blur-[29px] transition-colors duration-300 hover:bg-gradient-to-t to-[#FF5A03] from-[#FAC43D] text-white hover:text-black cursor-pointer"
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >

            <Image
              src={isHovered4 ? "images/icons/loyalty-hover.svg" : "images/icons/loyalty.svg"}
              height={55}
              width={55}
              alt="logo"
              priority
            />
            <div className="gap-[9px] flex flex-col justify-center items-center">
              <p className="text-white text-lg text-center font-bold leading-5 font-Nulshock">
                Loyalty Rewards
              </p>
              <p className="text-base text-center font-semibold leading-5 ">
                Earn $SHRX tokens and exclusive perks by being part of the Sherex community.
              </p>
            </div>
          </div>

        </div>
        <div
          className="flex items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D]  rounded-md py-2 px-4"
        >
          <p className="text-base text-white pr-4 font-semibold">Start trading now</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[44px] py-[85px] px-[150px]">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-white text-4xl lg:text-[37px] text-center font-bold leading-[44.4px] tracking-[0%] font-Nulshock">
            Trade Memecoins with Ease
          </h1>
          <p className="text-[#FAC43D] text-lg text-center font-normal ">
            Sherex DEX makes trading seamless, secure, and rewarding. Here’s how
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[57px] min-h-[566px] items-end">
          <div className='flex flex-col gap-3.5 relative group'>
            <div className="flex flex-col gap-[18px] justify-center items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] pt-[98px] min-h-[286px] backdrop-blur-[29px] transition-colors duration-300 text-white cursor-pointer">
              <Image
                src="images/icons/bitcoin.svg"
                height={255}
                width={255}
                className="absolute -top-[50%] grayscale transition-transform duration-300 group-hover:-rotate-[15deg] group-hover:grayscale-0"
                alt="logo"
              />
              <div className="gap-[9px] flex flex-col justify-center items-center">
                <p className="text-[#FB9B00] text-[28px] text-center font-bold leading-8 font-Nulshock">Swap Tokens Instantly</p>
                <p className="text-lg text-center font-normal leading-6">Trade any memecoin with zero hassle and ultra-low fees</p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer border-[#FB9B00] border border-solid rounded-2xl py-4 w-full group-hover:bg-[#FB9B00]">
              <p className="w-full text-[28px] leading-8 text-[#FB9B00] font-bold uppercase text-center group-hover:text-white font-Nulshock">swap</p>
            </div>
          </div>
          <div className='flex flex-col gap-3.5 relative group'>
            <div className="flex flex-col gap-[18px] justify-center items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] pt-[98px] min-h-[286px] backdrop-blur-[29px] transition-colors duration-300 text-white cursor-pointer">
              <Image
                src="images/icons/trading.svg"
                height={255}
                width={255}
                className="absolute -top-[50%] grayscale transition-transform duration-300 group-hover:rotate-[21deg] group-hover:grayscale-0"
                alt="logo"
              />
              <div className="gap-[9px] flex flex-col justify-center items-center">
                <p className="text-[#FB9B00] text-[28px] text-center font-bold leading-8 font-Nulshock">Limit Orders for Smart Trading</p>
                <p className="text-lg text-center font-normal leading-6">Set custom price limits for automatic buy/sell orders.</p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer border-[#FB9B00] border border-solid rounded-2xl py-4 w-full group-hover:bg-[#FB9B00]">
              <p className="w-full text-[28px] leading-8 text-[#FB9B00] font-bold uppercase text-center group-hover:text-white font-Nulshock">limit orders</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-3.5 cursor-pointer group">
            <div className="flex flex-col gap-[18px] justify-center items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] pt-[98px] min-h-[286px] backdrop-blur-[29px] transition-colors duration-300 text-white">
              <Image
                src="images/icons/order.svg"
                height={255}
                width={255}
                className="absolute -top-[50%] grayscale -rotate-[30deg] transition-transform duration-300 group-hover:-rotate-[0deg] group-hover:grayscale-0"
                alt="logo"
              />
              <div className="gap-[9px] flex flex-col justify-center items-center">
                <p className="text-[#FB9B00] text-[28px] text-center font-bold leading-8 group-hover:text-white font-Nulshock">TWAP for Large Orders</p>
                <p className="text-lg text-center font-normal leading-6 group-hover:text-white">Execute large trades with time-weighted average pricing, minimizing slippage.</p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer border-[#FB9B00] border border-solid rounded-2xl py-4 w-full group-hover:bg-[#FB9B00]">
              <p className="w-full text-[28px] leading-8 text-[#FB9B00] font-bold uppercase text-center group-hover:text-white font-Nulshock">twap</p>
            </div>
          </div>
        </div>

        <a href="https://app.sherex.io" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-full py-[19px] px-[57.5px]">
            <p className="text-[28px] leading-8 text-white font-semibold uppercase font-Nulshock">Trade Now</p>
          </div>
        </a>
      </div>
      <div className="circle"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
    </div>

  )
}

export default Section1;