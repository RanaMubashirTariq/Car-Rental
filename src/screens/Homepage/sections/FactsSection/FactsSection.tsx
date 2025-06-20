import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for the facts cards to enable mapping
const factsData = [
  {
    id: 1,
    title: "Availability",
    description:
      "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
    iconUrl: "/clip-path-group.png",
  },
  {
    id: 2,
    title: "Comfort",
    description:
      "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
    iconUrl: "/clip-path-group-1.png",
    hasExtraImage: false,
  },
  {
    id: 3,
    title: "Savings",
    description:
      "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
    iconUrl: "/clip-path-group-2.png",
  },
];

export const FactsSection = (): JSX.Element => {
  return (
    <section className="flex justify-between gap-[20px] px-[72px] py-[60px] w-full max-[1200px]:px-[50px] max-[1100px]:px-[50px] max-[680px]:py-[40px] max-[640px]:flex-wrap max-[640px]:mx-auto max-[680px]:px-[25px]">
      {factsData.map((fact) => (
        <Card key={fact.id} className="bg-transparent border-none shadow-none max-[680px]:w-[100%]">
          <CardContent className="flex flex-col items-center gap-[29px] p-0 max-[1200px]:gap-[10px]">
            <div className="flex flex-col items-center gap-5 h-auto justify-center max-[1100px]:gap-[5px]">
                  <div className="relative w-16 h-16 max-[1100px]:w-[40px] max-[1100px]:h-[40px]">
                    <img
                      className="absolute  top-[0px] left-[0px] "
                      alt="G"
                      src={fact.iconUrl}
                    />
                  </div>

              <h3 className=" max-w-[336px] h-8 font-['Work_Sans'] font-semibold text-defaultblack text-2xl text-center leading-normal whitespace-nowrap overflow-hidden text-ellipsis max-[1100px]:text-xl max-[680px]:text-[18px] max-[680px]:w-[100%]">
                {fact.title}
              </h3>
            </div>
            <p className="max-w-[357px] h-auto font-['Inter',Helvetica] font-normal text-defaultblack text-base text-center tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-[680px]:text-sm max-[680px]:w-[100%]">
              {fact.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
