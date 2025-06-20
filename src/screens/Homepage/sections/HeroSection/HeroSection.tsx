import { CarIcon, GaugeIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the data for the stats cards
const statsData = [
  {
    icon: <CarIcon className="w-10 h-10" />,
    value: "540+",
    label: "Cars",
    iconSrc: "/car-7--1.svg",
  },
  {
    icon: null,
    value: "20k+",
    label: "Customers",
    iconSrc: "/icon.png",
  },
  {
    icon: null,
    value: "25+",
    label: "Years",
    iconSrc: "/group-11.png",
  },
  {
    icon: <GaugeIcon className="w-10 h-10" />,
    value: "20m+",
    label: "Miles",
    iconSrc: "/speedometer-1.svg",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center py-[60px] px-[72px] w-full gap-2.5 max-[1100px]:px-[50px] max-[1000px]:py-[40px] max-[680px]:px-[25px] ">
      <div className="flex flex-col items-center relative w-full rounded-[20px] bg-[#5937e0] px-[72px] py-[60px] gap-20 overflow-hidden max-[1100px]:px-[40px] max-[1100px]:py-[40px] max-[1000px]:gap-10 max-[680px]:px-[20px] max-[680px]:py-[20px] max-[680px]:gap-5">
        {/* Background image */}
        <img
          className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  max-w-[799px] max-h-[483px] max-[680px]:max-w-[500px] max-[680px]:max-h-[300px] max-[480px]:max-w-[300px] max-[480px]:max-h-[180px] object-cover opacity-30 z-0"
          alt="Background"
          src="/img-7.png"
        />

        {/* Heading content */}
        <div className="flex flex-col items-center gap-5 relative z-10">
          <h2 className="text-[50px] font-bold text-defaultwhite text-center font-['Work_Sans',Helvetica] max-w-[756px] max-[1100px]:text-[36px] max-[680px]:text-[26px]">
            Facts In Numbers
          </h2>

          <div className="max-w-[712px] text-base font-normal text-defaultwhite text-center font-['Work_Sans',Helvetica] overflow-hidden text-ellipsis">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
            fermentum
          </div>
        </div>

        {/* Stats cards */}
        <div className="flex justify-center items-start gap-16 w-full max-[1100px]:gap-5 max-[1000px]:flex-wrap">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="w-60 rounded-[20px] overflow-hidden bg-white max-[480px]:w-[100%]"
            >
              <CardContent className="flex items-center gap-4 p-4">
                <div className="w-[72px] h-[68px] max-[680px]:w-[50px] max-[680px]:h-[50px] bg-[#ff9d0b] rounded-xl overflow-hidden flex items-center justify-center">
                  {stat.icon ? (
                    stat.icon
                  ) : (
                    <img
                      className="w-10 h-10 max-[680px]:w-[16px] max-[680px]:h-[16px]"
                      alt={stat.label}
                      src={stat.iconSrc}
                    />
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 max-[680px]:gap-1">
                  <div className="font-bold text-2xl text-black font-['Work_Sans',Helvetica] max-[1000px]:text-[18px] max-[680px]:text-[16px]">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-base text-[#00000099] font-['Work_Sans',Helvetica] max-[680px]:text-[14px]">
                    {stat.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
