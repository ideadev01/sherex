import Image from "next/image";

const Section6 = () => {
  return (
    <div data-aos="fade-up"
      className="relative h-auto w-full flex flex-col bg-gradient-to-r from-[#291A15]  via-[#946842] to-[#291A15] px-[150px] pt-[115px] "
    >
      <div className="flex justify-between items-start w-full pb-[120px]">
        <div className="flex flex-col items-center gap-10 w-1/2">
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
            <p className="text-lg leading-8 text-white font-semibold uppercase">Live Chat</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-8 text-[#FF5A03] font-bold uppercase font-Nulshock">Quick Links</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/filledarrow.svg"
                height={8}
                width={8}
                className=""
                alt="logo" />
              <p className="text-white text-base font-normal">Earn</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/filledarrow.svg"
                height={8}
                width={8}
                className=""
                alt="logo" />
              <p className="text-white text-base font-normal">Trade</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/filledarrow.svg"
                height={8}
                width={8}
                className=""
                alt="logo" />
              <p className="text-white text-base font-normal">Community</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/filledarrow.svg"
                height={8}
                width={8}
                className=""
                alt="logo" />
              <p className="text-white text-base font-normal">GitHub</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/filledarrow.svg"
                height={8}
                width={8}
                className=""
                alt="logo" />
              <p className="text-white text-base font-normal">Terms of Service</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-8 text-[#FF5A03] font-bold uppercase font-Nulshock">Help and Support</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="text-white text-base font-normal">Support:</p>
              <p className="text-white text-base font-normal">info@sherex.com</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-white text-base font-normal">Phone:</p>
              <p className="text-white text-base font-normal">+1 234 567 8900</p>
            </div>
            <div className="flex items-center gap-2">
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
      </div>
      <div className="flex justify-between items-center w-full pt-10 pb-4 border-t border-[rgba(255,255,255,0.17)]">
        <p className="text-white text-base font-normal">Copyright ©2025 Sherex. All Rights Reserved</p>
        <div className="flex items-center gap-2">
          <p className="text-white text-base font-normal">Payment We Accept:</p>
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