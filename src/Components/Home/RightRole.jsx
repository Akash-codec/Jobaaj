import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RightRole = () => {
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [autoplay.current]
  );
  const { jobs, loading } = useSelector((state) => state.jobs);

  if (loading) return null;
  if (!jobs || jobs.length === 0) return null;

  // Group jobs by category
  const categoryMap = jobs.reduce((acc, job) => {
    if (!acc[job.category]) acc[job.category] = { openings: 0, logos: [] };
    acc[job.category].openings += job.openings;
    acc[job.category].logos.push(job.companyLogo);
    return acc;
  }, {});

  // Convert to array for mapping
  const categories = Object.entries(categoryMap);
  return (
    <section className="mt-15 max-w-7xl mx-auto relative px-2">
      <div className="relative">
        {/* HEADER */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-[25px] lg:text-[35px] font-bold">
              Find The Right Role For You
            </h2>
            <p className="text-gray-500 text-base font-semibold">
              Apply to roles matching your skills from lakhs of trending
              options.
            </p>
          </div>

          <Link
            className="whitespace-nowrap underline"
            to="/jobs"
            target="_blank"
          >
            View all
          </Link>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="hidden md:flex absolute left-[-4%] top-[55%] -translate-y-1/2 
      w-10 h-10 bg-white shadow-md rounded-full items-center justify-center z-10"
        >
          <ChevronLeft size={22} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="hidden md:flex absolute right-[-4%] top-[55%] -translate-y-1/2 
      w-10 h-10 bg-white shadow-md rounded-full items-center justify-center z-10"
        >
          <ChevronRight size={22} />
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden mt-6" ref={emblaRef}>
          <div
            className="
          flex pl-4
          [&>div]:mr-4
          [&>div]:shrink-0
          [&>div]:w-[75%]
          sm:[&>div]:w-[50%]
          md:[&>div]:w-[27.33%]
        "
          >
            {categories.map(([category, data]) => {
              const logos = [...new Set(data.logos)].slice(0, 5);

              return (
                <div
                  key={category}
                  className="cursor-pointer"
                  onClick={() => {}}
                >
                  {/* CARD */}
                  <div
                    className="card flex flex-col rounded-md py-3.5 px-4.5 max-h-40"
                    style={{
                      border: "1px solid #E8E8F2",
                      boxShadow: "0px 6px 10px 0px #0000000D",
                    }}
                  >
                    <div className="card-body">
                      <div className="flex justify-between items-center">
                        <p className="m-0 text-lg font-bold">{category}</p>

                        <Link
                          to={`https://www.jobaaj.com/jobs?category=${category}`}
                          target="_blank"
                        >
                          <ChevronRight size={22} stroke="#377dff" />
                        </Link>
                      </div>

                      <p className="text-gray-400 text-sm font-bold mt-2 mb-3 tracking-wide">
                        {data.openings}+ Openings
                      </p>

                      {/* LOGOS */}
                      <div className="flex items-center relative">
                        {logos.map((logo, i) => (
                          <div
                            key={i}
                            className="overflow-hidden -ml-2"
                            style={{
                              zIndex: i + 1,
                              position: "relative",
                            }}
                          >
                            <img
                              width="40"
                              height="40"
                              loading="lazy"
                              src={logo}
                              alt="Company Icon"
                              className="object-cover rounded-full m-0"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* CARD END */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightRole;
