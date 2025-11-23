import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [searchMode, setSearchMode] = useState("AI");

  const items = [
    {
      src: "/Home/HeroSection/ai.webp",
      label: "AI Powered",
      className: "top-[3%] left-[18%]",
    },
    {
      src: "/Home/HeroSection/compass.webp",
      label: "Career Support",
      className: "top-[23%] left-[4%]",
    },
    {
      src: "/Home/HeroSection/tabler_briefcase-filled.webp",
      label: "Remote Jobs",
      className: "top-[42%] left-[18%]",
    },
    {
      src: "/Home/HeroSection/search-icon.webp",
      label: "Search with AI",
      className: "bottom-[23%] left-[4%]",
    },
    {
      src: "/Home/HeroSection/fluent_arrow-growth.webp",
      label: "Career Growth",
      className: "bottom-[5%] left-[16%]",
    },
    {
      src: "/Home/HeroSection/paperplane.webp",
      label: "Internships",
      className: "top-[2%] right-[22%]",
    },
    {
      src: "/Home/HeroSection/jobby-dna.webp",
      label: "Jobby DNA",
      className: "bottom-[4%] left-[43%]",
    },
  ];

  return (
    <section
      className="
        relative w-full text-white pt-10 overflow-hidden 
        bg-[linear-gradient(to_right,rgba(247,231,231,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,231,231,0.05)_1px,transparent_1px),radial-gradient(#0B0FEE_0%,#4B44D7_71%)]
        bg-[size:40px_40px,40px_40px,cover]
      "
    >
      {/* Floating Items */}
      {items.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.className} flex flex-col items-center pointer-events-none float-item`}
          style={{ animationDelay: `${i * 0.4}s` }} // stagger delay
        >
          <img loading="lazy" src={item.src} className="w-16 md:w-20" />
          {item.label && (
            <p className="text-xs md:text-sm mt-1 opacity-80">{item.label}</p>
          )}
        </div>
      ))}

      {/* Main Content */}
      <div className="lg:max-w-4xl md:max-w-2xl max-w-s mx-auto text-center mt-6 px-4 pb-12 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#362fb9] px-5.5 py-3 rounded-full border border-white backdrop-blur-sm">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-lucide="sparkles"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
          </span>
          <span className="text-lg font-bold">AI Powered Job Platform</span>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star-icon lucide-star"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
          </span>
        </div>

        <h1 className="text-[32px] md:text-[40px] lg:text-[56px] flex flex-wrap items-center justify-center font-bold my-7 leading-tight">
          Apply&nbsp;
          <span className="text-transparent bg-clip-text bg-linear-to-br from-[#ead459] to-[#f1ab70]">
            Smarter
          </span>
          &nbsp;and&nbsp;
          <span className="text-transparent bg-clip-text bg-linear-to-br from-[#ead459] to-[#f1ab70]">
            Get Hired
          </span>
          &nbsp;faster with Jobaaj
        </h1>

        <div className="max-w-2xl mx-auto">
          <p className="text-[16px] lg:text-[20px] md:text-[18px] text-gray-300 mt-4 text-lg font-bold">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-br from-[#ead459] to-[#f1ab70]">
              13,22,448
            </span>{" "}
            global opportunities to showcase your skills, build your CV, and get
            hired by your dream company
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-col md:flex-row items-center mx-auto justify-center gap-4 my-8">
          {/* AI Button */}
          <button
            onClick={() => setSearchMode("AI")}
            className={`
      px-6 py-3 rounded-full text-sm lg:text-base transition-all font-medium flex gap-2 items-center justify-center
      ${
        searchMode === "AI"
          ? "bg-linear-to-r from-[#8b52ff] to-[#367cff] text-white shadow-lg shadow-blue-500/30 border-transparent scale-105"
          : "bg-white/10 border-white/20 text-white hover:bg-linear-to-r hover:from-white/20 hover:to-white/5 border-2"
      }
    `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="sparkles"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            Search with AI
          </button>

          {/* Manual Button */}
          <button
            onClick={() => setSearchMode("Manual")}
            className={`
      px-8 py-3 text-sm lg:text-base rounded-full transition-all font-medium 
      ${
        searchMode === "Manual"
          ? "bg-[#e7992d] text-white shadow-lg shadow-blue-500/30 border-transparent scale-105"
          : "bg-white/10 border-white/20 text-white hover:bg-linear-to-r hover:from-white/20 hover:to-white/5 border-2"
      }
    `}
          >
            Search Manually
          </button>
        </div>
        {/* Search Area */}
        <div className="flex flex-col items-center justify-center gap-3 mb-12">
          <div className="relative">
            {/* AI SEARCH BOX */}
            {searchMode === "AI" && (
              <div className="flex items-center bg-white/10 border border-white/20 p-1 lg:p-3 rounded-full w-[350px] md:w-[480px] backdrop-blur-md">
                <input
                  type="text"
                  placeholder="e.g., Looking for a software developer job in delhi"
                  className="bg-transparent px-3 lg:px-5 py-1 lg:py-2.5 w-full placeholder:font-semibold placeholder:lg:text-lg placeholder:text-sm  placeholder-gray-300 outline-none"
                />
                <button className="flex items-center justify-center py-2 px-2 bg-blue-500 hover:bg-blue-600 rounded-full transition">
                  <ChevronRight size={25} strockWidth={4} />
                </button>
              </div>
            )}

            {/* MANUAL SEARCH BOX */}
            {searchMode === "Manual" && (
              <div className="flex items-center bg-white/10 border border-white/20 px-2 py-1 rounded-full w-[350px] md:w-[480px] backdrop-blur-md">
                <input
                  type="text"
                  placeholder="Skills / Departments / Companies..."
                  className="w-full bg-transparent text-white py-2 px-4 rounded-full placeholder-gray-300"
                />
                <div className="h-4 border-l border-l-gray-300"></div>
                <input
                  type="text"
                  placeholder="City, State"
                  className="w-full bg-transparent text-white py-2 px-4 rounded-full placeholder-gray-300"
                />
                <button className="hidden md:block bg-blue-500 hover:bg-blue-600 px-2 py-2 rounded-full text-white transition">
                  <Search />
                </button>
              </div>
            )}
          </div>

          {/* Popular AI Searches */}
          {searchMode === "AI" && (
            <div className="flex flex-wrap gap-2 max-w-[700px] mt-3">
              <p className="font-bold text-white pt-[2px]">
                Popular AI Searches:
              </p>
              {[
                "work from home",
                "Accountant",
                "product manager",
                "Data Analytics",
                "Data analyst",
              ].map((t, i) => (
                <span
                  key={i}
                  className="border border-white rounded-full px-3 py-1 text-white text-sm hover:bg-white/10 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Popular Manual Searches */}
          {searchMode === "Manual" && (
            <div className="flex flex-wrap gap-2 max-w-[700px] mt-3">
              <p className="font-bold text-white pt-[2px]">Popular Searches:</p>
              {[
                "Data Analyst",
                "Accountant",
                "Consulting",
                "Equity Research",
                "Data Analytics",
              ].map((t, i) => (
                <span
                  key={i}
                  className="border border-white rounded-full px-3 py-1 text-white text-sm hover:bg-white/10 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Image */}
      <div className="hidden lg:block absolute right-[-20%] xl:right-[-33%] bottom-0 z-10">
        <img
          loading="lazy"
          src="/Home/HeroSection/hero-section-image.webp"
          className="w-[280px] md:w-[310px]"
        />
      </div>
      </div>
    </section>
  );
}
