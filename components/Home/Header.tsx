import React from "react";
import Image from "next/image";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/images/backgrounds/header.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        className='fixed top-0 overflow-hidden flex h-[100px]  w-full px-[150px] bg-gradient-to-b from-black via-black/70 to-black/0 z-20'
        id="Navbar"
      >
        <div className="flex justify-between items-center w-full relative py-5">
          <div className="flex xl:gap-4 gap-1">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo/foxLogo.svg"
                height={60}
                width={60}
                className=""
                alt="logo" />
              <Image
                src="/images/logo/logotext.svg"
                height={80}
                width={100}
                className=""
                alt="logo" />

            </div>
          </div>
          <div className="flex items-center justify-between gap-10">
            <p
              onClick={() => scrollToSection('home')}
              className="text-white cursor-pointer hover:opacity-70"
            >
              Smart Trading
            </p>
            <p
              onClick={() => scrollToSection('earn')}
              className="text-white cursor-pointer hover:opacity-70"
            >
              Earn
            </p>
            <p
              onClick={() => scrollToSection('launch')}
              className="text-white cursor-pointer hover:opacity-70"
            >
              Launch a Memecoin
            </p>
            <p
              onClick={() => scrollToSection('join')}
              className="text-white cursor-pointer hover:opacity-70"
            >
              Community
            </p>
            <p
              onClick={() => scrollToSection('faqs')}
              className="text-white cursor-pointer hover:opacity-70"
            >
              FAQs
            </p>

          </div>
          <div className="flex items-center justify-end gap-6">
            <div
              className="flex justify-between items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D]  rounded-md py-2 px-4"
            >
              <Image
                src="/images/icons/app.svg"
                height={30}
                width={30}
                className=""
                alt="logo" />
              <p className="text-base text-white pr-4">Sherex App</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/images/icons/language.svg"
                height={20}
                width={20}
                className=""
                alt="logo" />
              <p className="text-base text-white pr-2">EN</p>
              <Image
                src="/images/icons/dropdown.svg"
                height={5}
                width={10}
                className=""
                alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down">
        <div className="flex flex-col w-full h-screen justify-between pb-14 lg:pb-[104px]">
          <div className="flex flex-col w-full items-center pt-[213px]">
            <div className="text-white text-center text-5xl lg:text-[100px] w-[80%] uppercase leading-[50px] lg:leading-[82px] font-Evil">
              Trade Memecoins Instantly on Sherex DEX
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-[38px] font-Nulshock">
            <div className="w-full flex justify-center flex-col items-center">
              <div className="text-white text-center text-[18px] lg:text-[23px] w-2/3 lg:w-[35%] uppercase font-bold leading-[28px]">
                The first-ever decentralized exchange designed exclusively for memecoins.
              </div>
              <div className="text-white text-center text-[18px] lg:text-[23px] w-2/3 lg:w-[35%] uppercase font-bold leading-[28px]">
                Buy, trade, and manage your tokens with security, speed, and simplicity.
              </div>
            </div>

            <div className="flex gap-[27px]">
              <div
                className="flex items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D]  rounded-md py-2 px-4"
              >
                <p className="text-base text-white pr-4 font-semibold">Start Trading</p>
              </div>
              <div
                className="flex items-center cursor-pointer rounded-md py-2 px-4 border-2 border-solid border-white"
              >
                <p className="text-base text-white pr-4 font-semibold">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;