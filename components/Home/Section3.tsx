import Image from "next/image";

const Section3 = () => {
  return (
    <div data-aos="fade-down" id="launch"
      className="relative h-screen w-full flex flex-col bg-[#291A15]"
    >
      <Image
        src="/images/backgrounds/launch.png"
        height={680}
        width={1024}
        className="absolute -top-20 left-[20%] object-cover"
        alt="logo"
      />
      <div className="flex flex-col w-full h-full justify-end items-center py-20 ">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-white text-4xl lg:text-[57px] text-center font-bold leading-[68.4px] tracking-[0%] font-Nulshock">
            Launch Your Memecoin with Sherex
          </h1>
          <p className="text-[#FAC43D] text-[33px] text-center font-normal w-2/3 leading-[44.94px]">
            Sherex SpringBoard empowers you to create, launch, and grow your memecoin empire
          </p>
        </div>
        <div className="flex items-center cursor-pointer bg-[#FAC43D] rounded-full py-[19px] px-[25.5px] mt-12">
          <p className="text-[28px] leading-8 text-[#291A15] font-bold uppercase font-Nulshock">Launch Your Token </p>
        </div>
      </div>
      <div className="circle4"></div>
      <div className="circle5"></div>
    </div>
  )
}

export default Section3;