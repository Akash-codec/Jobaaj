import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    stars: 5,
    text: '"I used the ATS friendly resume template and passed multiple job portals smoothly"',
    name: "Prateek Gupta",
    role: "Product Design",
    initials: "PG",
    bgColor: "bg-pink-500",
  },
  {
    stars: 4,
    text: '"Thanks to the ats friendly resume maker, my resume looks professional and ATS ready."',
    name: "Dhruv Singh",
    role: "Software Developer",
    initials: "DS",
    bgColor: "bg-purple-500",
  },
  {
    stars: 5,
    text: '"Got my ATS resume score instantly and fixed the issues—I landed 2 interviews this week."',
    name: "Gavaksh Parashar",
    role: "Product Manager",
    initials: "GP",
    bgColor: "bg-purple-600",
  },
  {
    stars: 5,
    text: '"The ATS checker helped me understand what recruiters look for. Highly recommended!"',
    name: "Ananya Sharma",
    role: "UX Designer",
    initials: "AS",
    bgColor: "bg-blue-500",
  },
  {
    stars: 4,
    text: '"Best tool for resume optimization. My ATS score jumped from 65 to 92!"',
    name: "Rajesh Kumar",
    role: "Data Analyst",
    initials: "RK",
    bgColor: "bg-green-500",
  },
  {
    stars: 5,
    text: '"Within days of using this, I got shortlisted for 5 interviews. Game changer!"',
    name: "Priya Patel",
    role: "Marketing Manager",
    initials: "PP",
    bgColor: "bg-red-500",
  },
];

function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const getVisibleCards = () => {
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length],
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full bg-[#f8f9fb] py-14 flex justify-center items-center">
      <div className="max-w-7xl w-full px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Success Stories</h2>
          <p className="mt-3 text-xl text-gray-500">
            See how Jobaaj helped professionals land their dream jobs
          </p>
        </div>

        <div className="relative flex items-center justify-between gap-6">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition"
            style={{ transform: "translateX(-60px)" }}
          >
            <FaChevronLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex gap-6 justify-center w-full overflow-hidden">
            {visibleCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[330px] bg-white rounded-2xl shadow-lg p-8 flex flex-col min-h-[340px] transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(card.stars)].map((_, i) => (
                    <FaStar key={i} size={20} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg italic mb-6 flex-grow">{card.text}</p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full ${card.bgColor} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {card.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{card.name}</p>
                    <p className="text-sm text-gray-500">{card.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition"
            style={{ transform: "translateX(60px)" }}
          >
            <FaChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === currentIndex ? "bg-blue-500 w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
