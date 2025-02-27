import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Section5 = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [fadeState, setFadeState] = useState<"fading-in" | "fading-out" | null>(null);

  const tabs = [
    { key: "whatIsSherexDex" },
    { key: "howToTrade" },
    { key: "isSherexSecure" },
    { key: "whatIsSherexDex" },
    { key: "howToTrade" },
  ];

  const handleTabClick = (index: number) => {
    if (activeTab === index) {
      setFadeState("fading-out");
      setTimeout(() => {
        setActiveTab(null);
        setFadeState(null);
      }, 300); // Match animation duration
    } else {
      if (activeTab !== null) {
        setFadeState("fading-out");
        setTimeout(() => {
          setActiveTab(index);
          setFadeState("fading-in");
        }, 300); // Delay switching tabs until fade-out completes
      } else {
        setActiveTab(index);
        setFadeState("fading-in");
      }
    }
  };

  useEffect(() => {
    if (fadeState === "fading-in") {
      setTimeout(() => setFadeState(null), 300); // Reset after fade-in completes
    }
  }, [fadeState]);

  return (
    <div
      data-aos="fade-down"
      id="faqs"
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: "url(/images/backgrounds/last_bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Ensures the background does not move/resize

      }}
    >
      <div className="flex flex-col h-auto items-start gap-[44px] w-full my-[85px] px-5 lg:px-[150px]">
        <div className="flex flex-col w-full items-start z-20 lg:pb-[100px]">
          <h1 className={`text-[#FB9B00] text-[27px] lg:text-[37px] font-bold leading-[44.4px] tracking-[0%] uppercase text-center lg:text-left ${locale === 'ar' ? "" : "font-Nulshock"}`}>
            {t("frequently_ask")}
          </h1>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 relative z-20 pb-10 lg:pb-[133px]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`group flex flex-col justify-between items-center bg-white duration-300 cursor-pointer w-full z-20 py-6 px-4 
      ${activeTab === index ? "bg-gray-200" : ""}`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-full h-6 w-6 
            ${activeTab === index ? "bg-[#FF5A03]" : "bg-[#FB9B00]"}`}
                  ></div>
                  <p className="text-black text-sm lg:text-lg font-normal"> {t(`tabs.${tab.key}`)}</p>
                </div>
                <Image
                  src="/images/icons/leftarrow.svg"
                  width={10}
                  height={10}
                  alt="header"
                  className={`transform transition-transform duration-300 
          ${activeTab === index ? "rotate-90" : ""}`}
                />
              </div>

              {/* Animated Content */}
              <div
                className={`w-full overflow-hidden transition-all duration-500 flex lg:hidden 
        ${activeTab === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className={`text-black text-xs lg:text-lg font-normal mt-4 ml-10 ${locale === "ar" ? "mr-10" : "ml-10"}`}> {t(`content.${tab.key}`)}</p>
              </div>
            </div>
          ))}


          {activeTab !== null && (
            <div
              key={activeTab}
              className={`absolute w-full -top-10 group hidden lg:flex flex-col justify-start rounded-[13px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] transition-all duration-500 text-white cursor-pointer z-10 p-[10px] min-h-[475px]  py-10 gap-10 
                ${fadeState === "fading-out" ? "opacity-0 scale-95" : ""}
                ${locale === "ar" ? "right-[90%] pr-28" : "left-[90%] pl-28"}
                ${fadeState === "fading-in" ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
            >
              <h1 className="text-white text-4xl lg:text-[17px] font-bold leading-[20.4px] tracking-[0%] uppercase">
                {t(`tabs.${tabs[activeTab].key}`)}
              </h1>
              <p className="text-white text-lg font-normal">{t(`content.${tabs[activeTab].key}`)}</p>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-10 w-full z-30">
        <a href="https://app.sherex.io" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-105 hover:brightness-110 w-full flex justify-center items-center">
          <div className="flex items-center justify-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-md py-2 px-4 z-20">
            <p className="text-base text-white font-semibold">{t("learn_more")}</p>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Section5;
