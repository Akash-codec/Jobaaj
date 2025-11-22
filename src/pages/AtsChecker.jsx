import React from "react";

// hero image path
const heroImg = "/PlacementAssistance/Ats hero img.png";

const AtsChecker = () => (
  <div className="w-full min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#F4F8FF] via-white to-[#D9E6FF] px-0 py-0">
    {/* Left Side: Headline + Actions */}
    <div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-16 z-10">
     <span className="inline-block bg-[#E6DEFB] text-[#7d68e6] font-extrabold text-[1.09rem] px-6 py-2 rounded-full tracking-[0.06em] mb-8">
  ATS RESUME CHECKER
</span>
      <h1 className="font-black text-[2.8rem] md:text-[4rem] leading-tight text-gray-900 mb-2 mt-2">
        Is your resume <br />
        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-blue-400 bg-clip-text text-transparent">ATS-friendly?</span>
      </h1>
      <p className="mt-6 text-gray-500 text-xl max-w-[32rem]">
        Optimize your resume with our AI-powered ATS resume check, boost your ATS resume score, and land more interviews effortlessly.
      </p>
      <button className="w-fit mt-10 rounded-2xl px-8 py-4 bg-gradient-to-r from-[#b54cff] to-[#1976fc] text-white text-xl font-bold shadow-lg hover:scale-105 transition">
        Check Your ATS Score
      </button>
      <div className="flex mt-5 items-center gap-3">
        <span className="text-gray-400 text-base">PDF & DOCX, Max 2MB</span>
        <span className="text-yellow-500 text-xl">🔒</span>
        <span className="text-gray-500 text-base">Privacy guaranteed</span>
      </div>
    </div>

    {/* Right Side: The entire hero image */}
    <div className="relative w-full md:w-1/2 flex items-center justify-center min-h-[520px] px-2 py-12">
      <img
        src={heroImg}
        alt="ATS Resume Checker Demo"
        className="max-w-full max-h-[640px] rounded-2xl shadow-xl border border-gray-100 bg-white"
        draggable="false"
        style={{
          objectFit: "contain",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  </div>
);

export default AtsChecker;
