import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";

const Section3 = () => {
  const t = useTranslations();
  const { locale } = useRouter();
  return (
    <div data-aos="fade-down" id="launch"
      className="relative h-screen w-full flex flex-col bg-[#291A15]"
    >
      <Image
        src="/images/backgrounds/launch.png"
        height={680}
        width={1024}
        className="absolute top-20 lg:-top-20 lg:left-[20%] object-cover z-20"
        alt="logo"
      />
      <div className="flex flex-col w-full h-full justify-end items-center py-20 px-5 z-20">
        <div className="flex flex-col justify-center items-center gap-10 lg:gap-3">
          <h1 className={`text-white text-[27px] lg:text-[57px] text-center font-bold leading-9 lg:leading-[68.4px] tracking-[0%] ${locale === 'ar' ? "" : "font-Nulshock"}`}>
            {t("launch_memecoin")}
          </h1>
          <p className="text-[#FAC43D] text-base lg:text-[33px]  text-center font-normal w-full lg:w-2/3 leading-5 lg:leading-[44.94px]">
            {t("springboard")}
          </p>
        </div>
        <a href="https://app.sherex.io" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-105 hover:brightness-110 flex items-center cursor-pointer bg-[#FAC43D] rounded-full py-2 lg:py-[19px] px-[25.5px] mt-12">
          <p className={`text-base lg:text-[28px] leading-8 text-[#291A15] font-bold uppercase ${locale === 'ar' ? "" : "font-Nulshock"}`}>{t("launch_your_token")}</p>
        </a>
      </div>
      <div className="circle4"></div>
      <div className="circle5"></div>
    </div>
  )
}

export default Section3;