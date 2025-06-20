import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const BannerWrapperSection = (): JSX.Element => {
  return (
    <section className="py-[60px] px-[72px] w-full max-[1100px]:px-[50px] max-[1000px]:py-[40px] max-[680px]:px-[25px]">
      <Card className="bg-[#5937e0] rounded-[20px] overflow-hidden relative">
        <CardContent className="flex items-center justify-between gap-[102px] px-[86px] py-[58px] max-[1100px]:gap-10 max-[1100px]:px-[50px] max-[1000px]:px-[40px] max-[1000px]:py-[40] max-[800px]:flex-col max-[500px]:px-[20px] max-[500px]:py-[20px]">
          <div className="flex flex-col items-start max-w-[756px] max-[800px]:items-center">
            <h2 className="text-[50px] font-bold text-defaultwhite font-['Work_Sans',Helvetica] leading-normal mb-4 max-[1100px]:text-[36px] max-[680px]:text-[26px] max-[800px]:text-center">
              Enjoy every mile with adorable companionship.
            </h2>

            <p className="text-base font-normal text-defaultwhite font-['Work_Sans',Helvetica] leading-normal mb-[37px] max-w-[550px] max-[800px]:text-center max-[680px]:text-[14px] max-[360px]:text-[13px] max-[500px]:mb-2">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat
            </p>

            <div className="relative w-[464px] h-[60px] bg-white rounded-[20px] flex items-center max-[1100px]:w-[350px] max-[500px]:w-[100%] max-[680px]:h-[50px]">
              <span className="absolute left-[25px] font-['Inter',Helvetica] font-semibold text-gray-600 text-base max-[680px]:text-[14px] max-[360px]:text-[13px] ">
                City
              </span>
              <Input
                className="h-full border-none shadow-none pl-[70px] max-[680px]:pl-[50px]"
                placeholder=""
              />
              <Button className="absolute right-2.5 h-10 bg-[#ff9d0b] hover:bg-[#e68c0a] rounded-xl px-7 max-[680px]:h-[40px] max-[680px]:px-5">
                <span className="font-['Inter',Helvetica] font-semibold text-defaultwhite text-base max-[680px]:text-[14px] max-[360px]:text-[13px]">
                  Search
                </span>
              </Button>
            </div>
          </div>

          <img
            className="w-[380px] h-[380px] max-[1100px]:w-[300px] max-[1100px]:h-[300px] max-[1000px]:w-[250px] max-[1000px]:h-[250px] max-[680px]:w-[200px] max-[680px]:h-[200px]"
            alt="Car illustration"
            src="/car-3--2.svg"
          />
        </CardContent>
      </Card>
    </section>
  );
};
