import React from "react";

const BrandMarquee = ({ logos = [] }) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      <div className="scroller-container relative w-full flex-1 overflow-hidden">
        <div className="animate-scroll flex gap-10 w-max">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="mx-10 flex h-[90px] shrink-0 items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                height={110}
                className="h-full w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandMarquee;
