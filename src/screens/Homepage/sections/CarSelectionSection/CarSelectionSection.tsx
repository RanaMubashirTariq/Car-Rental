import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

// Car data for mapping
const carData = [
  {
    id: 1,
    brand: "Mercedes",
    type: "Sedan",
    price: 25,
    image: "/img-1.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
  {
    id: 2,
    brand: "Mercedes",
    type: "Sport",
    price: 50,
    image: "/img-2.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
  {
    id: 3,
    brand: "Mercedes",
    type: "Sedan",
    price: 45,
    image: "/img-3.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
  {
    id: 4,
    brand: "Porsche",
    type: "Suv",
    price: 40,
    image: "/img-4.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
  {
    id: 5,
    brand: "Toyota",
    type: "Sedan",
    price: 35,
    image: "/img-5.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
  {
    id: 6,
    brand: "Porsche",
    type: "Suv",
    price: 50,
    image: "/img-6.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
];

export const CarSelectionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10   px-[72px] py-[60px] w-full max-[1100px]:px-[50px] max-[1000px]:py-[40px] max-[680px]:px-[25px] max-[680px]:gap-5">
      <div className="flex flex-col md:flex-row w-full max-w-[1296px] items-start md:items-end justify-between gap-4 md:gap-0">
        <h2 className="[font-family:'Work_Sans',Helvetica] font-bold text-defaultblack text-[50px] max-[1100px]:text-[36px] max-[680px]:text-[26px] tracking-[0] leading-tight">
          Choose the car that <br />
          suits you
        </h2>

        <Button
          variant="ghost"
          className="flex items-center gap-2 p-0 hover:bg-transparent"
        >
          <span className="[font-family:'Work_Sans',Helvetica] font-bold text-defaultblack text-xl max-[480px]:text-[14px]">
            View All
          </span>
          <ArrowRightIcon className="w-6 h-6 max-[480px]:w-[16px] max-[480px]:h-[16px]" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1296px] gap-6">
        {carData.map((car) => (
          <Card
            key={car.id}
            className="flex flex-col items-center gap-10 p-6 bg-neutral-50 rounded-[20px] overflow-hidden border-none max-[680px]:p-4 max-[480px]:gap-5"
          >
            <CardContent className="flex flex-col items-center gap-5 p-0 w-full max-[480px]:gap-2">
              <div
                className="w-full h-60 max-[480px]:h-[150px] bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${car.image})` }}
              />

              <div className="flex flex-col items-center gap-10 w-full max-[1100px]:gap-5">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="[font-family:'Work_Sans',Helvetica] font-semibold text-defaultblack text-2xl tracking-[0] leading-normal max-[680px]:text-[18px] max-[480px]:text-[16px]">
                      {car.brand}
                    </h3>
                    <p className="[font-family:'Work_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-normal max-[680px]:text-[14px] max-[480px]:text-[13px]">
                      {car.type}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#5937e0] text-2xl tracking-[0] leading-normal max-[680px]:text-[18px] max-[480px]:text-[16px]">
                      ${car.price}
                    </span>
                    <span className="[font-family:'Work_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-normal max-[680px]:text-[14px] max-[480px]:text-[13px]">
                      per day
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between w-full max-[1100px]:flex-col max-[1100px]:gap-2 max-[480px]:flex-row max-[360px]:flex-col">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 max-[1300px]:flex-col max-[1100px]:flex-row ">
                      <img
                        className="w-6 h-6 max-[480px]:w-[16px] max-[480px]:h-[16px]"
                        alt={feature.text}
                        src={feature.icon}
                      />
                      <span className="[font-family:'Work_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-normal max-[680px]:text-[14px] max-[480px]:text-[13px]">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-0 w-full">
              <Button className="w-full h-[50px] max-[480px]:h-[40px] max-[360px]:h-[30px] bg-[#5937e0] hover:bg-[#4a2dc0] text-defaultwhite rounded-xl [font-family:'Inter',Helvetica] font-semibold">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
