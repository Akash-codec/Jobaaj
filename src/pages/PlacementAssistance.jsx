import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ServiceComponet from '../Components/ServiceComponet';
import YourInfo from '../Components/YourInfo';
const plans = [
  {
    title: "Placement Assistance Service",
    features: [
      "1 Month of continuous expert support",
      "Job leads tailored to your profile",
      "Human assistance in identifying relevant roles",
      "Personalized job suggestions based on your preference"
    ],
    price: "₹1,999",
    oldPrice: "₹2,999",
    discount: "33% OFF",
    btn: "Buy Now"
  },
  {
    title: "Resume and LinkedIn Service",
    bestValue: true,
    features: [
      "1 month of profile building services",
      "Professional resume writing service",
      "LinkedIn profile optimization",
      "Guidance to boost recruiter visibility",
      "Format, content & keyword optimization for better reach",
    ],
    price: "₹3,499",
    oldPrice: "₹6,499",
    discount: "46% OFF",
    btn: "Buy Now"
  },
  {
    title: "Complete Suite",
    recommended: true,
    features: [
      "1-month dedicated human placement assistance",
      "Personalized job leads matched to your profile",
      "Professionally written, ATS-optimized resume",
      "LinkedIn profile makeover for better visibility",
      "Expert guidance on resumes, job search, and visibility",
      "Exclusive community access for job tips and updates"
    ],
    price: "₹4,999",
    oldPrice: "₹9,499",
    discount: "47% OFF",
    btn: "Buy Now"
  }
];
const faqs = [
  {
    q: "Is It A Placement Guarantee Service ?",
    a: "No, we provide placement assistance, not guaranteed placement. Our aim is to provide you the best leads and guidance."
  },
  {
    q: "Can I get a refund if the service is not working for me?",
    a: "Please refer to the refund policy or contact our team for refund conditions and process."
  },
  {
    q: "Can I Pay After Getting Placed?",
    a: "Payment is required in advance for all our assistance services."
  }
];

