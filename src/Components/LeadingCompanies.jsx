import React from 'react';

const LeadingCompanies = ({ logos = [] }) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      <section className="bg-white w-full mt-10 overflow-hidden">
        <div>
          <div className="mx-auto flex flex-col items-center gap-10 justify-between">
            <div className="mb-10 shrink-0 text-center lg:mb-0 lg:text-left">
              <h2 className="text-[25px] lg:text-[35px] font-bold leading-[20px] text-dark-text">
                Hired by Leading Companies
              </h2>
            </div>

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
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadingCompanies;
