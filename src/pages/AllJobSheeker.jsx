import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ServiceComponet from "../Components/ServiceComponet";
import YourInfo from "../Components/YourInfo";
const companies = [
  { name: "Deloitte", logo: "/All job-sheeker/Deloitte.png" },
  { name: "EY", logo: "/All job-sheeker/EY.png" },
  { name: "Grant Thornton", logo: "/All job-sheeker/grand-thortan-42.png" },
  { name: "KPMG", logo: "/All job-sheeker/KPMG.png" },
  { name: "PWC", logo: "/All job-sheeker/PWC.png" },
  { name: "Nomura", logo: "/All job-sheeker/nomura.jpg" },
];

const logos = [
  "/All job-sheeker/amazon.png",
  "/All job-sheeker/Deloitte.png",
  "/All job-sheeker/KPMG.png",
  "/All job-sheeker/google.png",
  "/All job-sheeker/PWC.png",
  "/All job-sheeker/EY.png",
  "/All job-sheeker/bmw.png",
  "/All job-sheeker/nomura.jpg",
];


const points = [
  "As per your career aspiration, our team will share with you hot job leads for 1 month.",
  "We will provide you a mixture of jobs from various sources.",
  "Be among the first few candidates to know about a job opening, get an email update, other details of concerned recruiters, and much more.",
  "Also we'll give you preference in being the first lot of resumes that get sent across to the recruiters we have a tie up with.",
];
// GSAP Marquee Component
const Marquee = ({ logos }) => {
  const marqueeRef = useRef(null);
  useEffect(() => {
    const elem = marqueeRef.current;
    gsap.to(elem, {
      x: "-50%",
      duration: 9,
      ease: "linear",
      repeat: -1,
    });
  }, []);
  return (
    <div className="overflow-hidden relative w-full">
      <div
        ref={marqueeRef}
        className="flex gap-18 whitespace-nowrap"
        style={{ width: "200%" }}
      >
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Brand Logo"
            className="inline-block opacity-60"
            style={{ height: "2.5rem", width: "80px" }}
          />
        ))}
      </div>
    </div>
  );
};