const PlacementAssistance = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            {/* Container */}
            <div className="flex flex-row items-center justify-between max-w-5xl w-full px-8 py-10 mx-auto">
                {/* Left*/}
                <div className="w-2/5 flex justify-center">
                    <img
                        src="/PlacementAssistance/page2banner1.png"
                        alt="Handshake Illustration"
                        className="w-full h-auto max-h-96"/>
                </div>
                {/* Right Text Content */}
                <div className="w-3/5 flex flex-col items-start">
                    <h1 className="text-4xl font-bold leading-tight mb-4">
                        Finding you jobs that<br /> are{' '}
                        <span className="ml-2 font-bold px-2 rounded text-blue-600 bg-blue-100 inline-block">
                            <TypeAnimation
                                sequence={[
                                    'Relevant', 1400,
                                    'Convertible', 1400,
                                    'Fulfilling', 1400,
                                ]}
                                cursor={true}
                                repeat={Infinity}
                                style={{ display: 'inline-block' }}
                            />
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Avail Placement Assistance to get quality job opportunities every day that cater to your needs and requirements!
                    </p>
                    <div className="inline-flex items-center px-6 py-4 border-2 border-gray-300 rounded-full shadow-sm bg-white">
                        <span className="text-lg text-gray-500 font-medium">
                            Checkout Our Plans
                        </span>
                        <a href="#"
                            className="ml-2 text-lg text-blue-600 font-bold flex items-center hover:underline">
                            Click Here
                            <span className="ml-2 text-blue-600 font-bold">&#8250;</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Below Heading */}
            <h2 className="text-3xl font-bold text-center mt-12">
                Placement Assistance Service
            </h2>
            <div className="w-full bg-white py-8">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="mb-3 text-center text-lg text-gray-500">
                        Finding jobs is what we do best
                    </div>
                    <div className="text-center text-base text-gray-500 leading-relaxed mb-9">
                        You might find it tricky to find job opportunities that cater to your needs and can help you push your career forward.
                        <br />
                        That’s where placement assistance services come to aid. Our professional Placement Service ensures that you get consistent job leads that cater to your career demands and that are highly compatible with your work profile.
                        <br />
                        Our team of expert HRs will also provide you with complete job assistance throughout the process.
                    </div>
                    <div className="mt-16 mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-center">
                            Get Placed in Top MNCs
                        </h2>
                    </div>
                </div>
            </div>
            {/* Marquee */}
            <div className="w-full my-10 py-6 bg-white">
                {/*  Marquee/ component */}
                {/* <MarqueeLogos logos={logos} /> */}
            </div>
            <ServiceComponet />
            <div className="text-center text-gray-500 text-lg mt-8 mb-4">
                If all above points are true, then you are at the right place.<br />
                Our team of HRs will help you find the right job in no time.
            </div>
            {/* calender area */}
            <div className="w-full bg-white pt-6 pb-20 flex flex-col items-center justify-center">
                {/* Main Heading */}
                <h2 className="text-4xl font-bold text-center mb-16 mt-4" style={{ letterSpacing: "-1px" }}>
                    Benefits of Placement Assistance Service
                </h2>
                {/* Main Content Row */}
                <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                    {/* Left Content */}
                    <div className="md:w-[55%] w-full flex flex-col items-center md:items-start text-center md:text-left">
                        {/* Subheading */}
                        <h3 className="text-2xl md:text-2xl font-bold text-black mb-5">
                            Get hot job leads continuously for 30 days
                        </h3>
                        {/* Para */}
                        <p className="text-lg md:text-lg text-gray-500 font-normal tracking-tight leading-relaxed" style={{ maxWidth: 520 }}>
                            Get placed in your dream job with the best placement assistance service in India. With our vast network of recruiters, and expert team of HRs, we ensure that fresh job vacancies catering to your demand and skills are provided to you continuously for 30 days. You will have access to quality job leads, and job assistance regarding how to convert those leads.
                        </p>
                    </div>
                    {/* Right Image */}
                    <div className="md:w-[45%] w-full flex justify-center items-center mt-10 md:mt-0">
                        <img
                            src="/PlacementAssistance/calendar.png"
                            alt="Calendar"
                            className="max-w-[390px] w-full"
                            style={{ minWidth: "320px" }}
                        />
                    </div>
                </div>
            </div>
            {/* Admin */}
            <div className="w-full bg-white py-14 flex flex-col items-center justify-center">
                {/* Content as two columns */}
                <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                    {/* Left Side Image */}
                    <div className="md:w-[45%] w-full flex justify-center items-center mb-10 md:mb-0">
                        <img
                            src="/PlacementAssistance/placement-admin.png"
                            alt="Admin Dashboard Illustration"
                            className="max-w-[440px] w-full"
                            style={{ minWidth: "320px" }}
                        />
                    </div>
                    {/* 24*7 */}
                    {/* Right Side Text */}
                    <div className="md:w-[55%] w-full flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="md:text-2xl font-bold text-gray-900 mb-6">
                            Convert job opportunities that cater to your skillset
                        </h2>
                        <p className="text-lg text-gray-500 leading-8 font-normal tracking-tight max-w-2xl">
                            When you opt for Jobaaj's placement assistance service, you get job leads tailored to your resume specifications, and your job needs. Our HRs correspond with you to best understand your job and career requirements and provide you with filtered leads to maximize the best results for you. You will also have the best job assistance experience whilst shortlisting your job offers and choosing the best offer that helps your career in the long run.
                        </p>
                    </div>
                </div>
            </div>
            {/* Get 24 */}
            <div className="w-full bg-white py-16 flex flex-col items-center justify-center">
                <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                    {/* Left - Text Block */}
                    <div className="md:w-[55%] w-full flex flex-col items-center md:items-start text-center md:text-left">
   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-left md:ml-8">
      Get 24/7 job assistance
                        </h2>

                        <p className="text-lg text-gray-500 leading-relaxed mb-4 max-w-2xl">
                            Apart from getting regular hot job leads, you will also have access to our best job assistance service. Our HRs will constantly guide you over how to approach the best job profiles, interview optimizations, and offer shortlisting.
                            You will also be able to resolve all your job-related doubts 24/7 and get instantaneous responses to your queries.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed mb-2 max-w-2xl">
                            You will also gain permanent access to our job assistance Telegram channel, where you will be provided with fresh job openings and vacancies as soon as they open up. Apart from this, you will also be equipped with many of our premium training and learning resources as an absolute bonus for free.
                        </p>
                    </div>
                    {/* Right - Illustration */}
                    <div className="md:w-[45%] w-full flex justify-center items-center mt-8 md:mt-0">
                        <img
                            src="/PlacementAssistance/customer-support.png" a
                            alt="Support Illustration"
                            className="max-w-[420px] w-full"
                            style={{ minWidth: "320px" }}
                        />
                    </div>
                </div>
            </div>
            {/* card */}
             <div className="w-full bg-white pt-12 pb-20 flex flex-col  items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-1">
        Pick the perfect plan for you
      </h2>
      <div className="text-center text-gray-500 mb-4 text-base">
        We believe in getting the job done! <span className="text-xl">😊</span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-5xl items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={plan.title}
            className="relative border-2 border-blue-300 rounded-xl bg-white shadow-lg px-6 py-8 flex flex-col items-center h-full transition hover:shadow-2xl"
          >
            {/* Badge */}
            {plan.bestValue && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs px-5 py-1 bg-blue-500 text-white rounded-full font-bold shadow-md">
                Best Value
              </div>
            )}
            {plan.recommended && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs px-5 py-1 bg-blue-500 text-white rounded-full font-bold shadow-md">
                Recommended
              </div>
            )}
            {/* Title */}
            <h3 className="text-lg font-semibold text-center mb-3 mt-2">{plan.title}</h3>
            {/* Features */}
            <ul className="mb-5 mt-3 space-y-3 text-gray-700 text-[1rem] font-normal w-full">
              {plan.features.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500 text-base font-extrabold">✓</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex-1" />
            {/* Price row */}
            <div className="w-full text-center mb-2 flex items-end justify-center gap-2">
              <span className="text-xl font-bold text-black">{plan.price}</span>
              <span className="line-through text-gray-400 text-base">{plan.oldPrice}</span>
            </div>
            <div className="mb-5">
              <span className="bg-yellow-200 text-gray-800 font-bold px-2 py-1 rounded text-xs">
                {plan.discount}
              </span>
            </div>
            {/* Buy Now button */}
            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              {plan.btn}
             </button>
          </div>
        ))}
      </div>
    </div>
    <YourInfo/>
     <div className="w-full py-20 flex flex-col items-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions(FAQs)
      </h2>

      {/* FAQ List */}
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-0">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className={`w-full py-6 px-2 md:px-6 border-b flex items-center justify-between cursor-pointer hover:bg-gray-50 group transition`}
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <span className="text-lg font-semibold transition-colors group-hover:text-blue-600">
              {item.q}
            </span>
            <span className="text-2xl font-bold transition-colors group-hover:text-blue-600">
              {open === idx ? "-" : "+"}
            </span>
          </div>
        ))}

        {/* Optional: show answer below if needed */}
        {faqs.map((item, idx) =>
          open === idx ? (
            <div key={idx + "_a"} className="w-full px-6 py-4 text-left bg-blue-50 text-gray-700">
              {item.a}
            </div>
          ) : null
        )}
      </div>

      {/* Still curious section */}
      <div className="w-full flex flex-col items-center mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 pt-2">
          Still curious?
        </h2>
        <p className="text-center text-gray-500 text-base max-w-2xl mb-2">
          We always try our best to answer all frequently asked questions. For further queries, please mail us at{" "}
          <a href="mailto:contact@jobaaj.com" className="text-blue-600 hover:underline">
            contact@jobaaj.com
          </a>. Our support team will reply within 24 hours. <span className="text-lg">😊</span>
        </p>
      </div>
    </div>
    </div>
    
     );
};

export default PlacementAssistance;
 