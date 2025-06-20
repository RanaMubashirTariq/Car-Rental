import React from "react";

export const MobileAppSection = (): JSX.Element => {


  return (
    <section className="flex  items-center justify-between gap-8 py-12  px-16 w-full bg-white max-[1100px]:px-10 max-[1000px]:py-[40px] max-[680px]:px-[25px] max-[900px]:text-center max-[900px]:flex-col max-[480px]:gap-4">
      <div className="flex flex-col items-start gap-10 max-w-xl max-[900px]:items-center max-[900px]:w-[100%] max-[680px]:gap-5">
        <div className="space-y-6">
          <h2 className="text-[50px] w-[313px] font-bold text-defaultblack font-['Work_Sans',Helvetica] leading-tight max-[1100px]:text-[36px] max-[680px]:text-[26px] max-[900px]:w-[100%]">
            Download mobile app
          </h2>

          <p className="text-base text-[#00000099] m-0 font-['Work_Sans',Helvetica] leading-6 max-[680px]:text-[14px] max-[480px]:text-[13px]">
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
            turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
            aliquet cras hendrerit enim condimentum. Condimentum interdum risus
            bibendum urna
          </p>
        </div>

        <div className="flex gap-10 flex-wrap stify-center max-[480px]:space-x-0  max-[480px]:gap-2">
            <button className="flex items-center justify-center gap-2 w-[173px] h-[50px] bg-black border border-white border-opacity-20 rounded-lg p-2 max-[480px]:w-[100%]">
            <img className="h-8 object-contain" alt="Google Play" src="/icon-1.png" />
                 <div className="flex flex-col items-start">
                      <p className="text-white text-xs font-['poppins']">Download on the</p>
                      <h3 className="text-white text-sm font-['poppins']">App Store</h3>
                 </div>
            </button>
            <button className="flex items-center justify-center gap-2 w-[173px] h-[50px] bg-black border border-white border-opacity-20 rounded-lg p-2 max-[480px]:w-[100%] max-[480px]:mt-3">
            <img className="h-8 object-contain" alt="Google Play" src="/icon-2.png" />
                 <div className="flex flex-col items-start">
                      <p className="text-white text-xs font-['poppins']">GET IT ON</p>
                      <h3 className="text-white text-sm font-['poppins']">Google Play</h3>
                 </div>
            </button>
          </div>
      </div>

      <div className="relative flex justify-center max-[900px]:hidden">
        {/* First phone (back) */}
        <div className="relative w-[267px] h-[540px] mt-10  ">
          <div className="absolute w-[236px] h-[512px]  top-3.5 left-4 bg-white rounded-[20px]" />
          <div
            className="absolute w-[267px] h-[540px]  top-left-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/iphone-14-pro---silver---portrait-1.png)",
            }}
          />
        </div>

        {/* Second phone (front) */}
        <div className="relative w-[267px] h-[540px] -ml-20 ">
          <div className="absolute w-[235px] h-[509px]  top-[15px] left-4 bg-white rounded-[20px]" />
          <div
            className="absolute w-[267px] h-[540px]  top-0 left-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/iphone-14-pro---silver---portrait-1.png)",
            }}
          />
        </div>
      </div>
    </section>
  );
};
