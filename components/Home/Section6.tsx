import { useTranslations } from "next-intl";
import Image from "next/image";

const Section6 = () => {
  const t = useTranslations();
  return (
    <div data-aos="fade-down"
      className="relative h-auto w-full flex flex-col bg-gradient-to-r from-[#291A15]  via-[#946842] to-[#291A15] px-5 lg:px-[150px] pt-[115px] "
    >
      <div className="flex flex-col lg:flex-row gap-5  justify-between items-start w-full pb-10 lg:pb-[120px]">
        <div className="flex flex-col items-center justify-center gap-10 w-full lg:w-1/2">
          <Image
            src="/images/logo/footerLogo.svg"
            height={187}
            width={148}
            className=""
            alt="logo" />
          <div className="flex items-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D] rounded-lg py-2 px-[15px] gap-2">
            <Image
              src="/images/icons/liveChat.svg"
              height={16}
              width={12}
              className=""
              alt="logo" />
            <p className="text-base lg:text-lg leading-8 text-white font-semibold uppercase">{t("live_chat")}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-auto">
          <p className="text-lg leading-8 text-[#FF5A03] font-bold uppercase font-Nulshock text-center lg:text-left">{t("quick_link")}</p>
          <div className="flex lg:flex-col justify-between  gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/filledarrow.svg"
                height={8}
                width={8}
                className=""
                alt="logo" />
              <p className="text-white text-base font-normal">{t("earn")}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/filledarrow.svg"
                height={8}
                width={8}
                className=""
                alt="logo" />
              <p className="text-white text-base font-normal">{t("trade")}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/filledarrow.svg"
                height={8}
                width={8}
                className=""
                alt="logo" />
              <p className="text-white text-base font-normal">{t("community")}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/filledarrow.svg"
                height={8}
                width={8}
                className=""
                alt="logo" />
              <p className="text-white text-base font-normal">{t("github")}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/filledarrow.svg"
                height={8}
                width={8}
                className=""
                alt="logo" />
              <p className="text-white text-base font-normal">{t("term_service")}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-auto justify-center items-center lg:items-start">
          <p className="text-lg leading-8 text-[#FF5A03] font-bold uppercase font-Nulshock text-center lg:text-left">{t("help_support")}</p>
          <div className="flex flex-row lg:flex-col gap-2 justify-between w-full">
            <div className="flex items-center gap-2">
              <p className="text-white text-base font-normal">{t("support")}</p>
              <p className="text-white text-base font-normal">info@sherex.com</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-white text-base font-normal">{t("phone")}</p>
              <p className="text-white text-base font-normal">+1 234 567 8900</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Image
              src="/images/icons/git.png"
              height={20}
              width={20}
              className=""
              alt="logo" />
            <Image
              src="/images/icons/facebook.png"
              height={20}
              width={12}
              className=""
              alt="logo" />
            <Image
              src="/images/icons/instagram.png"
              height={20}
              width={20}
              className=""
              alt="logo" />
            <Image
              src="/images/icons/twitter.png"
              height={20}
              width={20}
              className=""
              alt="logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 justify-between items-center w-full pt-10 pb-4 border-t border-[rgba(255,255,255,0.17)]">
        <p className="text-white text-base font-normal">{t("copyright")}</p>
        <div className="flex items-center gap-2">
          <p className="text-white text-base font-normal">{t("payment")}</p>
          <Image
            src="/images/icons/card.png"
            height={30}
            width={30}
            className=""
            alt="logo" />
          <Image
            src="/images/icons/pay.png"
            height={30}
            width={30}
            className=""
            alt="logo" />
          <Image
            src="/images/icons/stripe.png"
            height={30}
            width={30}
            className=""
            alt="logo" />
          <Image
            src="/images/icons/paypal.png"
            height={30}
            width={30}
            className=""
            alt="logo" />
          <Image
            src="/images/icons/coin.png"
            height={30}
            width={20}
            className=""
            alt="logo" />
        </div>
      </div>
    </div>

  )
}

export default Section6;