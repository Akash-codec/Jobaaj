import React from "react";
import {
  FaCloudUploadAlt,
  FaSearch,
  FaChartBar,
  FaBullseye,
  FaCheckCircle,
  FaRegFileAlt,
  FaUpload,
     FaStar, 
     FaRegEye,
    FaUserTie,
    FaAward,
    FaUserCheck,
    FaUserFriends,
    FaTrophy, 
    FaTimesCircle
} from "react-icons/fa";
const rows = [
  {
    label: "ATS Resume Compatibility",
    jobaaj: <FaCheckCircle className="text-green-500 text-2xl mx-auto" />,
    other: <FaTimesCircle className="text-red-400 text-2xl mx-auto" />,
  },
  {
    label: "Job Match Score",
    jobaaj: <FaCheckCircle className="text-green-500 text-2xl mx-auto" />,
    other: <FaTimesCircle className="text-red-400 text-2xl mx-auto" />,
  },
  {
    label: "Keyword Optimization",
    jobaaj: <FaCheckCircle className="text-green-500 text-2xl mx-auto" />,
    other: <FaTimesCircle className="text-red-400 text-2xl mx-auto" />,
  },
  {
    label: "Real-time ATS Score",
    jobaaj: <FaCheckCircle className="text-green-500 text-2xl mx-auto" />,
    other: <FaTimesCircle className="text-red-400 text-2xl mx-auto" />,
  },
  {
    label: "Success Rate",
    jobaaj: <span className="text-purple-500 font-bold text-lg">87%</span>,
    other: <span className="text-gray-700 font-semibold text-lg">65-72%</span>,
  },
  {
    label: "Resumes Analyzed",
    jobaaj: <span className="text-purple-500 font-bold text-lg">500K+</span>,
    other: <span className="text-gray-700 font-semibold text-lg">200K+</span>,
  },
  {
    label: "ATS Friendly Templates",
    jobaaj: <FaCheckCircle className="text-green-500 text-2xl mx-auto" />,
    other: <FaTimesCircle className="text-red-400 text-2xl mx-auto" />,
  }
];
const faqs = [
  "What is an ATS resume checker?",
  "How does an ATS score checker work?",
  "Are free ATS resume checkers reliable?",
  "What is an ATS-friendly resume template?",
  "Which is the best free ATS resume checker?",
  "Can I improve my ATS score quickly?",
];
import SuccessStories from "../Components/SuccessStories";

// Hero image path
const heroImg = "/PlacementAssistance/Ats hero img.png";

const features = [
  {
    icon: <FaBullseye size={42} color="#7c4ff8" />,
    title: "Customization",
    desc: "Enter a job title to tailor your resume with the right ATS keywords and skills.",
    bg: "bg-[#ede6fb]",
  },
  {
    icon: <FaCheckCircle size={42} color="#24a4ed" />,
    title: "Spelling and Grammar",
    desc: "Our ATS score checker spots spelling and grammar errors instantly.",
    bg: "bg-[#e7f3fb]",
  },
  {
    icon: <FaRegFileAlt size={42} color="#2ecc40" />,
    title: "Summary Statement",
    desc: "Add a strong summary to boost your ATS resume score and impress recruiters.",
    bg: "bg-[#e8f9f0]",
  },
  {
    icon: <FaRegEye size={42} color="#ffb431" />,
    title: "Measurable Results",
    desc: "Showcase measurable achievements to strengthen your ATS friendly resume.",
    bg: "bg-[#fef6ea]",
  },
];

