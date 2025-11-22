import React from 'react'

const YourInfo = () => {
  return (
    <div><div className="w-full py-10 bg-white flex flex-col items-center">
        <h1 className="text-center font-bold text-3xl md:text-4xl mb-3 pt-2">
          Your Info Feed
        </h1>
        <p className="text-center text-gray-500 text-xl mb-10">
          News updates to keep you informed and ahead
        </p>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          {/* Card 1: ProCapitas */}
          <div className="bg-white rounded-2xl border shadow-lg flex flex-row items-center px-8 py-8 max-w-xl w-full transition-all duration-200
          hover:-translate-y-2 hover:shadow-2xl"
            style={{ minHeight: "300px" }}
          >
            {/* Left side: logo, heading, text */}
            <div className="flex flex-col align-top justify-center min-w-[170px] mr-5">
              <img src="/All job-sheeker/procapitaslogo.png" alt="ProCapitas logo" className="w-14 h-14 mb-3" />
              <h2 className="text-2xl font-semibold mb-2">ProCapitas</h2>
              <div className="text-gray-700 mb-1 text-base font-normal">Learn Finance!</div>
              <div className="text-gray-700 mb-1 text-base font-normal">From Real-Time News</div>
              <a className="text-blue-600 mt-2 font-semibold hover:underline cursor-pointer text-lg" href="#">
                Know More
              </a>
            </div>
            {/* Right side: two charts */}
            <div className="flex flex-col gap-3 items-center flex-1">
              <img src="/All job-sheeker/Capital-Budgeting-Tool-1.webp"
                alt="Chart 1"
                className="w-full max-w-[240px] object-contain rounded"/>
            </div>
          </div>
          {/* Card 2: Jobaaj News */}
          <div className="bg-white rounded-2xl border shadow-lg flex flex-row items-center px-8 py-8 max-w-xl w-full transition-all duration-200
                    hover:-translate-y-2 hover:shadow-2xl"
            style={{ minHeight: "300px" }}
          >
            {/* Left side: logo, heading, text */}
            <div className="flex flex-col align-top justify-center min-w-[170px] mr-5">
              <img src="/All job-sheeker/bird.png" alt="Jobaaj news logo" className="w-14 h-14 mb-3" />
              <h2 className="text-2xl font-semibold mb-2">Jobaaj News</h2>
              <div className="text-gray-700 mb-1 text-base font-normal">Stay Updated</div>
              <div className="text-gray-700 mb-1 text-base font-normal">With relevant news</div>
              <a className="text-blue-600 mt-2 font-semibold hover:underline cursor-pointer text-lg" href="#">
                Know More
              </a>
            </div>
            {/* Right side: illustration */}
            <div className="flex flex-col gap-3 items-center flex-1">
              <img src="/All job-sheeker/Tool-2.webp"
                alt="News Illustration"
                className="w-full max-w-[240px] object-contain rounded" />
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default YourInfo