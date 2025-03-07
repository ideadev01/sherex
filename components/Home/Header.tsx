import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { locale } = useRouter();
  const { t } = useTranslation("common");
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
      <div
        className="fixed top-0 flex h-[100px] w-full px-5 xl:px-[150px] bg-gradient-to-b from-black via-black/70 to-black/0 z-20"
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
          <div className="hidden lg:flex items-center justify-between gap-10">
            <p onClick={() => scrollToSection('trading')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold">{t("smart_trading")}</p>
            <p onClick={() => scrollToSection('earn')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold">{t("earn")}</p>
            <p onClick={() => scrollToSection('launch')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold">{t("launch_memcoin")}</p>
            <p onClick={() => scrollToSection('join')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold">{t("community")}</p>
            <p onClick={() => scrollToSection('faqs')} className="text-white cursor-pointer hover:text-[#FF5A03] font-semibold">{t("faqs")}</p>
          </div>

          <div className="flex items-center justify-end sm:gap-6">
            {/* <div className="lg:flex justify-between items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-md py-2 px-4">
              <Image src="/images/icons/app.svg" height={30} width={30} alt="app" />
              <p className="text-base text-white pr-4 font-semibold">{t("app")}</p>
            </div> */}
            <div
              className=" relative flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800"
              onClick={toggleDropdown}
            >
              <Image src="/images/icons/language.svg" height={20} width={20} alt="language" />
              <p className="text-xs lg:text-base text-white font-semibold">{selectedLanguage}</p>
              <Image src="/images/icons/dropdown.svg" height={5} width={10} alt="dropdown" />
              {isOpenLang && (
                <div className="absolute left-0 top-[40px] w-32 bg-black text-white border border-gray-700 rounded-md shadow-lg z-50">
                  {languages.map((lang) => (
                    <p
                      key={lang.code}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer font-semibold text-xs lg:text-base"
                      onClick={() => selectLanguage(lang.code)}
                    >
                      {lang.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <button className="lg:hidden flex items-center" onClick={toggleSidebar}>
              <Image src="/images/icons/menu.svg" height={50} width={50} alt="menu" />
            </button>
          </div>


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
        </div>
      </div>

      <div data-aos="fade-down">
        <div className="flex flex-col w-full h-screen justify-end gap-52 xl:gap-12 pb-14 lg:pb-[104px] px-5">
          <div className="flex flex-col w-full items-center">
            <div className={`text-white text-center text-[27px] lg:text-[100px] w-full lg:w-[80%] 2xl:w-[60%] uppercase    ${locale === 'ar' ? "leading-[50px] lg:leading-[140px]" : "font-Evil leading-[50px] lg:leading-[82px]"}`}>
              {t("trade_memecoin")}
            </div>
          </div>
          <div className={`flex flex-col w-full justify-center items-center gap-[38px] ${locale === 'ar' ? "" : "font-Nulshock"}`}>
            <div className="w-full flex justify-center flex-col items-center">
              <div className="text-white text-center text-xs lg:text-[23px] w-full lg:w-1/2 xl:w-[35%] uppercase font-bold leading-[28px]">
                {t("first_ever")}
              </div>
              <div className="text-white text-center text-xs lg:text-[23px] w-full lg:w-1/2 xl:w-[35%] uppercase font-bold leading-[28px]">
                {t("simplicity")}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[27px] z-30">
              <a href="https://app.sherex.io" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-md py-2 px-4 transition duration-300 hover:scale-105 hover:brightness-110">
                <p className="text-base text-white font-semibold">{t("start_trading")}</p>
              </a>
              <a href="https://app.sherex.io" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer rounded-md py-2 px-4 border-2 border-solid border-white transition duration-300 hover:scale-105 hover:brightness-110">
                <p className="text-base text-white font-semibold">{t("learn_more")}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
