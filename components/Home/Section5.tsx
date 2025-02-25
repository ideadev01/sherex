import { useState } from "react";
import Image from "next/image";

const Section5 = () => {
  const [activeTab, setActiveTab] = useState<number>(-1); // Start with no active tab (-1)
  const tabs = [
    {
      title: "What is Sherex DEX?",
      content: "A decentralized exchange built exclusively for memecoins.",
    },
    {
      title: "How can I trade on Sherex?",
      content: "Connect your wallet, choose your memecoin, and start trading.",
    },
    {
      title: "Is Sherex secure?",
      content: "Built on BNB Smart Chain, Sherex uses audited smart contracts to protect user funds.",
    },
    {
      title: "What is Sherex DEX?",
      content: "A decentralized exchange built exclusively for memecoins.",
    },
    {
      title: "How can I trade on Sherex?",
      content: "Connect your wallet, choose your memecoin, and start trading.",
    },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(activeTab === index ? -1 : index); // Toggle between opening and closing the same tab
  };

  return (
    <div
      data-aos="fade-down"
      id="faqs"
      className="relative w-screen h-auto overflow-hidden"
      style={{
        backgroundImage: "url(/images/backgrounds/last_bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col h-auto items-start gap-[44px] w-full my-[85px] px-[150px]">
        <div className="flex flex-col w-full items-start z-20 pb-[100px]">
          <h1 className="text-[#FB9B00] text-4xl lg:text-[37px] font-bold leading-[44.4px] tracking-[0%] uppercase font-Nulshock">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex flex-col w-1/2 relative z-20 pb-[133px]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)} // Use the handleTabClick function
              className={`group flex justify-between items-center bg-white duration-300 cursor-pointer w-full z-20 py-6 px-4 ${
                activeTab === index ? "bg-gray-200" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-full h-6 w-6  ${
                    activeTab === index ? "bg-[#FF5A03]" : "bg-[#FB9B00]"
                  }`}
                ></div>
                <p className="text-black text-lg font-normal">{tab.title}</p>
              </div>
              <Image
                src="/images/icons/leftarrow.svg"
                width={10}
                height={10}
                alt="header"
                className={`transform transition-transform duration-300 ${
                  activeTab === index ? "rotate-90" : ""
                }`}
              />
            </div>
          ))}

          <div
            className={`w-full left-[90%] -top-10 absolute group flex flex-col justify-start rounded-[13px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] transition-all duration-500 text-white cursor-pointer z-10 p-[10px] min-h-[475px] pl-28 py-10 gap-10 ${
              activeTab === -1 ? "opacity-0" : "opacity-100"
            }`}
          >
            <h1 className="text-white text-4xl lg:text-[17px] font-bold leading-[20.4px] tracking-[0%] uppercase">
              {tabs[activeTab]?.title}
            </h1>
            <p className="text-white text-lg font-normal">{tabs[activeTab]?.content}</p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center z-20">
          <div className="flex items-center justify-center cursor-pointer bg-gradient-to-l to-[#FF5A03] from-[#FAC43D]  rounded-md py-2 px-4 z-20">
            <p className="text-base text-white font-semibold">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