const section2 = [
  {
    icon: <FaRegEye size={42} color="#ffb431" />,
    title: "Word Choice",
    desc: "Use action-driven words to create an impactful, ATS friendly CV template.",
    bg: "bg-[#fef6ea]",
  },
  {
    icon: <FaRegFileAlt size={42} color="#2ecc40" />,
    title: "Formatting",
    desc: "Ensure your resume format is clean, professional, and optimized for ATS scanning.",
    bg: "bg-[#e8f9f0]",
  },
  {
    icon: <FaCheckCircle size={42} color="#24a4ed" />,
    title: "Optimal Length",
    desc: "Keep your resume concise and ATS friendly for quick recruiter review.",
    bg: "bg-[#e7f3fb]",
  },
  {
    icon: <FaBullseye size={42} color="#7c4ff8" />,
    title: "Contact Information",
    desc: "Highlight clear contact details so employers can reach you easily.",
    bg: "bg-[#ede6fb]",
  },
];
// Info items for right side
const info = [
  {
    icon: <FaCheckCircle size={28} className="text-green-400 bg-green-100 rounded-lg p-1.5" />,
    title: "Match Score",
    desc: "Check your instant ATS score to measure compatibility with the role.",
  },
  {
    icon: <FaSearch size={28} className="text-blue-400 bg-blue-100 rounded-lg p-1.5" />,
    title: "Keyword Insights",
    desc: "Identify missing keywords and optimize your resume with our ATS score checker free tool.",
  },
  {
    icon: <FaBullseye size={28} className="text-purple-500 bg-purple-100 rounded-lg p-1.5" />,
    title: "ATS Readiness",
    desc: "Run an ATS resume check to ensure your resume format and content get parsed correctly.",
  },
  {
    icon: <FaStar size={28} className="text-orange-400 bg-orange-100 rounded-lg p-1.5" />,
    title: "Actionable Suggestions",
    desc: "Get clear steps to build an ATS friendly resume and boost your chances of landing interviews.",
  },
];
const AtsChecker = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#F4F8FF] via-white to-[#D9E6FF] px-0 py-0">
      <div className="md:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-16 z-10">
        <span className="bg-[#E6DEFB] text-[#7d68e6] font-extrabold text-[1.09rem] px-6 py-2 rounded-full tracking-[0.06em] mb-8">
          ATS RESUME CHECKER
        </span>
        <h1 className="font-black text-[2.8rem] md:text-[4rem] leading-tight text-gray-900 mb-2 mt-2">
          Is your resume <br />
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-blue-400 bg-clip-text text-transparent">
            ATS-friendly?
          </span>
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

    {/* How It Works Section */}
    <section style={{ background: "#f8f9fb", padding: "60px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2 style={{ fontSize: 44, fontWeight: 700 }}>How It Works</h2>
        <p style={{ fontSize: 22, color: "#555", marginTop: 10 }}>
          Get your ATS score in just 4 simple steps and start landing more interviews
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 140, flexWrap: "wrap" }}>
        
        <div
          style={{
            width: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <FaCloudUploadAlt
            size={58}
            color="#7c4ff8"
            style={{ marginBottom: 18, marginTop: 5 }}
            className="mb-[18px] mt-[5px] transition-transform duration-300 ease-[cubic-bezier(.68,-0.55,.27,1.55)] hover:-translate-y-4 hover:scale-107 cursor-pointer"
          />
          <h3 style={{ fontSize: 30, fontWeight: 600, margin: 0 }}>Upload Resume</h3>
          <p style={{ marginTop: 10 }}>
            Upload your resume in PDF or DOCX format to begin the ATS resume check.
          </p>
        </div>
   
        <div
          style={{
            width: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <FaSearch
            size={58}
            color="#7c4ff8"
            style={{ marginBottom: 18, marginTop: 5 }}
            className="mb-[18px] mt-[5px] transition-transform duration-300 ease-[cubic-bezier(.68,-0.55,.27,1.55)] hover:-translate-y-2 hover:scale-105 cursor-pointer"
          />
          <h3 style={{ fontSize: 30, fontWeight: 600, margin: 0 }}>AI Analysis</h3>
          <p style={{ marginTop: 10 }}>
            Our AI scans your resume against ATS friendly resume requirements and job-specific keywords.
          </p>
        </div>
      
        <div
          style={{
            width: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <FaChartBar
            size={58}
            color="#7c4ff8"
            style={{ marginBottom: 18, marginTop: 5 }}
            className="mb-[18px] mt-[5px] transition-transform duration-300 ease-[cubic-bezier(.68,-0.55,.27,1.55)] hover:-translate-y-4 hover:scale-107 cursor-pointer"
          />
          <h3 style={{ fontSize: 30, fontWeight: 600, margin: 0 }}>Get ATS Score</h3>
          <p style={{ marginTop: 10 }}>
            Receive a detailed ATS score report that shows your strengths and gaps.
          </p>
        </div>
       
        <div
          style={{
            width: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <FaBullseye
            size={58}
            color="#7c4ff8"
            style={{ marginBottom: 18, marginTop: 5 }}
            className="mb-[18px] mt-[5px] transition-transform duration-300 ease-[cubic-bezier(.68,-0.55,.27,1.55)] hover:-translate-y-4 hover:scale-107 cursor-pointer"/>
          <h3 style={{ fontSize: 30, fontWeight: 600, margin: 0 }}>Optimize</h3>
          <p style={{ marginTop: 10 }}>
            Use our suggestions to improve your ATS friendly resume template and boost your chances of getting shortlisted.
          </p>
        </div>
      </div>
    </section>

    {/* Powerful Features Section */}

    <section className="mx-7 py-10 md:py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-[2.6rem] font-extrabold text-gray-900">Powerful Features</h2>
        <p className="mt-2 text-xl text-gray-500 max-w-3xl mx-auto">
          Everything you need to make your resume ATS-friendly and interview-ready
        </p>
        </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {features.map((card, idx) => (
          <div
            key={idx}
            className="w-[330px] flex flex-col items-center rounded-3xl shadow transition-transform
                duration-300 bg-white hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            style={{
              minHeight: 370,
              boxShadow: "0 2px 16px 0 rgba(44,62,80,0.07)",
            }}
          >
            <div
              className={`flex items-center justify-center rounded-xl mt-10 mb-7 w-20 h-20 ${card.bg} transition-transform duration-300`}
              style={{ boxShadow: "0 3px 20px 0 rgba(44,62,80,0.07)" }}
            >
              {card.icon}
            </div>
            <h3 className="text-[1.6rem] font-extrabold text-gray-800 text-center mb-2">{card.title}</h3>
            <p className="text-gray-500 text-lg text-center px-7 mb-8">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 2 (Second Card Set) */}
    <section className="py-10 md:py-8 bg-white">
      <div className="flex flex-wrap gap-8 justify-center">
        {section2.map((card, idx) => (
          <div
            key={idx}
            className="w-[330px] flex flex-col items-center rounded-3xl shadow transition-transform
                duration-300 bg-white hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            style={{
              minHeight: 370,
              boxShadow: "0 2px 16px 0 rgba(44,62,80,0.07)",
            }}
          >
            <div
              className={`flex items-center justify-center rounded-xl mt-10 mb-7 w-20 h-20 ${card.bg} transition-transform duration-300`}
              style={{ boxShadow: "0 3px 20px 0 rgba(44,62,80,0.07)" }}
            >
              {card.icon}
            </div>
            <h3 className="text-[1.6rem] font-extrabold text-gray-800 text-center mb-2">{card.title}</h3>
            <p className="text-gray-500 text-lg text-center px-7 mb-8">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
    {/*  */}
        <section className="w-full bg-[#f8f9fb] min-h-[70vh] py-14 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 px-6 lg:px-0">
        {/* Left Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 flex-1 max-w-[610px] flex flex-col justify-between min-h-[456px]">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Job Match Analysis</h3>
          <div className="flex flex-row justify-between gap-5">
            {/* Resume Upload Box */}
            <div className="flex-1 rounded-2xl border border-dashed border-purple-400 flex flex-col items-center justify-center min-h-[160px] cursor-pointer transition duration-200 hover:bg-purple-50 mr-2">
              <FaUpload size={30} className="text-purple-500 mb-2" />
              <p className="text-purple-600 font-semibold text-lg">Resume Upload</p>
              <small className="text-xs text-gray-400">PDF, DOCX</small>
            </div>
            {/* Job Description Upload */}
            <div className="flex-1 rounded-2xl border border-dashed border-blue-300 flex flex-col items-center justify-center min-h-[160px] cursor-pointer transition duration-200 hover:bg-blue-50">
              <FaRegFileAlt size={30} className="text-blue-500 mb-2" />
              <p className="text-blue-600 font-semibold text-lg">Job Description</p>
              <small className="text-xs text-gray-400">Copy &amp; Paste</small>
            </div>
          </div>
          {/* Score Circle */}
          <div className="flex justify-center my-6">
            <div className="relative flex flex-col items-center">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <circle cx="36" cy="36" r="32" stroke="#d1fae5" strokeWidth="8" fill="none" />
                <circle
                  cx="36"
                  cy="36"
                  r="32"
                  stroke="#22c55e"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 32}
                  strokeDashoffset={2 * Math.PI * 32 * (1 - 0.82)}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 0.5s" }}
                />
              </svg>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-green-600">
                82
              </span>
            </div>
          </div>
          <p className="text-center font-semibold text-green-600 mb-4">Match Score</p>
          {/* Progress Bars */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center text-green-600">
                <FaCheckCircle className="mr-2" /> Skills Match
              </span>
              <span className="font-bold text-green-600">85%</span>
            </div>
            <div className="w-full h-4 bg-green-100 rounded-full mb-2 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-400" style={{ width: "85%" }} />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center text-blue-600">
                <FaRegFileAlt className="mr-2" /> Experience Match
              </span>
              <span className="font-bold text-blue-600">78%</span>
            </div>
            <div className="w-full h-4 bg-blue-100 rounded-full mb-2 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" style={{ width: "78%" }} />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center text-purple-600">
                <FaRegEye className="mr-2" /> ATS Readability
              </span>
              <span className="font-bold text-purple-600">92%</span>
            </div>
            <div className="w-full h-4 bg-purple-100 rounded-full mb-2 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400" style={{ width: "92%" }} />
            </div>
          </div>
        </div>

        {/* Right Features */}
        <div className="flex-1 flex flex-col justify-center items-start px-2 lg:pl-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Will Your Resume Pass for <span className="text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-blue-400 bg-clip-text">This Job?</span>
          </h2>
          <p className="mb-7 text-gray-500 text-lg max-w-2xl">
            Upload your resume and the job description to instantly get your ATS resume score, see how well you match, and discover where you can improve.
          </p>
          <div className="space-y-5 mb-8">
            {info.map((it, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span>{it.icon}</span>
                <span>
                  <strong className="block text-gray-800">{it.title}</strong>
                  <span className="text-gray-500 text-[1rem]">{it.desc}</span>
                </span>
              </div>
            ))}
          </div>
          <button className="mt-2 inline-block px-7 py-3 bg-gradient-to-r from-[#8D31E6] to-[#2F80ED] text-white font-bold rounded-xl shadow-lg text-lg hover:scale-105 transition">
            Try Job Match Now
          </button>
        </div>
      </div>
    </section>
     <section className="w-full flex items-center justify-center bg-[#f8f9fb] py-14">
      <div className="relative bg-gradient-to-r from-[#fa7258] to-[#9e38e7] rounded-3xl flex flex-col md:flex-row items-center max-w-6xl w-full px-10 py-10 min-h-[480px]">
        {/* LEFT */}
        <div className="flex-1 z-10 flex flex-col justify-center items-start">
          <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg mb-8">
            Looking for a <br /> Manual Resume <br /> Review ?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-[420px] font-medium drop-shadow">
            Get a professionally crafted resume that reflects the best of what you are and helps you grab the opportunities you want.
          </p>
          <button className="px-8 py-4 bg-white text-xl font-bold text-[#7209c4] rounded-xl shadow-lg hover:bg-purple-100 transition">
            Get me a Manual Review
          </button>
        </div>

        {/* RIGHT: Person image & badges */}
        <div className="flex-1 relative flex justify-center items-center min-w-[340px]">
          {/* Actual Lady Image */}
          <img
            src="\PlacementAssistance\Certified-Experts.png"
            alt="Professional Lady"
            className="z-10 max-h-[420px] object-contain object-bottom"
            draggable="false"
          />
          
          {/* Badges */}
          <div className="absolute left-5 top-16 md:left-2 md:top-9 bg-white rounded-lg shadow px-4 py-2 flex items-center gap-2 text-base font-semibold">
            <FaAward className="text-yellow-500" /> Certified Experts
          </div>
          <div className="absolute right-5 top-20 md:right-7 md:top-5 bg-white rounded-lg shadow px-4 py-2 flex items-center gap-2 text-base font-semibold">
            <FaUserTie className="text-slate-700" /> industry experienced
          </div>
          <div className="absolute left-5 bottom-16 md:left-0 md:bottom-8 bg-white rounded-lg shadow px-4 py-2 flex items-center gap-2 text-base font-semibold">
            <FaUserCheck className="text-green-500" /> Personalized Guidance
          </div>
          <div className="absolute right-1 bottom-9 md:right-5 md:bottom-6 bg-white rounded-lg shadow px-4 py-2 flex items-center gap-2 text-base font-semibold">
            <FaStar className="text-yellow-500" />
            <span className="text-yellow-500 text-xl">★★★★★</span>
            <b className="text-black font-semibold ml-2">5 star Reviews by<br />Thousands of students</b>
          </div>
        </div>
      </div>
    </section>
    <SuccessStories/>
    <section className="w-full min-h-[340px] flex flex-col items-center justify-center bg-gradient-to-r from-[#BB28E7] to-[#2293EA] py-20">
      <h2 className="text-white text-center text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight">
        Ready to Land More Interviews?
      </h2>
      <p className="text-white text-center text-2xl mb-10 font-medium">
        Join thousands of professionals who&apos;ve improved their resume with Jobaaj
      </p>
      
      {/* CTA Button */}
      <button className="mx-auto mb-14 px-8 py-4 bg-white text-xl font-bold text-[#7209c4] rounded-xl shadow-lg hover:bg-purple-100 transition flex items-center gap-3">
        <FaUserFriends className="text-[#A536B2]" />
        Check Your Resume Now
      </button>
      
      {/* Info Stats */}
      <div className="flex flex-wrap gap-12 justify-center items-center mt-2 text-lg font-medium w-full">
        <div className="flex items-center gap-2 text-white">
          <FaUserFriends className="opacity-90" />
          <span>500K+ Resumes Checked</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <FaTrophy className="opacity-90" />
          <span>87% Success Rate</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <span>Privacy Guaranteed</span>
        </div>
      </div>
    </section>
    {/* Why Choose jobaaj */}
    <div className="py-10 md:py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-2">
        Why Choose Jobaaj?
      </h2>
      <p className="text-xl text-gray-500 text-center mb-8">
        See how we compare to other ATS checkers
      </p>
      <div className="max-w-4xl mx-auto rounded-2xl shadow-2xl bg-white overflow-hidden">
        {/* Header Row */}
        <div className="flex font-bold text-white text-lg rounded-t-2xl"
          style={{
            background: "linear-gradient(90deg, #BB28E7 0%, #2293EA 100%)",
          }}>
          <div className="flex-1 px-6 py-5">Features</div>
          <div className="flex-1 px-6 py-5 text-center">Jobaaj</div>
          <div className="flex-1 px-6 py-5 text-center">Other Platforms</div>
        </div>
        {/* Data Rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-center ${
              i % 2 === 1 ? "bg-[#f8f9fb]" : "bg-white"
            } px-6 py-5 transition`}
          >
            <div className="flex-1 font-semibold text-gray-700">{row.label}</div>
            <div className="flex-1 flex items-center justify-center">{row.jobaaj}</div>
            <div className="flex-1 flex items-center justify-center">{row.other}</div>
          </div>
        ))}
      </div>
    </div>
    {/* Frequently Asked Questions */}
    <div className="py-16 flex flex-col md:flex-row max-w-7xl mx-auto">
      {/* Left */}
      <div className="flex-1 px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
          Frequently Asked<br />Questions
        </h2>
        <p className="text-xl text-gray-500 mt-2 mb-4">
          Everything you need to know about ATS and resume optimization
        </p>
      </div>
      {/* Right: FAQ List */}
      <div className="flex-1 flex flex-col gap-6 px-2 md:px-8">
        {faqs.map((q, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-xl border transition-colors bg-white shadow-sm px-8 py-7 text-lg font-bold text-gray-800 cursor-pointer hover:border-blue-500 border-gray-200"
          >
            <span>{q}</span>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="8 12 14 18 20 12" stroke="#222843" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AtsChecker;

