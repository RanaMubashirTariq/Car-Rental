import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const MainHeroSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    { id: 1, label: "Car type", icon: "/selectarrow-1.svg" },
    { id: 2, label: "Place of rental", icon: "/selectarrow.svg" },
    { id: 3, label: "Place of return", icon: "/selectarrow.svg" },
    {
      id: 4,
      label: "Rental date",
      icon: "/end-adornment.svg",
      isCalendar: true,
    },
    {
      id: 5,
      label: "Return date",
      icon: "/end-adornment.svg",
      isCalendar: true,
    },
  ];

  return (
    <section className="flex flex-col items-center px-[72px] py-0 w-full max-[1100px]:px-[50px] max-[680px]:px-[25px] ">
      <div className="flex flex-col items-start justify-center w-full h-[660px] bg-[#5937e0] rounded-[40px] overflow-hidden px-[72px] py-0 relative max-[1000px]:h-[500px] max-[680px]:h-[400px] max-[1000px]:px-[40px] max-[1000px]:px-[20px] max-[680px]:px-[10px] max-[680px]:h-[300px] max-[680px]:rounded-[20px]">
        <div className="absolute w-[713px] h-[366px] top-[323px] left-[455px] max-[1000px]:w-[500px] max-[1000px]:h-[200px] max-[1000px]:top-[110px] max-[1000px]:left-[150px] max-[680px]:w-[300px] max-[680px]:h-[150px] max-[680px]:top-[150px] max-[680px]:left-[100px]">
          <img
            className="absolute w-[713px] h-[337px] top-0 left-0"
            alt="Car"
            src="/car-2-1.png"
          />
        </div>

        <div className="flex items-center gap-11 relative">
          <div className="flex flex-col items-start gap-[33px] pt-[90px] pb-0 px-0  max-[1300px]:pt-[0px] max-[1000px]:items-center">
            <div className="flex flex-col w-[686px] items-start gap-[27px] relative max-[1300px]:w-[500px] max-[1300px]:gap-[10px] max-[1100px]:w-[430px] max-[1000px]:w-[100%] max-[1000px]:items-center">
              <img
                className="absolute w-[1296px] h-[660px] top-[-168px] left-[-72px] max-[1000px]:w-[1000px] max-[1000px]:h-[400px] max-[1000px]:top-[-100px] max-[1000px]:left-[-50px]"
                alt="Group"
                src="/group-1.png"
              />

              <h1 className="relative w-[686px] h-[145px] mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-bold text-defaultwhite text-6xl max-[1300px]:text-5xl max-[1300px]:w-[500px] max-[1300px]:h-[120px] max-[1100px]:w-[400px] max-[1100px]:text-4xl max-[1000px]:text-3xl max-[680px]:text-2xl max-[1100px]:h-[100px] max-[1000px]:w-[100%] max-[1000px]:h-[50px] max-[680px]:h-auto max-[1000px]:text-center tracking-[0] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Experience the road like never before
              </h1>

              <p className="relative w-[464px] h-14 [font-family:'Work_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-[1100px]:w-[350px] max-[1000px]:w-[100%] max-[1000px]:text-center max-[680px]:text-sm max-[375px]:text-xs max-[370px]:h-16">
                Aliquam adipiscing velit semper morbi. Purus non eu cursus
                porttitor tristique et gravida. Quis nunc interdum gravida
                ullamcorper
              </p>
            </div>

            <Button className="h-10 bg-[#ff9d0b] hover:bg-[#e68c0a] text-white rounded-xl px-7 py-[13px] max-[500px]:w-[100%]">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-base">
                View all cars
              </span>
            </Button>
          </div>

          <Card className="w-[416px] bg-defaultwhite rounded-[20px] overflow-hidden border-none max-[1100px]:w-[300px] max-[1000px]:hidden">
            <CardContent className="flex flex-col items-center gap-10 p-10 max-[1100px]:p-5">
              <h2 className="[font-family:'Work_Sans',Helvetica] font-semibold text-black text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Book your car
              </h2>

              <div className="flex flex-col items-center gap-5 w-full">
                {formFields.map((field) => (
                  <div
                    key={field.id}
                    className="flex flex-col items-start gap-1.5 w-full"
                  >
                    <Select>
                      <SelectTrigger className="w-full bg-neutral-50 rounded-xl px-4 py-[9px] border-none">
                        <SelectValue
                          placeholder={field.label}
                          className="[font-family:'Work_Sans',Helvetica] font-normal text-defaultblack text-base tracking-[0] leading-5"
                        />
                        {field.isCalendar ? (
                          <div className="w-4 h-4 bg-[url(/end-adornment.svg)] bg-[100%_100%]" />
                        ) : (
                          <img
                            className="w-4 h-4"
                            alt="Selectarrow"
                            src={field.icon}
                          />
                        )}
                      </SelectTrigger>
                    </Select>
                  </div>
                ))}
              </div>

              <Button className="w-full h-10 bg-[#ff9d0b] hover:bg-[#e68c0a] text-white rounded-xl px-7 py-[13px]">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-base">
                  Book now
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
