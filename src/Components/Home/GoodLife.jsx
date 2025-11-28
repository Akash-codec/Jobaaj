import React, { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    key: "jobaaj",
    title: "Jobaaj",
    stat1: "150+",
    stat1Desc:
      "Partner Companies Hiring Across Industries through jobaaj, one of the best job portals in India",
    stat2: "100k+",
    stat2Desc:
      "Professionals have secured high-paying roles through our job search portal",
    cta: { type: "button", onClick: null, label: "Search Job" }, // keep as button, no handler
    rightImage:
      "/Home/GoodLife/product_image_1.webp",
    rightCaption: "Jobaaj connects talent with top companies",
    logo: "/Navbar/logoNew.webp",
  },
  {
    key: "stories",
    title: "Jobaaj News",
    stat1: "500+",
    stat1Desc:
      "Daily updates on career trends, market insights, and industry news delivered through Jobaaj News",
    stat2: "1M+",
    stat2Desc:
      "Readers trust Jobaaj News for accurate, relevant, and positive news updates",
    cta: {
      type: "a",
      href: "https://news.jobaaj.com/news-updates?utm_source=jobaaj_main&utm_medium=banner&utm_campaign=tracking",
      label: "Explore now",
    },
    rightImage:
      "/Home/GoodLife/product_image_3.webp",
    rightCaption: "Jobaaj News brings impactful updates to keep you informed",
    logo: "/Home/GoodLife/jobaaj_news_tab_logo.webp",
  },
  {
    key: "learnings",
    title: "Jobaaj Learnings",
    stat1: "124+",
    stat1Desc:
      "Freshers, professionals, and industry expert collaborating and excelling together",
    stat2: "25+",
    stat2Desc:
      "Expert Mentors, instructors, and Educators guiding you with knowledge and experience",
    cta: {
      type: "a",
      href: "https://www.jobaajlearnings.com/courses?utm_source=jobaaj_homepage&utm_medium=banner&utm_campaign=tracking",
      label: "Start Learning",
    },
    rightImage:
      "/Home/GoodLife/product_image_2.webp",
    rightCaption: "Jobaaj Learnings delivers certified, job-ready courses",
    logo: "/footer/d-logo.webp",
  },
  {
    key: "procapitas",
    title: "ProCapitas",
    stat1: "20K+",
    stat1Desc:
      "Finance enthusiasts connected with ProCapitas, part of Jobaaj Group.",
    stat2: "Expert Team",
    stat2Desc:
      "Specialists in financial services, dedicated to guidance towards financial learnings.",
    cta: {
      type: "a",
      href: "https://www.procapitas.com/news?utm_source=jobaaj_main&utm_medium=banner&utm_campaign=tracking",
      label: "Explore now",
    },
    rightImage:
      "/Home/GoodLife/product_image_4.webp",
    rightCaption:
      "ProCapitas offers expert financial updates for smarter money decisions",
    logo: "/footer/procapitas.webp",
  },
];
const GoodLife = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 7000, stopOnInteraction: false }));
  const [emblaLeftRef, emblaLeftApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay.current]
  );
  // Right slider (panels) - sync with left
  const [emblaRightRef, emblaRightApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "keepSnaps" },
    []
  );
  // sync embla events
  useEffect(() => {
    if (!emblaLeftApi) return;

    const onSelect = () => {
      const idx = emblaLeftApi.selectedScrollSnap();
      setSelectedIndex(idx % slides.length);

      if (emblaRightApi) emblaRightApi.scrollTo(idx);
    };

    emblaLeftApi.on("select", onSelect);
    onSelect();

    return () => {
      if (!emblaLeftApi) return;
      emblaLeftApi.off("select", onSelect);
    };
  }, [emblaLeftApi, emblaRightApi]);

  // when selectedIndex changes (e.g., user clicked tab), scroll both
  useEffect(() => {
    if (emblaLeftApi) emblaLeftApi.scrollTo(selectedIndex);
    if (emblaRightApi) emblaRightApi.scrollTo(selectedIndex);
  }, [selectedIndex, emblaLeftApi, emblaRightApi]);
  return (
    <section className="mt-15 max-w-7xl mx-auto relative">
        <div className="p-4">
          <h2 className="text-[25px] lg:text-[35px] max-w-lg font-bold">
          Good Life Begins With A Good Company
        </h2>
        <p className="text-gray-400 max-w-4xl ">
          Jobaaj is your gateway to a better career, whether you’re searching
          for your first job, planning a career switch, or aiming to upskill. As
          one of the best job portals in India, we connect you with curated job
          opportunities at top companies, offer industry-relevant courses, and
          provide expert career guidance. From trusted job consultancy services
          to a powerful job search portal, we help you find the right role
          faster. Join our community of professionals, explore India’s top job
          sites, and take the right direction toward a future where work feels
          right, because a good life begins with the right company and the right
          career path.
        </p>
        </div>
        <div className="flex flex-col lg:flex-row mt-2 justify-between pb-5 gap-5">
          {/* LEFT: Slider cards */}
          <div className="w-full lg:w-1/3 p-5">
            {/* mobile collapse indicators */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-2">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-4 h-1 rounded-full transition-all ${
                    selectedIndex === idx ? "bg-indigo-600 w-6" : "bg-gray-300"
                  }`}
                  onClick={() => emblaLeftApi && emblaLeftApi.scrollTo(idx)}
                />
              ))}
            </div>

            {/* Embla left */}
            <div className="mt-4 p-4 ">
              <div className="overflow-hidden" ref={emblaLeftRef}>
                <div className="flex gap-10 py-2">
                  {slides.map((s, idx) => (
                    <div key={s.key + idx} className="shrink-0 w-full mx-4">
                      <div className="flex flex-col gap-8">
                        <h3 className="md:hidden underline text-[25px]">
                          {s.title}
                        </h3>

                        <div className="">
                          <div className="stat-number text-xl font-bold">
                            {s.stat1}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {s.stat1Desc}
                          </p>
                        </div>

                        <div className="">
                          <div className="stat-number text-xl font-bold">
                            {s.stat2}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {s.stat2Desc}
                          </p>
                        </div>

                        <div
                          className="flex items-center justify-between mt-4 gap-4"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {s.cta.type === "a" ? (
                            <a
                              href={s.cta.href}
                              className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
                            >
                              {s.cta.label}
                            </a>
                          ) : (
                            <button
                              className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
                              type="button"
                            >
                              {s.cta.label}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: image panels */}
          <div className="w-full lg:w-2/3">
            {/* embla right */}
            <div className="overflow-hidden" ref={emblaRightRef}>
              <div className="flex">
                {slides.map((s) => (
                  <div key={s.key + "-right"} className="shrink-0 w-full p-5">
                    <div className="relative">
                      <img
                        className="w-full h-auto object-cover rounded-md"
                        loading="lazy"
                        alt={s.title}
                        src={s.rightImage}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div
                        className="absolute inset-0 flex flex-col justify-between rounded-md"
                        style={{
                          background:
                            "linear-gradient(0.17deg, rgba(58, 77, 217, 0.74) 7.64%, rgba(58, 77, 217, 0) 99.84%)",
                          borderRadius: 8,
                        }}
                      >
                        <div className="flex justify-between items-center px-4 py-3">
                          <div className="right-logo-image">
                            <img
                              src={s.logo}
                              alt={`${s.title} Logo`}
                              width="75"
                              height="56"
                              loading="lazy"
                            />
                          </div>
                          <div style={{ width: 32 }}>
                            <img
                              width="32"
                              height="32"
                              className="img-fluid"
                              loading="lazy"
                              alt="Copy Icon"
                              src="https://cdn.nishtyainfotech.com/content/jobaaj/static-assets/index/copy_icon.webp"
                            />
                          </div>
                        </div>

                        <div style={{ maxWidth: 470, padding: 10, margin: 10 }}>
                          <p className="text-white">{s.rightCaption}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* desktop tab icons row */}
        </div>
        <div className="hidden md:flex justify-around w-full mt-4 gap-6">
          {slides.map((s, idx) => (
            <div
              key={s.key + "-tab"}
              className={`cursor-pointer p-2 ${
                selectedIndex === idx ? "opacity-100 border-t-2 border-t-[#377dff]" : "opacity-60"
              }`}
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={s.logo}
                alt={`${s.title} tab`}
                width="90"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
  )
}

export default GoodLife