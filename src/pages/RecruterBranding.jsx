import React from 'react'
import LeadingCompanies from '../Components/LeadingCompanies'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const logos = [
  { src: "/All job-sheeker/amazon.png", alt: "Amazon logo" },
  { src: "/All job-sheeker/Deloitte.png", alt: "Deloitte logo" },
  { src: "/All job-sheeker/KPMG.png", alt: "KPMG logo" },
  { src: "/All job-sheeker/google.png", alt: "Google logo" },
  { src: "/All job-sheeker/PWC.png", alt: "PwC logo" },
  { src: "/All job-sheeker/EY.png", alt: "EY logo" },
  { src: "/All job-sheeker/bmw.png", alt: "BMW logo" },
  { src: "/All job-sheeker/nomura.jpg", alt: "Nomura logo" },
];
const testimonials = [
  {
    logo: "/All job-sheeker/amazon.png",
    name: "Neha Kapoor",
    role: "HR Head, Amazon",
    text: "With Jobaaj, we could showcase our brand effectively and attract top talent within days. The premium job postings and targeted ads gave us a competitive edge in hiring.",
  },
  {
    logo: "/All job-sheeker/flipkart.png",
    name: "Rajesh Sharma",
    role: "Hiring Manager, Flipkart",
    text: "Jobaaj’s branding solutions delivered outstanding results at a fraction of our usual recruitment costs.",
  },
  {
    logo: "/All job-sheeker/google.png",
    name: "Sakshi Mehta",
    role: "Recruitment Lead, Cognizant",
    text: "The employer branding services from Jobaaj enhanced our company’s presence in the job market.",
  },
  {
    logo: "/All job-sheeker/KPMG.png",
    name: "Anil Gupta",
    role: "Hiring Lead, Infosys",
    text: "Their strategic branding solutions helped us attract top candidates faster.",
  },
  {
    logo: "/All job-sheeker/PWC.png",
    name: "Divya Kumar",
    role: "Talent Acquisition Lead, PwC",
    text: "Efficient, great engagement, and excellent support. Made hiring campaigns much easier.",
  },
  {
    logo: "/All job-sheeker/hdfclogo.png",
    name: "Sonal Mehta",
    role: "HR Manager, HDFC",
    text: "The custom branding options helped us stand out and attract more candidates.",
  }
];
const faqs = [
    "What are employer branding solutions and how does Jobaaj provide them?",
    "How does Jobaaj’s AI-powered recruitment platform work?",
    "Why is employer branding important in recruitment today?",
    "What Recruitment Branding solutions does Jobaaj offer?",
    "Can I use Custom Job Templates to showcase my brand?",
    "How do Jobaaj employer services improve hiring efficiency?",
    "What makes Jobaaj a trusted Recruitment Branding partner?",
  ];


const responsive = {
  desktop: { breakpoint: { max: 3000, min: 900 }, items: 3 },
  tablet:  { breakpoint: { max: 900, min: 600 }, items: 2 },
  mobile:  { breakpoint: { max: 600, min: 0 }, items: 1 },
};

