import React from 'react'
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

const PriceCard = () => {
  return (
    <div> {/* card */}
             <div className="w-full bg-white pt-12 pb-20 flex flex-col items-center">
  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-1 flex flex-wrap justify-center items-center gap-2">
    Pick the perfect plan for
    <span className="flex items-center gap-1">
      you
      <img src="\PlacementAssistance\price-arrow.png" alt="arrow" className="h-16 w-auto inline-block" />
    </span>
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
    </div>
  )
}

export default PriceCard