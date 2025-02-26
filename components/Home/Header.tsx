import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { locale } = useRouter();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState((locale || 'en').toUpperCase());
  const [isOpenLang, setIsOpenLang] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);


  const languages = [
    { code: "EN", name: "English" },
    { code: "AR", name: "Arabic" },
  ];

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpenLang(!isOpenLang);
  };

  // Handle language selection
  const selectLanguage = (code: string) => {
    setSelectedLanguage(code);
    setIsOpenLang(false);
    router.push(router.pathname, router.asPath, { locale: code.toLowerCase() });
  };

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
            <p onClick={() => scrollToSection('trading')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold">{t("smart_trading")}</p>
            <p onClick={() => scrollToSection('earn')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold">{t("earn")}</p>
            <p onClick={() => scrollToSection('launch')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold">{t("launch_memcoin")}</p>
            <p onClick={() => scrollToSection('join')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold">{t("community")}</p>
            <p onClick={() => scrollToSection('faqs')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold">{t("faqs")}</p>
          </div>

          {/* Right-side Buttons (Desktop) */}
          <div className="flex items-center justify-end gap-2 sm:gap-6">
            <div className="flex justify-between items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-md py-2 px-4">
              <Image src="/images/icons/app.svg" height={30} width={30} alt="app" />
              <p className="text-base text-white pr-4 font-semibold">{t("app")}</p>
            </div>
            <div
              className=" relative flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800"
              onClick={toggleDropdown}
            >
              <Image src="/images/icons/language.svg" height={20} width={20} alt="language" />
              <p className="text-base text-white font-semibold">{selectedLanguage}</p>
              <Image src="/images/icons/dropdown.svg" height={5} width={10} alt="dropdown" />
              {isOpenLang && (
                <div className="absolute left-0 mt-2 w-32 bg-black text-white border border-gray-700 rounded-md shadow-lg z-50">
                  {languages.map((lang) => (
                    <p
                      key={lang.code}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer font-semibold"
                      onClick={() => selectLanguage(lang.code)}
                    >
                      {lang.name}
                    </p>
                  ))}
                </div>
              )}
            </div>

          </div>

          <button className="lg:hidden flex items-center" onClick={toggleSidebar}>
            <Image src="/images/icons/menu.svg" height={50} width={50} alt="menu" />
          </button>
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen w-full sm:w-72 bg-[rgba(255,255,255,)] backdrop-blur-[100px] text-white z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <button className="absolute top-5 right-5 z-30" onClick={toggleSidebar}>
          <Image src="/images/icons/close.svg" height={30} width={30} className="text-white" alt="close" />
        </button>
        <div className="flex flex-col items-start px-14 gap-6 mt-16">
          <p onClick={() => scrollToSection('home')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold text-xl">{t("smart_trading")}</p>
          <p onClick={() => scrollToSection('earn')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold text-xl">{t("earn")}</p>
          <p onClick={() => scrollToSection('launch')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold text-xl">{t("launch_memcoin")}</p>
          <p onClick={() => scrollToSection('join')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold text-xl">{t("community")}</p>
          <p onClick={() => scrollToSection('faqs')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold text-xl">{t("faqs")}</p>

          {/* App Button (Mobile) */}
          {/* <div className="flex items-center bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-md py-2 px-4 cursor-pointer">
            <Image src="/images/icons/app.svg" height={30} width={30} alt="app" />
            <p className="text-base text-white pr-4 font-semibold">{t("app")}</p>
          </div> */}

          {/* Language Selector */}
          {/* <div className="relative">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              <Image src="/images/icons/language.svg" height={20} width={20} alt="language" />
              <p className="text-base text-white pr-2 font-semibold">{selectedLanguage}</p>
              <Image
                src="/images/icons/dropdown.svg"
                height={5}
                width={10}
                alt="dropdown"
                className={`transition-transform ${showLanguages ? "rotate-180" : ""}`}
              />
            </div>

            {showLanguages && (
              <div className="absolute left-4  mt-2 w-32 text-white">
                {languages.map((lang) => (
                  <p
                    key={lang.code}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer  rounded-md font-semibold"
                    onClick={() => {
                      selectLanguage(lang.code);
                      setShowLanguages(false); // Hide the list after selecting
                    }}
                  >
                    {lang.name}
                  </p>
                ))}
              </div>
            )}
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div data-aos="fade-down">
        <div className="flex flex-col w-full h-screen justify-end gap-52 xl:gap-12 pb-14 lg:pb-[104px] px-5">
          <div className="flex flex-col w-full items-center">
            <div className={`text-white text-center text-5xl lg:text-[100px] w-full lg:w-[80%] 2xl:w-[60%] uppercase leading-[50px] lg:leading-[82px]   ${locale === 'ar' ? "" : "font-Evil"}`}>
              {t("trade_memecoin")}
            </div>
          </div>
          <div className={`flex flex-col w-full justify-center items-center gap-[38px] ${locale === 'ar' ? "" : "font-Nulshock"}`}>
            <div className="w-full flex justify-center flex-col items-center">
              <div className="text-white text-center text-[18px] lg:text-[23px] w-full lg:w-1/2 xl:w-[35%] uppercase font-bold leading-[28px]">
                {t("first_ever")}
              </div>
              <div className="text-white text-center text-[18px] lg:text-[23px] w-full lg:w-1/2 xl:w-[35%] uppercase font-bold leading-[28px]">
                {t("simplicity")}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[27px]">
              <div className="flex items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-md py-2 px-4">
                <p className="text-base text-white font-semibold">{t("start_trading")}</p>
              </div>
              <div className="flex items-center cursor-pointer rounded-md py-2 px-4 border-2 border-solid border-white">
                <p className="text-base text-white font-semibold">{t("learn_more")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
