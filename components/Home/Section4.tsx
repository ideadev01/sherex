import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

const Section4 = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
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
      <div className="flex flex-col h-auto items-start gap-[44px] w-full my-[85px] px-5 lg:px-[150px]">
        <div className="flex flex-col w-full items-start z-20">
          <div className="flex flex-col justify-center  gap-6">
            <h1 className={`text-white text-[27px] lg:text-[37px] font-bold leading-[44.4px] tracking-[0%] uppercase text-center lg:text-left ${locale === 'ar' ? "" : "font-Nulshock"}`}>
              {t("join_pack")}
            </h1>
            <p className="text-white text-sm lg:text-[26px] font-semibold w-full lg:w-2/3 text-center lg:text-left">
              {t("join_pack_description")}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[60%] gap-[31px] text-center lg:text-left">
          <div className="relative group flex flex-col justify-center rounded-[13px] bg-[rgba(255,255,255,0.1)] px-[14.5px] backdrop-blur-[20px] transition-colors duration-300 text-white cursor-pointer w-full z-20 p-[10px]"
          >
            <h1 className={`text-white text-xs lg:text-[26px] font-bold leading-[31.2px] tracking-[0%] uppercase ${locale === 'ar' ? "" : "font-Nulshock"}`}>
              {t("meme_contests")}
            </h1>
            <p className="text-[#FAC43D] text-xs lg:text-[22px] font-normal ">
              {t("meme_contests_description")}
            </p>
          </div>
          <div className="relative group flex flex-col justify-center rounded-[13px] bg-[rgba(255,255,255,0.1)] px-[14.5px] backdrop-blur-[20px] transition-colors duration-300 text-white cursor-pointer w-full z-20 p-[10px]"
          >
            <h1 className={`text-white text-xs lg:text-[26px] font-bold leading-[31.2px] tracking-[0%] uppercase ${locale === 'ar' ? "" : "font-Nulshock"}`}>
              {t("community_governance")}
            </h1>
            <p className="text-[#FAC43D] text-xs lg:text-[22px] font-normal ">
              {t("community_governance_description")}
            </p>
          </div>
          <div className="relative group flex flex-col justify-center rounded-[13px] bg-[rgba(255,255,255,0.1)] px-[14.5px] backdrop-blur-[20px] transition-colors duration-300 text-white cursor-pointer w-full z-20 p-[10px]"
          >
            <h1 className={`text-white text-xs lg:text-[26px] font-bold leading-[31.2px] tracking-[0%] uppercase ${locale === 'ar' ? "" : "font-Nulshock"}`}>
              {t("exclusive_updates")}
            </h1>
            <p className="text-[#FAC43D] text-xs lg:text-[22px] font-normal ">
              {t("exclusive_updates_description")}
            </p>
          </div>
        </div>
        <a href="https://t.me/sherexcoin" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-105 hover:brightness-110 flex items-center cursor-pointer bg-[#FF5A03] rounded-full py-5 lg:py-2 px-5 z-20 w-full lg:w-auto justify-center">
          <p className="text-base leading-8 text-white font-semibold uppercase">{t("join_community")}</p>
        </a>
      </div>
    </div>
  )
}

export default Section4;