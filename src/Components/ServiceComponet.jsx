import React from 'react'
const cards = [
  {
    title: "Not Satisfied With <br> Your Career Progression?",
    img: "/All job-sheeker/assistance-service.png",
  },
  {
    title: "Not liking the work <br> you are doing",
    img: "/All job-sheeker/assistance-service2.png",
  },
  {
    title: "Not Getting Enough<br>Opportunities?",
    img: "/All job-sheeker/service3.png",
  },
];
const ServiceComponet = () => {
  return (
    <div> <div className="text-center mt-14 px-4 bg-white ">
        <h1 className="text-xl font-bold">Jobaaj Placement Assistance Service</h1>
        <p className="text-lg mt-2 text-gray-600">Finding jobs is what we do best!</p>
      </div>

      {/* Cards Section */}
      <div className="text-center grid grid-cols-1 lg:grid-cols-3 gap-6 px-10 mx-10 mt-10 bg-white">
        {cards.map((c, i) => (
          <div key={i} className="rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:border hover:scale-105 transition">
            <img src={c.img} width="60" height="70" className="mx-auto mb-4" alt={c.title.replace(/<br>/g, "")} />
            <h3 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: c.title }} />
          </div>
        ))}
      </div>
      </div>
  )
}

export default ServiceComponet