const RecruterBranding = () => {
  return (
    <div>
        <div className="w-full min-h-screen bg-gradient-to-r from-[#d7eaff] to-[#b9d9ff] flex items-center px-10 md:px-20">
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-10">

        {/* LEFT TEXT SECTION */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Showcase your brand and <br />
            <span className="text-[#1877f2] font-extrabold">attract top talent!</span>
            <span className="inline-block ml-3">✨</span>
          </h1>

          <p className="mt-3 text-gray-500 font-medium flex items-center gap-2">
            Powered by AI
          </p>

          <p className="mt-6 text-xl text-gray-700 font-medium leading-relaxed">
            The ultimate AI-driven platform helping employers discover and decode
            talent effortlessly
          </p>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-6 border">

      
      {/* Header */}
      <div className="bg-white p-5 text-center border-b-4 border-[#1E64FF]">
        <h2 className="text-xl font-semibold text-[#1E64FF]">
          Talk to Us
        </h2>
      </div>

      {/* Form Fields */}
      <form className="p-6 space-y-5">
        
        {/* Full Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your Full Name"
            className="w-full mt-1 p-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-[#1E64FF] outline-none transition"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Contact Number<span className="text-red-500">*</span>
          </label>

          <div className="mt-1 flex items-center p-3 rounded-lg border border-gray-300 
            focus-within:ring-2 focus-within:ring-[#1E64FF] transition">

            <span className="mr-2">🇮🇳</span>

            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              className="flex-1 outline-none"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Company Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your Company Name"
            className="w-full mt-1 p-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-[#1E64FF] outline-none transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Email ID<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your Email ID"
            className="w-full mt-1 p-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-[#1E64FF] outline-none transition"
          />
        </div>

        {/* Submit Button */}
       <button
          type="submit"
          className="w-full text-lg font-semibold bg-blue-600 text-white rounded-xl py-3 transition-transform duration-200 hover:scale-105 border-2 border-blue-600 relative overflow-hidden
            before:absolute before:inset-0 before:border-2 before:border-blue-600 before:rounded-xl before:scale-x-0 before:origin-left before:transition before:duration-300 group-hover:before:scale-x-100"
        >
          <span className="relative z-10">Get in touch</span>
        </button>
      </form>
    </div>
    </div>
    </div>

{/* cursole */}
 <div className="w-full my-10 py-6 bg-white">
 <LeadingCompanies logos={logos} />  
 </div>
 {/*Employer Branding  */}
<div className="flex flex-col items-center w-full px-6 py-10 bg-white">
  {/* Top Heading */}
  <h1 className="text-5xl font-bold text-black tracking-wide text-center relative mb-2">
    Employer Branding
    <span className="block mx-auto mt-2 w-56 border-b-4 border-blue-500"></span>
  </h1>

  {/* Main Section (Text & Image Side by Side) */}
  <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mt-12">
    {/* Left Text Section */}
    <div className="flex flex-col justify-center lg:w-1/2 w-full lg:pr-12">
      <h2 className="text-blue-600 text-3xl font-bold mb-4 text-left">
        Company Profile Page
      </h2>
      <p className="text-black font-semibold text-xl leading-relaxed mb-8 text-left">
        Effortlessly attract and hire top talent with our comprehensive, AI-powered hiring and branding solutions designed to enhance your employer brand, optimize job visibility, and connect you with the right candidates faster than ever
      </p>

      {/* Button */}
      <div className="flex justify-start px-20">
       <button
  type="button"
  className="text-centre
    px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl
    shadow-[0_8px_0_0_rgb(0,0,0)] hover:translate-y-[-8px]
    transition duration-150
    hover:shadow-[0_16px_0_0_rgb(0,0,0)] 
    border-2 border-blue-600
  "
>
  Talk to Sales
</button>

      </div>
    </div>

    {/* Right Illustration */}
    <div className="flex justify-center lg:w-1/2 w-full">
      <img
        src="/PlacementAssistance/image-528.png"
        alt="Employer branding"
        className="max-w-md w-full"
      />
    </div>
  </div>
</div>

{/* card part */}
<div className="flex flex-col md:flex-row gap-8 justify-center  w-full px-10 py-10 bg-white">
  {/* Card 1 */}
  <div className="flex flex-col items-start bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="mb-4">
      {/* Orange Check Icon */}
      <span className="inline-flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Highlight Your Company</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      Share your vision and mission in a way that resonates with a diverse audience
    </p>
  </div>
  
  {/* Card 2 */}
  <div className="flex flex-col items-start bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="mb-4">
      <span className="inline-flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Showcase Your Workplace Culture</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      Demonstrate your company's environment to attract candidates who align with your values
    </p>
  </div>
  
  {/* Card 3 */}
  <div className="flex flex-col items-start bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="mb-4">
      <span className="inline-flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhance Your Brand Presence</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      Customize job postings to reflect your brand identity and attract the right talent.
    </p>
  </div>
</div>
<div className="my-5 mx-auto w-3/5 h-1 bg-black rounded"></div>

{/* Custom Job Templates */}
<div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] w-full px-4 py-8 bg-white">
  {/* Illustration (Left) */}
  <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
    <img
      src="/PlacementAssistance/image-534.png"
      alt="Job templates illustration"
      className="max-w-lg w-full"
    />
  </div>

  {/* Content (Right) */}
  <div className="md:w-1/2 flex flex-col items-center md:items-start pl-0 md:pl-10">
    <h2 className="text-3xl font-bold text-blue-600 mb-2 text-center md:text-left">
      Custom Job Templates
    </h2>
    <p className="text-xl font-semibold text-black leading-relaxed mb-10 text-center md:text-left">
      Showcase your brand prominently on the Jobaaj homepage to maximize visibility, attract top-tier talent, and establish a strong employer presence in front of millions of active job seekers
    </p>
    {/* Button */}
    <button
      type="button"
      className="
        px-12 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl
        shadow-[0_8px_0_0_rgb(0,0,0)] hover:translate-y-[-8px]
        transition duration-150
        hover:shadow-[0_16px_0_0_rgb(0,0,0)] 
        border-2 border-blue-600">
      Talk to Sales
    </button>
  </div>
</div>
{/* card */}
<div className="flex flex-col md:flex-row gap-8 justify-center  w-full px-10 py-10 bg-white">
  {/* Card 1 */}
  <div className="flex flex-col items-start bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="mb-4">
      {/* Orange Check Icon */}
      <span className="inline-flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Branded top templates</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      Icon
Branded top templates
Tailor your job postings with your brand identity to create an instant connection with candidates.
    </p>
  </div>
  
  {/* Card 2 */}
  <div className="flex flex-col items-start bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="mb-4">
      <span className="inline-flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Icon Flexible Customization</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      Pick from professionally designed templates or customize one to match your brand and hiring needs.
    </p>
  </div>
  
  {/* Card 3 */}
  <div className="flex flex-col items-start bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="mb-4">
      <span className="inline-flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Job Visibility</h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      Ensure your job postings stand out with eye-catching designs and strategic placement, 
      attracting top talent amidst the competition.
    </p>
  </div>
</div>
<div className="my-5 mx-auto w-3/5 h-1 bg-black rounded"></div>

{/* Employer of Choice Logo */}
<div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] w-full px-4 py-8 bg-white">
  {/* Content (Left) */}
  <div className="md:w-1/2 flex flex-col items-start">
    <h2 className="text-3xl font-bold text-blue-600 mb-4 text-left">
      Employer of Choice Logo
    </h2>
    <p className="text-xl font-semibold text-black leading-relaxed mb-10 text-left">
      Customize your job listings to authentically represent your brand, highlight your company culture, and engage the right candidates. With tailored job descriptions, branded visuals, and targeted outreach, you can attract top talent that aligns with your organization's values and hiring needs
    </p>
    {/* Button */}
    <button
      type="button"
      className="
        px-12 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl
        shadow-[0_8px_0_0_rgb(0,0,0)] hover:translate-y-[-8px]
        transition duration-150
        hover:shadow-[0_16px_0_0_rgb(0,0,0)] 
        border-2 border-blue-600
        mx-auto md:mx-0">
      Talk to Sales
    </button>
  </div>

  {/* Illustration (Right) */}
  <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
    <img
      src="/PlacementAssistance/image-8459.png"
      alt="Employer of choice illustration"
      className="max-w-lg w-full"
    />
  </div>
</div>
<div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full px-10 py-10 bg-white">
  {/* Card 1 */}
  <div className="flex flex-col bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    {/* Icon + Heading */}
    <div className="flex items-center gap-3 mb-4">
      <span>
        <svg width="40" height="40" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
      <h3 className="text-2xl font-bold text-gray-900 m-0">Competitive Edge</h3>
    </div>
    <p className="text-lg text-gray-700 leading-relaxed">
      Differentiate your company from others by positioning yourself as the top choice for job seekers.
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="flex items-center gap-3 mb-4">
      <span>
        <svg width="40" height="40" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
      <h3 className="text-2xl font-bold text-gray-900 m-0">Enhanced Brand Visibility</h3>
    </div>
    <p className="text-lg text-gray-700 leading-relaxed">
      Showcase your brand in the most visited section where job seekers actively explore opportunities.
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="flex items-center gap-3 mb-4">
      <span>
        <svg width="40" height="40" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
      <h3 className="text-2xl font-bold text-gray-900 m-0">Exclusive Spotlight</h3>
    </div>
    <p className="text-lg text-gray-700 leading-relaxed">
      Increase your reach and attract top talent by securing premium visibility among skilled professionals.
    </p>
  </div>
</div>

 {/* Simplify Hiring */}
{/* Black separator line for division */}
<div className="my-8 mx-auto w-4/5 h-1 bg-black rounded"></div>
<div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] w-full px-4 py-8 bg-white">
  {/* Illustration (Left Side) */}
  <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
    <img
      src="/PlacementAssistance/image-544.png"
      alt="Hiring illustration"
      className="max-w-lg w-full"
    />
  </div>
 
  {/* Content (Right Side) */}
  <div className="md:w-1/2 flex flex-col items-center md:items-start">
    <h2 className="text-3xl font-bold text-blue-600 mb-4 text-left md:text-left">
      Simplify Hiring
    </h2>
    <p className="text-xl font-semibold text-black leading-relaxed mb-8 text-left md:text-left">
      Effortlessly attract and hire top talent with our comprehensive, AI-powered hiring and branding solutions, designed to enhance your employer brand, optimize job visibility, and connect you with the right candidates faster than ever
    </p>
    {/* Button */}
    <button
      type="button"
      className="
        px-12 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl
        shadow-[0_8px_0_0_rgb(0,0,0)] hover:translate-y-[-8px]
        transition duration-150
        hover:shadow-[0_16px_0_0_rgb(0,0,0)] 
        border-2 border-blue-600
        mx-auto md:mx-0
      "
    >
      Talk to Sales
    </button>
  </div>
