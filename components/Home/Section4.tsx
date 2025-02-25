import Image from "next/image";

const Section4 = () => {
  return (
    <div data-aos="fade-down" id="join"
      className="relative w-screen h-auto overflow-hidden " style={{ backgroundImage: 'url(/images/backgrounds/hole.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <Image
        src="/images/backgrounds/sit_image.png"
        height={680}
        width={850}
        className="absolute bottom-0 -right-[10%] object-cover z-20"
        alt="logo"
      />
      <div className=" absolute w-full h-full top-0 bg-[#201917] opacity-70 z-10 " ></div>
      <div className="flex flex-col h-auto items-start gap-[44px] w-full my-[85px] px-[150px]">
        <div className="flex flex-col w-full items-start z-20">
          <div className="flex flex-col justify-center  gap-6">
            <h1 className="text-white text-4xl lg:text-[37px] font-bold leading-[44.4px] tracking-[0%] uppercase font-Nulshock">
              Join the Sherex Pack
            </h1>
            <p className="text-white text-[26px] font-semibold w-2/3">
              Be part of a growing community that thrives on loyalty and success
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[60%] gap-[31px] ">
          <div className="relative group flex flex-col justify-center rounded-[13px] bg-[rgba(255,255,255,0.1)] px-[14.5px] backdrop-blur-[20px] transition-colors duration-300 text-white cursor-pointer w-full z-20 p-[10px]"
          >
            <h1 className="text-white text-4xl lg:text-[26px] font-bold leading-[31.2px] tracking-[0%] uppercase font-Nulshock">
              Meme Contests and Challenges
            </h1>
            <p className="text-[#FAC43D] text-[22px] font-normal ">
              Win $SHRX and have fun
            </p>
          </div>
          <div className="relative group flex flex-col justify-center rounded-[13px] bg-[rgba(255,255,255,0.1)] px-[14.5px] backdrop-blur-[20px] transition-colors duration-300 text-white cursor-pointer w-full z-20 p-[10px]"
          >
            <h1 className="text-white text-4xl lg:text-[26px] font-bold leading-[31.2px] tracking-[0%] uppercase font-Nulshock">
              Community Governance
            </h1>
            <p className="text-[#FAC43D] text-[22px] font-normal ">
              Shape Sherex’s future by voting with $SHRX tokens
            </p>
          </div>
          <div className="relative group flex flex-col justify-center rounded-[13px] bg-[rgba(255,255,255,0.1)] px-[14.5px] backdrop-blur-[20px] transition-colors duration-300 text-white cursor-pointer w-full z-20 p-[10px]"
          >
            <h1 className="text-white text-4xl lg:text-[26px] font-bold leading-[31.2px] tracking-[0%] uppercase font-Nulshock">
              Exclusive Updates
            </h1>
            <p className="text-[#FAC43D] text-[22px] font-normal ">
              Get first-hand news about platform milestones and features
            </p>
          </div>
        </div>
        <div className="flex items-center cursor-pointer bg-[#FF5A03] rounded-full py-2 px-5 z-20">
          <p className="text-base leading-8 text-white font-semibold">Join the community</p>
        </div>
      </div>
    </div>
  )
}

export default Section4;