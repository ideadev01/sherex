
import React from "react";
import { useState } from 'react';
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
const Section2 = () => {
  const t = useTranslations();
   const { locale } = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div data-aos="fade-down" id="earn" className="relative w-screen h-auto overflow-hidden"
      style={{
        backgroundImage: 'url(/images/backgrounds/section_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className=" absolute w-full h-full top-0 bg-[#FAC43D] opacity-10 z-10 " ></div>
      <div className="flex flex-col h-auto justify-between items-center gap-[44px] w-full my-[85px] z-20 px-5">
        <div className="flex flex-col w-full items-center z-20">
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className={`text-white text-4xl lg:text-[37px] text-center font-bold leading-[44.4px] tracking-[0%] ${locale === 'ar' ? "" : "font-Nulshock"}`}>
              {t("earn_rewards")}
            </h1>
            <p className="text-[#FAC43D] text-lg text-center font-normal ">
              {t("earn_rewards_description")}

            </p>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[60%] justify-center items-center gap-[50px] z-20 pl-[60px]">
          {/* Stake Section */}
          <div
            className="relative group flex flex-col gap-[18px] justify-center rounded-r-[36px] bg-[rgba(255,255,255,0.1)] px-[14.5px] lg:px-10 h-[120px] lg:min-h-[179px] backdrop-blur-[2px] transition-colors duration-300 text-white cursor-pointer w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="gap-[9px] flex flex-col pl-[60px] lg:pl-[90px]">
              <p className={`text-[#FB9B00] text-lg lg:text-[38px] text-left font-bold lg:leading-10 uppercase ${locale === 'ar' ? "" : "font-Nulshock"}`}>
                {t("stake_token")}
              </p>
              <p className="text-md lg:text-[28px] text-left font-normal leading-4 lg:leading-9">
                {t("stake_token_description")}
              </p>
            </div>
            <Image
              src={isHovered ? "images/icons/Ellipse1-hover.svg" : "images/icons/Ellipse1.svg"}
              height={180}
              width={180}
              className="absolute left-[-60px] lg:left-[-90px] transition-transform duration-300 w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] object-cover"
              alt="logo"
            />
          </div>

          {/* Add Liquidity Section */}
          <div
            className="flex flex-col gap-[18px] justify-center rounded-r-[36px] bg-[rgba(255,255,255,0.1)] px-[14.5px] lg:px-10 h-[120px] lg:min-h-[179px] backdrop-blur-[29px] transition-colors duration-300 text-white cursor-pointer w-full"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <div className="gap-[9px] flex flex-col pl-[60px] lg:pl-[90px]">
              <p className={`text-[#FF5A03] text-lg lg:text-[38px] text-left font-bold lg:leading-10 uppercase ${locale === 'ar' ? "" : "font-Nulshock"}`}>
                {t("add_liquidity")}
              </p>
              <p className="text-md lg:text-[28px] text-left font-normal leading-4 lg:leading-9">
                {t("add_liquidity_description")}
              </p>
            </div>
            <Image
              src={isHovered1 ? "images/icons/Ellipse2-hover.svg" : "images/icons/Ellipse2.svg"}
              height={180}
              width={180}
              className="absolute left-[-60px] lg:left-[-90px] transition-transform duration-300 w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] object-cover"
              alt="logo"
            />
          </div>

          {/* Incentives and Bonuses Section */}
          <div
            className="flex flex-col gap-[18px] justify-center rounded-r-[36px] bg-[rgba(255,255,255,0.1)] px-[14.5px] lg:px-10 h-[120px] lg:min-h-[179px] backdrop-blur-[29px] transition-colors duration-300 text-white cursor-pointer w-full"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div className="gap-[9px] flex flex-col pl-[60px] lg:pl-[90px]">
              <p className={`text-[#FB9B00] text-lg lg:text-[38px] text-left font-bold lg:leading-10 uppercase ${locale === 'ar' ? "" : "font-Nulshock"}`}>
                {t("incentive_bonuses")}
              </p>
              <p className="text-md lg:text-[28px] text-left font-normal leading-4 lg:leading-9">
                {t("incentive_bonuses_description")}
              </p>
            </div>
            <Image
              src={isHovered2 ? "images/icons/Ellipse3-hover.svg" : "images/icons/Ellipse3.svg"}
              height={180}
              width={180}
              className="absolute left-[-60px] lg:left-[-90px] transition-transform duration-300 w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] object-cover"
              alt="logo"
            />
          </div>
        </div>
        <div className="flex items-center cursor-pointer bg-[#FAC43D] rounded-full py-2 lg:py-[19px] px-[25.5px] z-20">
          <p className={`text-base lg:text-[28px] leading-8 text-[#291A15] font-bold uppercase ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("start_earning")}</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
