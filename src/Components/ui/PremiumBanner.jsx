import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PremiumBanner = () => {
  return (
    <div className="bg-[#0e08c7] max-h-[60px] text-white text-center py-3 flex items-center justify-center gap-5 flex-wrap sticky top-20">
      <p className="md:text-[22px] ">Placement Guarantee Plan</p>
      <Link
        to=""
        className="bg-[#ed4c78] text-white px-3 py-1.5 rounded-full hover:bg-[#ed4c78]/90 hover:-translate-y-1 transition"
      >
        Take a look <ChevronRight size={20} className="inline-block" />
      </Link>
    </div>
  );
};

export default PremiumBanner;
