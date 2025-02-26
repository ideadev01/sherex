"use client"
import { useRef, useState } from 'react';
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/router';
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface SliderData {
  id: number
  icon: string
  text: string
  desc: string
}

const sliderData: SliderData[] = [
  { id: 0, icon: "transaction", text: "lightinig_fast", desc: "lightinig_fast_description" },
  { id: 1, icon: "transparent", text: "Secure", desc: "Secure_description" },
  { id: 2, icon: "lowfee", text: "low_fee", desc: "low_fee_description" },
  { id: 3, icon: "exclusive", text: "exclusive_Memecoins", desc: "exclusive_Memecoins_description" },
  { id: 4, icon: "loyalty", text: "loyaty_rewards", desc: "loyaty_rewards_description" },
]
const slides = [
  {
    id: 1,
    img: "images/icons/bitcoin.svg",
    title: "swap_token",
    description: "swap_token_des",
    buttonText: "swap",
  },
  {
    id: 2,
    img: "images/icons/trading.svg",
    title: "limit_order_trading",
    description: "limit_order_des",
    buttonText: "limit_order",
  },
  {
    id: 3,
    img: "images/icons/order.svg",
    title: "twap_large",
    description: "twap_large_description",
    buttonText: "twap",
  },
];
const Section1 = () => {
  const t = useTranslations();
  const { locale } = useRouter();
  const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>({});

  const handleMouseEnter = (index: number) => {
    setHoverStates((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index: number) => {
    setHoverStates((prev) => ({ ...prev, [index]: false }));
  };

  const sliderRef = useRef<Slider | null>(null)  // Correct type for sliderRef
  const settings = {
    className: "right",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    dots: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div data-aos="fade-down" id="trading"
      className="relative h-auto w-full flex flex-col bg-gradient"
    >
      <div className="flex flex-col justify-center items-center gap-14 py-[85px] px-5 lg:px-[150px] z-30">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className={`text-white text-4xl lg:text-[37px] text-center font-bold leading-[44.4px] tracking-[0%] ${locale === 'ar' ? "" : "font-Nulshock"}`}>
            {t("why_trade")}
          </h1>
          <p className="text-white text-lg text-center font-normal w-full lg:w-1/2">
            {t("answer_trade")}
          </p>
        </div>
        <div className="lg:hidden w-full relative">
          <Slider arrows={false} {...settings}>
            {sliderData.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] pt-[44px]  backdrop-blur-[29px] transition-colors duration-300 hover:bg-gradient-to-t to-[#FF5A03] from-[#FAC43D] text-white hover:text-black cursor-pointer z-20 h-[295px]"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              >
                <div className='flex justify-center mb-[18px] h-[30%]'>
                  <Image
                    src={hoverStates[item.id] ? `images/icons/${item.icon}-hover.svg` : `images/icons/${item.icon}.svg`}
                    alt="logo"
                    height={55}
                    width={55}
                    priority
                  />
                </div>
                <div className="gap-[9px] flex flex-col justify-center items-center">
                  <p className={`text-white text-lg text-center font-bold leading-5 ${locale === 'ar' ? "" : "font-Nulshock"}`}>
                    {t(item.text)}
                  </p>
                  <p className="text-base text-center font-semibold leading-5">
                    {t(item.desc)}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 2xl:grid-cols-5 gap-[41px]">
          {sliderData.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] pt-[44px]  backdrop-blur-[29px] transition-colors duration-300 hover:bg-gradient-to-t to-[#FF5A03] from-[#FAC43D] text-white hover:text-black cursor-pointer z-20 h-[295px]"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <div className='flex justify-center mb-[18px] h-[30%]'>
                <Image
                  src={hoverStates[item.id] ? `images/icons/${item.icon}-hover.svg` : `images/icons/${item.icon}.svg`}
                  alt="logo"
                  height={55}
                  width={55}
                  priority
                />
              </div>
              <div className="gap-[9px] flex flex-col justify-center items-center">
                <p className={`text-white text-lg text-center font-bold leading-5 ${locale === 'ar' ? "" : "font-Nulshock"}`}>
                  {t(item.text)}
                </p>
                <p className="text-base text-center font-semibold leading-5">
                  {t(item.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a href="https://app.sherex.io" target="_blank" rel="noopener noreferrer">
          <div
            className="flex items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D]  rounded-md py-2 px-4"
          >
            <p className="text-base text-white font-semibold">{t("start_trading_now")}</p>
          </div>
        </a>
      </div>
      <div className="w-full relative h-full flex flex-col justify-center items-center gap-14 lg:gap-[44px]  px-5 md:px-24 lg:px-[150px] z-30">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className={`text-white text-4xl lg:text-[37px] text-center font-bold leading-[44.4px] tracking-[0%] ${locale === 'ar' ? "" : "font-Nulshock"}`}>
            {t("Trade_ease")}
          </h1>
          <p className="text-[#FAC43D] text-lg text-center font-normal ">
            {t("Trade_seamless")}
          </p>
        </div>
        <div className="lg:hidden w-full relative " >
          <Slider ref={sliderRef} arrows={false} {...settings}>
            <div className='flex flex-col relative group pt-[130px]'>
              <div className="flex flex-col gap-[18px] justify-end py-2 items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] min-h-[286px] backdrop-blur-[29px] transition-colors duration-300 text-white cursor-pointer mb-10">
                <Image
                  src="images/icons/bitcoin.svg"
                  height={255}
                  width={255}
                  className="absolute -top-[50%] grayscale transition-transform duration-300 group-hover:-rotate-[15deg] group-hover:grayscale-0"
                  alt="logo"
                />
                <div className="gap-[9px] flex flex-col justify-center items-center">
                  <p className={`text-[#FB9B00] text-[28px] text-center font-bold leading-8 ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("swap_token")}</p>
                  <p className="text-lg text-center font-normal leading-6">{t("swap_token_des")}</p>
                </div>
              </div>
              <div className="flex items-center cursor-pointer border-[#FB9B00] border border-solid rounded-2xl py-4 w-full group-hover:bg-[#FB9B00] pt-5">
                <p className={`w-full text-[28px] leading-8 text-[#FB9B00] font-bold uppercase text-center group-hover:text-white ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("swap")}</p>
              </div>
            </div>
            <div className='flex flex-col gap-3.5 relative group pt-[130px]'>
              <div className="flex flex-col gap-[18px] justify-end py-2 items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] min-h-[286px] backdrop-blur-[29px] transition-colors duration-300 text-white cursor-pointer mb-10">
                <Image
                  src="images/icons/trading.svg"
                  height={255}
                  width={255}
                  className="absolute -top-[50%] grayscale transition-transform duration-300 group-hover:rotate-[21deg] group-hover:grayscale-0"
                  alt="logo"
                />
                <div className="gap-[9px] flex flex-col justify-center items-center">
                  <p className={`text-[#FB9B00] text-[28px] text-center font-bold leading-8 ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("limit_order_trading")}</p>
                  <p className="text-lg text-center font-normal leading-6">{t("limit_order_des")}</p>
                </div>
              </div>
              <div className="flex items-center cursor-pointer border-[#FB9B00] border border-solid rounded-2xl py-4 w-full group-hover:bg-[#FB9B00]">
                <p className={`w-full text-[28px] leading-8 text-[#FB9B00] font-bold uppercase text-center group-hover:text-white ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("limit_order")}</p>
              </div>
            </div>
            <div className="relative flex flex-col gap-3.5 cursor-pointer group pt-[130px] ">
              <div className="flex flex-col gap-[18px] justify-end py-2 items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] min-h-[286px] backdrop-blur-[29px] transition-colors duration-300 text-white mb-10">
                <Image
                  src="images/icons/order.svg"
                  height={255}
                  width={255}
                  className="absolute -top-[50%] grayscale -rotate-[30deg] transition-transform duration-300 group-hover:-rotate-[0deg] group-hover:grayscale-0"
                  alt="logo"
                />
                <div className="gap-[9px] flex flex-col justify-center items-center">
                  <p className={`text-[#FB9B00] text-[28px] text-center font-bold leading-8 group-hover:text-white ${locale === 'ar' ? "" : "font-Nulshock"}`} >{t("twap_large")}</p>
                  <p className="text-lg text-center font-normal leading-6 group-hover:text-white">{t("twap_large_description")}</p>
                </div>
              </div>
              <div className="flex items-center cursor-pointer border-[#FB9B00] border border-solid rounded-2xl py-4 w-full group-hover:bg-[#FB9B00]">
                <p className={`w-full text-[28px] leading-8 text-[#FB9B00] font-bold uppercase text-center group-hover:text-white ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("twap")}</p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 gap-[150px] lg:gap-[57px] min-h-[566px] items-end ">
          <div className='flex flex-col gap-3.5 relative group'>
            <div className="flex flex-col gap-[18px] justify-end py-2 items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] min-h-[286px] backdrop-blur-[29px] transition-colors duration-300 text-white cursor-pointer">
              <Image
                src="images/icons/bitcoin.svg"
                height={255}
                width={255}
                className="absolute -top-[50%] grayscale transition-transform duration-300 group-hover:-rotate-[15deg] group-hover:grayscale-0"
                alt="logo"
              />
              <div className="gap-[9px] flex flex-col justify-center items-center">
                <p className={`text-[#FB9B00] text-[28px] text-center font-bold leading-8 ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("swap_token")}</p>
                <p className="text-lg text-center font-normal leading-6">{t("swap_token_des")}</p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer border-[#FB9B00] border border-solid rounded-2xl py-4 w-full group-hover:bg-[#FB9B00]">
              <p className={`w-full text-[28px] leading-8 text-[#FB9B00] font-bold uppercase text-center group-hover:text-white ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("swap")}</p>
            </div>
          </div>
          <div className='flex flex-col gap-3.5 relative group'>
            <div className="flex flex-col gap-[18px] justify-end py-2 items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] min-h-[286px] backdrop-blur-[29px] transition-colors duration-300 text-white cursor-pointer">
              <Image
                src="images/icons/trading.svg"
                height={255}
                width={255}
                className="absolute -top-[50%] grayscale transition-transform duration-300 group-hover:rotate-[21deg] group-hover:grayscale-0"
                alt="logo"
              />
              <div className="gap-[9px] flex flex-col justify-center items-center">
                <p className={`text-[#FB9B00] text-[28px] text-center font-bold leading-8 ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("limit_order_trading")}</p>
                <p className="text-lg text-center font-normal leading-6">{t("limit_order_des")}</p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer border-[#FB9B00] border border-solid rounded-2xl py-4 w-full group-hover:bg-[#FB9B00]">
              <p className={`w-full text-[28px] leading-8 text-[#FB9B00] font-bold uppercase text-center group-hover:text-white ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("limit_order")}</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-3.5 cursor-pointer group">
            <div className="flex flex-col gap-[18px] justify-end py-2 items-center rounded-2xl bg-[rgba(255,255,255,0.1)] px-[14.5px] min-h-[286px] backdrop-blur-[29px] transition-colors duration-300 text-white">
              <Image
                src="images/icons/order.svg"
                height={255}
                width={255}
                className="absolute -top-[50%] grayscale -rotate-[30deg] transition-transform duration-300 group-hover:-rotate-[0deg] group-hover:grayscale-0"
                alt="logo"
              />
              <div className="gap-[9px] flex flex-col justify-center items-center">
                <p className={`text-[#FB9B00] text-[28px] text-center font-bold leading-8 group-hover:text-white ${locale === 'ar' ? "" : "font-Nulshock"}`} >{t("twap_large")}</p>
                <p className="text-lg text-center font-normal leading-6 group-hover:text-white">{t("twap_large_description")}</p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer border-[#FB9B00] border border-solid rounded-2xl py-4 w-full group-hover:bg-[#FB9B00]">
              <p className={`w-full text-[28px] leading-8 text-[#FB9B00] font-bold uppercase text-center group-hover:text-white ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("twap")}</p>
            </div>
          </div>
        </div>

        <a href="https://app.sherex.io" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-full py-2 lg:py-[19px] px-[57.5px] mb-10">
            <p className={`ext-base lg:text-[28px] leading-8 text-white font-semibold uppercase ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("trade_now")}</p>
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