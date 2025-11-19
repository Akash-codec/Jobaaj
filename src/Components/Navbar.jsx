import React, { useState } from "react";
import {
  Menu,
  SquareMenu,
  X,
  CircleUserRound,
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  Search,
  CircleDollarSign,
  StickyNote,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "Taxation",
  "Corporate Finance",
  "Investment Banking, Private Equity & VC",
  "Data Science Analytics & Machine Learning",
  "Management / Strategic Consulting",
  "Product Management",
  "Business Development / Sales",
  "Human Resource (HR)/ Talent Acquisition",
  "Digital Marketing / Marketing",
  "IT / Software Development & Related",
];

const locations = [
  "Noida",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Pune",
  "Gurugram",
  "Mumbai",
  "Hyderabad",
  "Kolkata",
];

/* UNIVERSAL DROPDOWN */
const Dropdown = ({ open, mobile, center, children }) => {
  if (!mobile) {
    return (
      <div
        className={`
          lg:absolute lg:top-full lg:z-40
          transition-all duration-300 origin-top
          ${center ? "left-0 -translate-x-1/6" : "left-0"}
          ${
            open
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          }
        `}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`
        transition-all duration-300 overflow-hidden
        ${open ? "opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <div className="pl-6 pt-2 flex flex-col gap-2">{children}</div>
    </div>
  );
};

/* JOB DROPDOWN */
const JobDropMenu = () => (
  <div className="mt-4 lg:w-[90vw] max-w-7xl bg-white lg:shadow-xl rounded-b-xl lg:border-2 lg:border-gray-200 lg:border-t-[#0f09c8] transition-all duration-300 origin-top lg:mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6">
      <div className="hidden lg:block relative p-8 text-center text-black">
        <div className="absolute inset-0 bg-[url('/Navbar/jobdropmenu.svg')] bg-cover"></div>
        <div className="relative mt-10 space-y-3">
          <h2 className="text-2xl font-bold leading-8">Find Jobs</h2>
          <p className="text-base text-gray-600">
            India's leading job portal with deep expertise in the Accounting,
            Finance & Data industry.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mt-6">
            <Link
              to="/jobs"
              className="bg-[#377dff] text-white font-semibold px-4 py-2 rounded-lg shadow hover:translate-y-1 hover:bg-gray-200 transition flex items-center justify-center"
            >
              All Jobs <ChevronRight size={16} className="inline-block" />
            </Link>

            <Link
              to="/drop-cv"
              className="text-white font-semibold px-4 py-2 rounded-lg shadow bg-linear-to-r from-[#8c53ff] to-[#367cff] hover:translate-y-1 hover:bg-gray-200 transition flex items-center justify-center"
            >
              <StickyNote size={16} className="inline-block mr-2" />
              Drop CV
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="p-1 lg:p-3">
        <h3 className="font-semibold uppercase lg:text-center text-gray-400 mb-3">
          Popular Categories
        </h3>
        <div className="flex flex-col gap-2 lg:gap-3 text-sm">
          {categories.map((cat) => (
            <Link
              key={cat}
              to=""
              className=" hover:bg-gray-200 transition text-left px-2 py-1 rounded"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="p-1 lg:p-3">
        <h3 className="font-semibold uppercase lg:text-center text-gray-400 mb-3">
          Popular Locations
        </h3>
        <div className="flex flex-col gap-2 lg:gap-3 text-sm">
          {locations.map((city) => (
            <Link
              key={city}
              to=""
              className=" hover:bg-gray-200 transition text-left px-2 py-1 rounded"
            >
              Jobs in {city}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* SERVICES DROPDOWN */
const ServicesDropMenu = () => (
  <div className="mt-4 lg:min-w-120 max-w-7xl bg-white lg:shadow-xl lg:rounded-b-xl lg:border-2 lg:border-gray-200 transition-all duration-300 origin-top lg:border-t-[#0f09c8]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-1 lg:p-3">
        <h3 className="font-semibold uppercase lg:text-center text-gray-400 mb-3">
          Jobseeker Services
        </h3>
        <div className="flex flex-col gap-3 text-sm">
          <Link
            to="/jobseeker-services"
            className="hover:bg-gray-200 px-2 py-1 rounded"
          >
            All Jobseeker Services
          </Link>
          <Link
            to="/placement-assistance"
            className="hover:bg-gray-200 px-2 py-1 rounded"
          >
            Placement Assistance
          </Link>
          <Link
            to="/resume-writing"
            className="hover:bg-gray-200 px-2 py-1 rounded"
          >
            Resume Writing
          </Link>
          <Link
            to="/ats-checker"
            className="hover:bg-gray-200 px-2 py-1 rounded"
          >
            ATS Resume Checker
          </Link>
        </div>
      </div>

      <div className="p-1 lg:p-3">
        <h3 className="font-semibold uppercase lg:text-center text-gray-400 mb-3">
          Recruiter Services
        </h3>
        <div className="flex flex-col gap-3 text-sm">
          <Link
            to="/recruter-branding"
            className="hover:bg-gray-200 px-2 py-1 rounded"
          >
            Recruter Branding
          </Link>
          <Link
            to="/job-posting"
            className="hover:bg-gray-200 px-2 py-1 rounded"
          >
            Job Posting
          </Link>
          <Link
            to="/candidate-pool"
            className="hover:bg-gray-200 px-2 py-1 rounded"
          >
            Candidate Pool
          </Link>
          <Link
            to="/consultancy"
            className="hover:bg-gray-200 px-2 py-1 rounded"
          >
            Consultancy
          </Link>
        </div>
      </div>
    </div>
  </div>
);

/* OTHERS DROPDOWN */
const OthersDropMenu = () => (
  <div className="mt-4 lg:w-35 max-w-7xl bg-white lg:shadow-xl lg:rounded-b-xl lg:border-2 lg:border-gray-200 transition-all duration-300 origin-top lg:border-t-[#0f09c8]">
    <div className="p-1 lg:p-3">
      <h3 className="font-semibold uppercase lg:text-center text-gray-400 mb-3">
        Quick Link
      </h3>
      <div className="flex flex-col gap-3 text-sm">
        <Link to="/about-us" className="hover:bg-gray-200 px-2 py-1 rounded">
          About Us
        </Link>
        <Link to="/contact-us" className="hover:bg-gray-200 px-2 py-1 rounded">
          Contact Us
        </Link>
        <Link to="/our-blog" className="hover:bg-gray-200 px-2 py-1 rounded">
          Our Blog
        </Link>
        <Link
          to="/jobaaj-cares"
          className="hover:bg-gray-200 px-2 py-1 rounded"
        >
          Jobaaj Cares
        </Link>
      </div>
    </div>
  </div>
);

/* NAVBAR */
const Navbar = () => {
  const [openJobs, setOpenJobs] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openOthers, setOpenOthers] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileJobs, setMobileJobs] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileOthers, setMobileOthers] = useState(false);

  return (
    <header className="w-full bg-white fixed top-0 pt-2 z-50 shadow-sm">
      <div className="container max-w-6xl mx-auto flex items-center justify-between min-h-[72px]">
        {/* Mobile hamburger */}
        <div className="pl-3 flex items-center gap-4">
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMobileMenu(true)}
          >
            <SquareMenu size={36} color="#99a3b0" />
          </button>
          <Link to="/">
            <img
              src="/Navbar/logoNew.webp"
              alt="Logo"
              className="w-20 h-auto"
            />
          </Link>
        </div>

        {/* Mobile quick actions */}
        <div className="pr-3 flex items-center gap-3 lg:hidden">
          <Link
            to="/jobs"
            className="bg-blue-600 text-white px-4 py-1 rounded-md flex items-center gap-2 hover:bg-gray-200"
          >
            Jobs <BriefcaseBusiness size={20} strokeWidth={1.5} />
          </Link>
          <Link to="">
            <CircleUserRound size={32} strokeWidth={1.5} color="#377dff" />
          </Link>
        </div>

        {/* Desktop navbar */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Find Jobs */}
          <div
            className="relative"
            onMouseEnter={() => setOpenJobs(true)}
            onMouseLeave={() => setOpenJobs(false)}
          >
            <button className="px-3 flex items-center gap-1">
              <span>Find Jobs</span>
              <ChevronDown
                className={`transition-transform ${
                  openJobs ? "rotate-180" : ""
                }`}
              />
            </button>
            <Dropdown open={openJobs} center>
              <JobDropMenu />
            </Dropdown>
          </div>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <button className="px-3 flex items-center gap-1">
              <span>Services</span>
              <ChevronDown
                className={`transition-transform ${
                  openServices ? "rotate-180" : ""
                }`}
              />
            </button>
            <Dropdown open={openServices}>
              <ServicesDropMenu />
            </Dropdown>
          </div>

          {/* Post Jobs */}
          <Link
            to="/post-job"
            className="font-semibold border-b-4 border-[#fae4cc] px-3 pb-1 rounded"
          >
            Post Jobs
            <span className="ml-1 border border-blue-500 text-blue-500 text-xs px-2 py-0.5 rounded-full">
              Free
            </span>
          </Link>

          {/* Others */}
          <div
            className="relative"
            onMouseEnter={() => setOpenOthers(true)}
            onMouseLeave={() => setOpenOthers(false)}
          >
            <button className="px-3 flex items-center gap-1">
              <span>Others</span>
              <ChevronDown
                className={`transition-transform ${
                  openOthers ? "rotate-180" : ""
                }`}
              />
            </button>
            <Dropdown open={openOthers}>
              <OthersDropMenu />
            </Dropdown>
          </div>

          {/* Login */}
          <Link
            to="#"
            className="border px-5 py-1.5 rounded-full text-[#377dff] border-[#377dff] font-medium hover:bg-[#377dff] hover:text-white"
          >
            Login / Register
          </Link>

          {/* Clients */}
          <Link
            to="/careers"
            className="bg-[#377dff] text-white px-5 py-1.5 rounded-full hover:bg-[#0f09c8] hover:translate-y-1 hover:shadow-2xl transition"
          >
            Our Clients Openings
          </Link>
        </nav>
      </div>

      {/* Premium Banner */}
      <div className="bg-[#0e08c7] max-h-[60px] text-white text-center py-3 flex items-center justify-center gap-5 flex-wrap">
        <p className="text-[22px] ">Placement Guarantee Plan</p>
        <Link
          to=""
          className="bg-[#ed4c78] text-white px-3 py-1.5 rounded-full hover:bg-[#ed4c78]/90 hover:-translate-y-1 transition"
        >
          Take a look <ChevronRight size={20} className="inline-block" />
        </Link>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          mobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed left-0 top-0 h-full w-4/5 md:w-9/20 bg-white rounded-r-xl transition-transform duration-300 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-8 pt-6">
            <img src="/Navbar/logoNew.webp" className="w-20" />
            <button onClick={() => setMobileMenu(false)}>
              <X size={28} className="text-gray-500" />
            </button>
          </div>

          <nav className="p-8 h-3/4 text-[#2b3b62] overflow-scroll">
            {/* Mobile Jobs */}
            <div className="py-3">
              <Link
                to="/jobs"
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setMobileJobs(!mobileJobs)}
              >
                <span className="flex items-center gap-2">
                  <Search size={20} color="#538fff" /> Find Jobs
                </span>
                <ChevronDown
                  className={`transition-transform ${
                    mobileJobs ? "rotate-180" : ""
                  }`}
                />
              </Link>
              <Dropdown open={mobileJobs} mobile>
                <JobDropMenu />
              </Dropdown>
            </div>

            {/* Drop CV */}
            <Link
              to="/drop-cv"
              className="py-3 flex items-center gap-2 hover:bg-gray-200 px-2 rounded"
            >
              <StickyNote size={20} color="#538fff" /> Drop CV
            </Link>

            {/* Mobile Services */}
            <div className="py-3">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setMobileServices(!mobileServices)}
              >
                <span className="flex items-center gap-2">
                  <CircleDollarSign size={20} color="#538fff" /> Services
                </span>
                <ChevronDown
                  className={`transition-transform ${
                    mobileServices ? "rotate-180" : ""
                  }`}
                />
              </div>
              <Dropdown open={mobileServices} mobile>
                <ServicesDropMenu />
              </Dropdown>
            </div>

            {/* Mobile Others */}
            <div className="py-3">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setMobileOthers(!mobileOthers)}
              >
                <span className="flex items-center gap-2">
                  <Menu size={20} color="#538fff" /> Other
                </span>
                <ChevronDown
                  className={`transition-transform ${
                    mobileOthers ? "rotate-180" : ""
                  }`}
                />
              </div>
              <Dropdown open={mobileOthers} mobile>
                <OthersDropMenu />
              </Dropdown>
            </div>
          </nav>

          {/* Bottom auth buttons */}
          <div className="w-9/10 mx-auto p-4 flex flex-col gap-2">
            <Link className="bg-[#377dff] text-white py-2 text-center rounded-lg hover:bg-gray-200">
              Log In
            </Link>
            <Link className="border border-[#377dff] text-[#377dff] py-2 text-center rounded-lg hover:bg-gray-200">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