</div>

{/* cards */}
<div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full px-10 py-10 bg-white">
  {/* Card 1 */}
  <div className="flex flex-col bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="flex items-center gap-3 mb-4">
      <span>
        <svg width="40" height="40" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
      <h3 className="text-2xl font-bold text-gray-900 m-0">Create a free account</h3>
    </div>
    <p className="text-lg text-gray-700 leading-relaxed">
      Sign up in just a few minutes and unlock the ability to post jobs effortlessly at no cost.
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="flex items-center gap-3 mb-4">
      <span>
        <svg width="40" height="40" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
      <h3 className="text-2xl font-bold text-gray-900 m-0">Post Jobs & Opt for Branding</h3>
    </div>
    <p className="text-lg text-gray-700 leading-relaxed">
      List your job openings and enhance visibility with powerful branding options.
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col bg-blue-50 rounded-2xl shadow-2xl p-8 w-full md:w-1/3">
    <div className="flex items-center gap-3 mb-4">
      <span>
        <svg width="40" height="40" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#fc6603"/>
          <polyline points="17,25 23,31 33,19" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
      <h3 className="text-2xl font-bold text-gray-900 m-0">Enhanced Job Visibility</h3>
    </div>
    <p className="text-lg text-gray-700 leading-relaxed">
      Leverage Jobaaj’s expert branding services to maximize recruiter outreach.
    </p>
  </div>
</div>

{/* Blue separator line */}
<div className="mt-8 mx-auto w-[80%] h-1 bg-blue-400 rounded"></div>


{/*  */}
<div className="flex flex-col items-center justify-center min-h-[45vh] pt-8 pb-20">
  {/* Icon and Header */}
  <div className='inline'>
    <img
      src="/PlacementAssistance/Administrator-Male.png"
      alt="Expert icon"
      className="h-14 mb-2" />
    <h2 className="text-3xl font-bold text-black text-center">
      Speak to our Experts
      <span className="block w-64 border-b-2 border-blue-500 mx-auto mt-2"></span>
    </h2>
    <span className="block text-lg text-gray-700 mt-2 text-center">
      Find the right hiring solutions for your needs
    </span>
  </div>

  {/* Request Demo Popup Button */}
  <button
    type="button"
    className="
      px-8 py-4 bg-white text-blue-600 text-xl font-semibold rounded-2xl shadow-[0_6px_0_0_rgb(46,107,255,0.33)]
      border-2 border-blue-500 hover:scale-110 transition-transform duration-200 mt-4
      hover:shadow-[0_12px_0_0_rgb(46,107,255,0.33)]
      hover:bg-blue-50
    "
  >
    Request a Demo
  </button>
</div>
<div className="bg-white w-full flex flex-col items-center pt-10 pb-2">
      <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-2">
        Employer Branding Success Stories
      </h2>
      <div className="w-[400px] border-b-2 border-blue-500 mx-auto mb-4"></div>
      <div className="text-2xl text-black font-normal text-center">
        Join a thriving network of recruiters transforming the way they hire
      </div>
    </div>
{/* Employer Branding Success Stories Header */}
<div className="min-h-screen bg-white flex flex-col items-center justify-center py-10 px-4">
      {/* Heading */}
      {/* Carousel */}
      <div className="w-full max-w-6xl">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          containerClass="mx-auto"
          itemClass="px-4 py-4"
        >
          {testimonials.map((item, i) => (
            <div className="flex flex-col bg-blue-50 rounded-2xl shadow-2xl px-8 py-10 min-w-[300px] max-w-md mx-auto h-full" key={i}>
              <div className="flex justify-center items-center mb-6">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-36 h-20 object-contain bg-white"
                  style={{ minHeight: '5rem', minWidth: '9rem' }}
                />
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">{item.name}</div>
              <div className="text-base font-semibold text-gray-800 mb-3">{item.role}</div>
              <p className="text-md text-gray-700 leading-normal">"{item.text}"</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
 <div className="bg-white py-10 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-black text-center mb-8">Still curious?</h2>
      <div className="w-full max-w-3xl">
        {faqs.map((question, idx) => (
          <div key={idx} className="flex items-center justify-between py-6 border-b border-gray-100">
            <a
            
              className="text-blue-600 text-lg font-semibold hover:underline"
            >
              {question}
            </a>
            
          </div>
        ))}
      </div>
    </div>
    </div>

  )
}

export default RecruterBranding