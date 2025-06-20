import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for the information points
const infoPoints = [
  {
    number: 1,
    title: "Erat at semper",
    description:
      "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum dui ornare praesent. Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero at nulla nibh quis. Quis neque donec est scelerisque lectus bibendum. Ut a a donec ante in venenatis. Risus tortor adipiscing eget enim.",
  },
  {
    number: 2,
    title: "Urna nec vivamus risus duis arcu",
    description:
      "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  },
  {
    number: 3,
    title: "Lobortis euismod imperdiet tempus",
    description:
      "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
  },
  {
    number: 4,
    title: "Cras nulla aliquet nam eleifend amet et",
    description:
      "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero",
  },
];

export const InfoWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-wrap justify-center md:flex-nowrap items-center gap-8 p pl-[158px] pr-[72px] py-[60px] w-full max-[1100px]:pl-[50px] max-[1100px]:pr-[50px] max-[680px]:pr-[25px] max-[680px]:pl-[25px] max-[1000px]:py-[40px]">
      <div    className=" md:w-1/2 w-[550px] h-[350px] md:h-[549px] rounded-[20px] bg-cover bg-center bg-no-repeat max-[1000px]:hidden"
        style={{ backgroundImage: "url(../img.png)" }}
        aria-label="Information section image"
      />

      <div className="flex flex-col w-full  max-w-[550px] items-start gap-7 max-[1100px]:gap-5 max-[1000px]:w-[100%]">
        {infoPoints.map((point, index) => (
          <Card
            key={index}
            className="w-full border-none shadow-none bg-transparent"
          >
            <CardContent className="flex flex-col items-start gap-5 p-0">
              <div className="flex items-end gap-4 max-[680px]:gap-2 max-[680px]:items-center">
                <Badge className="w-8 h-8 flex items-center justify-center p-0 bg-[#5937e0] rounded-full text-defaultwhite font-semibold max-[680px]:text-[18px] max-[450px]:min-w-[20px] max-[450px]:min-h-[20px]">
                  {point.number}
                </Badge>
                <h3 className="font-['Work_Sans',Helvetica] font-semibold text-defaultblack text-xl tracking-[0] leading-normal max-[680px]:text-[18px] max-[450px]:text-[16px]">
                  {point.title}
                </h3>
              </div>
              <p className="font-['Work_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-normal overflow-hidden text-ellipsis line-clamp-3 max-[680px]:text-[14px] max-[450px]:text-[13px] max-[680px]:line-clamp-2">
                {point.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