const AllJobSheeker = () => {
  // TIMER LOGIC
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(44);
  const [secs, setSecs] = useState(19);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecs(prev => {
        if (prev > 0) return prev - 1;
        if (mins > 0) {
          setMins(m => m - 1);
          return 59;
        }
        if (hours > 0) {
          setHours(h => h - 1);
          setMins(59);
          return 59;
        }
        if (days > 0) {
          setDays(d => d - 1);
          setHours(23);
          setMins(59);
          return 59;
        }
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [secs, mins, hours, days]);


  return (
    <div className="w-full relative bg-white overflow-x-hidden">
      {/* Team background & logo row */}
      <div className="relative w-full" style={{ minHeight: '220px' }}>
        <img
          src="/All job-sheeker/team_img.png"
          alt="team"
          className="w-full h-auto object-cover"
          style={{ minHeight: '180px', display: 'block' }}
        />
        <div
          className="
            absolute left-0 bottom-2 w-full
            flex justify-between lg:justify-evenly items-end
            gap-2 sm:gap-5 lg:gap-8
            px-2 sm:px-6 lg:px-12
          "
          style={{ zIndex: 10, marginBottom: '-18px' }}
        >
          {companies.map((c, i) => (
            <div
              key={i}
              className="
                bg-white rounded-full shadow-lg
                flex items-center justify-center
                w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                transition-all duration-300 hover:scale-110"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}>
              <img
                src={c.logo}
                alt={c.name}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <ServiceComponet/>
      {/* Services Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
        <div className="flex items-center justify-center gap-4 mb-6 md:mb-0 w-full md:w-1/3">
          <span>
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2l4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-xl font-medium">ATS Approved Resume Writing</span>
        </div>
        <div className="flex items-center justify-center gap-4 mb-6 md:mb-0 w-full md:w-1/3">
          <span>
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2l4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-xl font-medium">Placement Assistance by HR</span>
        </div>
        <div className="flex items-center justify-center gap-4 w-full md:w-1/3">
          <span>
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2l4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-xl font-medium">LinkedIn Optimization Service</span>
        </div>
      </div>

      {/* Services List Section */}
      <div className="bg-[#f5f8fc] mt-16 py-12 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center leading-snug">
          We'll Make Sure You Get Placed With <br className="hidden md:block" />
          The Best Firms In The Industry!
        </h1>
        <p className="text-center mt-2 text-gray-500">LAND YOUR DREAM JOB!</p>
        <div className="flex flex-wrap justify-center gap-8 mt-6 text-gray-500">
          <div className="flex items-center gap-2">
            <img src="/All job-sheeker/tick.svg" className="w-5 h-5 mt-1" /> Dedicated HR
          </div>
          <div className="flex items-center gap-2">
            <img src="/All job-sheeker/tick.svg" className="w-5 h-5 mt-1" /> 1 month continuous support
          </div>
          <div className="flex items-center gap-2">
            <img src="/All job-sheeker/tick.svg" className="w-5 h-5 mt-1" /> Job leads as per your requirements
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <img src="/All job-sheeker/Build-yourself.png" className="w-full max-w-lg mx-auto" />
          <div className="space-y-6">
            {points.map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src="/All job-sheeker/tick.svg" className="w-5 h-5 mt-1" />
                <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
              </div>
            ))}
            <button className="mt-3 bg-blue-600 text-white px-7 py-3 rounded-lg shadow hover:bg-blue-700 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* GSAP LOGO Marquee */}
      <div className="bg-[#f5f8fc] py-8">
        <h1 className="text-xl text-center my-8 font-bold mb-6">Get Placed in Top MNCs</h1>
        <Marquee logos={logos} />
      </div>

      {/* Resume Writing & LinkedIn Optimisation Section */}
      <div className="py-14 px-4 md:px-12 font-sans bg-white">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Resume Writing & LinkedIn Optimisation
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-500 mt-3">
          We understand the language, process and latest trends of resume writing which will
          <br className="hidden md:block" />
          land you to a job interview.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 mt-16 max-w-5xl mx-auto">
          {/* Row 1 */}
          <div className="flex items-start gap-5">
            <img src="/All job-sheeker/brainstorm.png" alt="ATS Technology" className="w-10 h-10 mt-1" />
            <div>
              <p className="font-bold text-lg mb-1">ATS TECHNOLOGY</p>
              <p className="text-gray-500 text-base">
                We utilize the same technology that most employers use to screen resumes &amp; ensure that you get through.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img src="/All job-sheeker/trophy.png" alt="Expert Writers" className="w-10 h-10 mt-1" />
            <div>
              <p className="font-bold text-lg mb-1">EXPERT WRITERS</p>
              <p className="text-gray-500 text-base">
                We understand the language, process and latest trends of resume writing which will land you to the job interview.
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex items-start gap-5">
            <img src="/All job-sheeker/clock.png" alt="Optimised Keyword" className="w-10 h-10 mt-1" />
            <div>
              <p className="font-bold text-lg mb-1">OPTIMISED KEYWORD</p>
              <p className="text-gray-500 text-base">
                Get a keyword optimised LinkedIn profile and resume to rank above other jobseekers.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img src="/All job-sheeker/box.png" alt="Customer Support" className="w-10 h-10 mt-1" />
            <div>
              <p className="font-bold text-lg mb-1">24*7 CUSTOMER SUPPORT</p>
              <p className="text-gray-500 text-base">
                We believe in 200% customer satisfaction and therefore have a dedicated team for feedback and support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TIMER SECTION */}
      <div className="w-full flex flex-col items-center mt-8 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-7">
          Register before the offer ends:
        </h1>
        <div className="flex gap-8 md:gap-14 justify-center items-end mb-2">
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-4xl font-bold">{days}</span>
            <span className="text-gray-500 text-lg mt-1">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-4xl font-bold">{hours}</span>
            <span className="text-gray-500 text-lg mt-1">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-4xl font-bold">{mins}</span>
            <span className="text-gray-500 text-lg mt-1">Mins</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-4xl font-bold">{secs}</span>
            <span className="text-gray-500 text-lg mt-1">Secs</span>
          </div>
        </div>
      </div>
      <div className="my-4 sm:my-8 mt-5 px-30">
        <img
          src="/All job-sheeker/turbo.jpg"
          alt="Turbo Charged LinkedIn"
          title="Turbo Charged LinkedIn"
          className="rounded-lg w-full h-auto object-contain"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 py-8 gap-8 max-w-[1400px] mx-auto">
        {/* Left column: Benefits */}
        <div className="flex flex-col justify-center flex-[2] w-full md:w-auto mb-8 md:mb-0">
          <h2 className="font-bold text-[1.7rem] md:text-[2.2rem] lg:text-3xl mb-3 text-center md:text-left">
            Get free additional benefits with the Complete Suite-
          </h2>
          <ul className="list-disc text-[1.15rem] md:text-[1.45rem] text-gray-600 space-y-2 pl-5 md:pl-8 text-center md:text-left font-normal">
            <li>
              A LinkedIn Turbo Charged Course (Understand the hacks, tricks, tips, and a deeper understanding of LinkedIn with this course)
            </li>
            <li>
              Additional benefits worth of Rs. 5,000+.
            </li>
          </ul>
        </div>
        {/* Right column: Badge */}
        <div className="flex flex-col justify-center items-center flex-1 w-full md:w-auto">
          <img
            src="/All job-sheeker/moneyback.png"
            alt="7 Day Money Back"
            className="w-40 h-40 md:w-56 md:h-56 object-contain mb-2"
            style={{ maxWidth: 280, maxHeight: 280 }}
          />
          <div className="text-gray-500 text-[1rem] md:text-[1.4rem] text-center font-normal leading-tight mt-3">
            *Only For Placement Assistance<br />Service
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-16 pb-6 bg-white">
        <div className="relative flex flex-row items-center justify-center w-full max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center w-full">
            Pick the perfect plan for you
          </h1>
          <img
            src="/All job-sheeker/price-arrow-1.webp"
            alt="Arrow"
            className="absolute right-0 top-5 md:top-7 w-16 h-12 md:w-20 md:h-16"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <p className="mt-4 text-2xl md:text-2xl text-center font-normal">
          We believe in getting the job done! <span className="text-3xl">😊</span>
        </p>
      </div>
      {/* Heading with arrow */}
      <div className="container mx-auto pt-5 pb-12 px-2">
        {/* Pricing cards */}
        <div className="relative flex flex-col md:flex-row md:gap-8 gap-5 mt-10 items-stretch justify-center">
          {/* Card 1: Placement Assistance */}
          <div className="flex flex-col shadow-lg h-full py-5 px-4 border-2 border-[#44a0fa] rounded-2xl w-full md:w-1/3 bg-white mx-auto relative min-w-[280px]">
            <h3 className="text-center mt-1 text-xl font-semibold">Placement Assistance Service</h3>
            <ul className="mt-4 space-y-2 text-base">
              <li className="flex items-center gap-2"><span className="text-blue-500 font-extrabold">✓</span> 1 Month of continuous expert support</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 font-extrabold">✓</span> Job leads tailored to your profile</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 font-extrabold">✓</span> Human assistance in identifying relevant roles</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 font-extrabold">✓</span> Personalized job suggestions based on your preference</li>
            </ul>
            <div className="px-3 mt-6">
              <div className="text-black font-bold text-xl">₹1,999</div>
              <div className="mt-1 flex gap-2 items-center">
                <span className="line-through text-gray-400 text-base">₹2,999</span>
                <span className="bg-blue-100 text-blue-600 font-bold px-2 py-1 rounded text-xs">33% OFF</span>
              </div>
              <div className="flex justify-center items-center mt-4">
                <button
                  className="w-full rounded py-2 bg-blue-500 text-white font-bold border-0 shadow-md transform hover:scale-105 transition text-base"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Resume and LinkedIn */}
          <div className="flex flex-col shadow-lg h-full py-5 px-4 border-2 border-[#44a0fa] rounded-2xl w-full md:w-1/3 bg-white mx-auto relative min-w-[280px]">
            {/* "Best Value" pill badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-5 py-1 bg-blue-500 rounded-full">
              <span className="font-bold text-white text-base">Best Value</span>
            </div>
            <h3 className="text-center mt-6 text-xl font-semibold">Resume and LinkedIn Service</h3>
            <ul className="mt-4 space-y-2 text-base">
              <li className="flex items-center gap-2"><span className="text-blue-500 font-extrabold">✓</span> 1 month of profile building services</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 font-extrabold">✓</span> Professional resume writing service</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 font-extrabold">✓</span> LinkedIn profile optimization</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 font-extrabold">✓</span> Guidance to boost recruiter visibility</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 font-extrabold">✓</span> Format, content & keyword optimization for better reach</li>
            </ul>
            <div className="px-3 mt-6">
              <div className="text-black font-bold text-xl">₹3,499</div>
              <div className="mt-1 flex gap-2 items-center">
                <span className="line-through text-gray-400 text-base">₹6,499</span>
                <span className="bg-blue-100 text-blue-600 font-bold px-2 py-1 rounded text-xs">46% OFF</span>
              </div>
              <div className="flex justify-center items-center mt-4">
                <button className="w-full rounded py-2 bg-blue-500 text-white font-bold border-0 shadow-md transform hover:scale-105 transition text-base"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Complete Suite */}
          <div className="flex flex-col shadow-lg h-full py-5 px-4 border-2 border-[#44a0fa] rounded-2xl w-full md:w-1/3 bg-white mx-auto relative min-w-[280px]">
            {/* "Recommended" pill badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-5 py-1 bg-blue-500 rounded-full">
              <span className="font-bold text-white text-base">Recommended</span>
            </div>
            <h3 className="text-center mt-6 text-xl font-semibold">Complete Suite</h3>
            <ul className="mt-4 space-y-2 text-base">
              <li className="flex items-center gap-2">
                <span className="text-blue-500 font-extrabold">✓</span> 1-month dedicated human placement assistance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 font-extrabold">✓</span> Personalized job leads matched to your profile
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 font-extrabold">✓</span> Professionally written, ATS-optimized resume
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 font-extrabold">✓</span> LinkedIn profile makeover for better visibility
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 font-extrabold">✓</span> Expert guidance on resumes, job search, and visibility
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 font-extrabold">✓</span> Exclusive community access for job tips and updates
              </li>
            </ul>
            <div className="px-3 mt-6">
              <div className="text-black font-bold text-xl">₹4,999</div>
              <div className="mt-1 flex gap-2 items-center">
                <span className="line-through text-gray-400 text-base">₹9,499</span>
                <span className="bg-blue-100 text-blue-600 font-bold px-2 py-1 rounded text-xs">47% OFF</span>
              </div>
              <div className="flex justify-center items-center mt-4">
                <button
                  className="w-full rounded py-2 bg-blue-500 text-white font-bold border-0 shadow-md transform hover:scale-105 transition text-base"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* imges web */}
      <div className="w-full px-2 py-8 bg-white">
        <h2 className="text-center font-bold text-3xl md:text-4xl mb-8">
          See What our Clients Say About us
        </h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-6 items-center">
          <img
            src="/All job-sheeker/whatsapp-1.jpeg"
            alt="WhatsApp testimonial 1"
            className="rounded-2xl shadow-lg object-cover w-[22rem] h-[34rem]"
          />
          <img
            src="/All job-sheeker/whatsapp-2.jpeg"
            alt="WhatsApp testimonial 2"
            className="rounded-2xl shadow-lg object-cover w-[22rem] h-[34rem]"
          />
          <img
            src="/All job-sheeker/whatsapp-3.jpeg"
            alt="WhatsApp testimonial 3"
            className="rounded-2xl shadow-lg object-cover w-[22rem] h-[34rem]"
          />
        </div>
      </div>
      <YourInfo/>
      {/* story */}
      <div className="w-full py-8 bg-white flex flex-col items-center">
        <h2 className="uppercase text-gray-500 text-center text-base tracking-wide mb-3 font-semibold">
          SUCCESS STORIES
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl text-center mb-7">
          By Jobaaj Stories
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-6xl px-4">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border shadow-lg flex flex-col w-full max-w-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[200px] overflow-hidden rounded-t-2xl flex">
              <img src="/All job-sheeker/story1.webp" alt="Story 1" className="object-cover w-full h-full" />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-gray-700 mb-3 font-medium text-lg leading-normal">
                Navigating Distractions and Setbacks:<br />
                The Story of CA Priyanka Sarawagi
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center mt-4">
                Read story
                <svg className="ml-1 w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl border shadow-lg flex flex-col w-full max-w-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[200px] overflow-hidden rounded-t-2xl flex">
              <img src="/All job-sheeker/story2.webp" alt="Story 2" className="object-cover w-full h-full" />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-gray-700 mb-3 font-medium text-lg leading-normal">
                From CA to CFA: Anil Ghelani's Versatility
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center mt-4">
                Read story
                <svg className="ml-1 w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl border shadow-lg flex flex-col w-full max-w-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-full h-[200px] overflow-hidden rounded-t-2xl flex">
              <img src="/All job-sheeker/story3.webp" alt="Story 3" className="object-cover w-full h-full" />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-gray-700 mb-3 font-medium text-lg leading-normal">
                Nischa Investment Banker: Building Wealth and Empowering Others
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center mt-4">
                Read story
                <svg className="ml-1 w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ section */}
      <div className="w-full py-8 flex flex-col items-center bg-white">
        <button className="mt-3 bg-blue-600 text-white px-7 py-3 rounded-lg shadow hover:bg-blue-700 cursor-pointer">
             View all stories
            </button>


        <h1 className="font-bold text-3xl md:text-4xl text-center mb-7">
          Frequently Asked Questions(FAQs)
        </h1>
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-0">
          {/* FAQ 1 */}
          <div className="w-full py-6 px-2 md:px-6 border-b flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
            <span className="text-lg font-semibold text-[#223157]">Is It A Placement Guarantee Service ?</span>
            <span className="text-2xl text-gray-400 font-bold">+</span>
          </div>
          {/* FAQ 2 */}
          <div className="w-full py-6 px-2 md:px-6 border-b flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
            <span className="text-lg font-semibold text-[#223157]">
              Is 7 Days Money Back Guarantee Available On LinkedIn Optimisation & Resume Pro As Well ?
            </span>
            <span className="text-2xl text-gray-400 font-bold">+</span>
          </div>
          {/* FAQ 3 */}
          <div className="w-full py-6 px-2 md:px-6 border-b flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
            <span className="text-lg font-semibold text-[#223157]">
              If I Enrol For Complete Suite & Later Claim Refund For Placement Assistance Service, How Much Will Be Refunded ?
            </span>
            <span className="text-2xl text-gray-400 font-bold">+</span>
          </div>
          {/* FAQ 4 */}
          <div className="w-full py-6 px-2 md:px-6 border-b flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
            <span className="text-lg font-semibold text-[#223157]">Can I Pay After Getting Placed ?</span>
            <span className="text-2xl text-gray-400 font-bold">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobSheeker;