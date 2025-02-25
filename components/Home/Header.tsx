import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  // Check if the screen size is mobile or not
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  // Automatically close the sidebar if it's not in mobile mode
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false); // Close sidebar if screen size is not mobile
    }
  }, [isMobile]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div
      id="home"
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: "url(/images/backgrounds/bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <div
        className="fixed top-0 overflow-hidden flex h-[100px] w-full px-5 xl:px-[150px] bg-gradient-to-b from-black via-black/70 to-black/0 z-20"
        id="Navbar"
      >
        <div className="flex justify-between items-center w-full relative py-5">
          <div className="flex xl:gap-4 gap-1">
            <div className="flex items-center gap-2">
              <Image src="/images/logo/foxLogo.svg" height={60} width={60} alt="logo" />
              <Image
                src="/images/logo/logotext.svg"
                height={80}
                width={100}
                className="hidden lg:flex"
                alt="logo"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between gap-10">
            {["Smart Trading", "Earn", "Launch a Memecoin", "Community", "FAQs"].map(
              (item, index) => (
                <p
                  key={index}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, ""))}
                  className="text-white cursor-pointer hover:opacity-70"
                >
                  {item}
                </p>
              )
            )}
          </div>

          {/* Right-side Buttons (Desktop) */}
          <div className="hidden lg:flex items-center justify-end gap-6">
            <div className="flex justify-between items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-md py-2 px-4">
              <Image src="/images/icons/app.svg" height={30} width={30} alt="app" />
              <p className="text-base text-white pr-4">Sherex App</p>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/images/icons/language.svg" height={20} width={20} alt="language" />
              <p className="text-base text-white pr-2">EN</p>
              <Image src="/images/icons/dropdown.svg" height={5} width={10} alt="dropdown" />
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button className="lg:hidden flex items-center" onClick={toggleSidebar}>
            <Image src="/images/icons/menu.svg" height={50} width={50} alt="menu" />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile Navigation) */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen w-full sm:w-72 bg-[rgba(255,255,255,)] backdrop-blur-[100px] text-white z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        {/* Mobile Menu Items */}
        <button className="absolute top-5 right-5 z-30" onClick={toggleSidebar}>
          <Image src="/images/icons/close.svg" height={30} width={30} className="text-white" alt="close" />
        </button>
        <div className="flex flex-col items-start px-14 gap-6 mt-16">
          {["Smart Trading", "Earn", "Launch a Memecoin", "Community", "FAQs"].map((item, index) => (
            <p
              key={index}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, ""))}
              className="cursor-pointer text-xl hover:text-[#FF5A03] "
            >
              {item}
            </p>
          ))}

          {/* App Button (Mobile) */}
          <div className="flex items-center bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-md py-2 px-4 cursor-pointer">
            <Image src="/images/icons/app.svg" height={30} width={30} alt="app" />
            <p className="text-base text-white pr-4">Sherex App</p>
          </div>

          <div className="flex items-center gap-1">
            <Image src="/images/icons/language.svg" height={20} width={20} alt="language" />
            <p className="text-base text-white pr-2">EN</p>
            <Image src="/images/icons/dropdown.svg" height={5} width={10} alt="dropdown" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div data-aos="fade-down">
        <div className="flex flex-col w-full h-screen justify-end gap-52 xl:gap-12 pb-14 lg:pb-[104px] px-5">
          <div className="flex flex-col w-full items-center">
            <div className="text-white text-center text-5xl lg:text-[100px] w-full lg:w-[80%] 2xl:w-[60%] uppercase leading-[50px] lg:leading-[82px] font-Evil">
              Trade Memecoins Instantly on Sherex DEX
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-[38px] font-Nulshock">
            <div className="w-full flex justify-center flex-col items-center">
              <div className="text-white text-center text-[18px] lg:text-[23px] w-full lg:w-1/2 xl:w-[35%] uppercase font-bold leading-[28px]">
                The first-ever decentralized exchange designed exclusively for memecoins.
              </div>
              <div className="text-white text-center text-[18px] lg:text-[23px] w-full lg:w-1/2 xl:w-[35%] uppercase font-bold leading-[28px]">
                Buy, trade, and manage your tokens with security, speed, and simplicity.
              </div>
            </div>
            <div className="flex gap-[27px]">
              <div className="flex items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-md py-2 px-4">
                <p className="text-base text-white font-semibold">Start Trading</p>
              </div>
              <div className="flex items-center cursor-pointer rounded-md py-2 px-4 border-2 border-solid border-white">
                <p className="text-base text-white font-semibold">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
