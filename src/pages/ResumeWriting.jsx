import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import ServiceComponet from '../Components/ServiceComponet'
import PriceCard from '../Components/PriceCard'
const faqs = [
 {
    q: "What information will you need to make my resume?"
  },
  {
    q: "In how many days can the resume be delivered?"
  },
  {
    q: "Will I be able to edit the resume in the future?"
  },
];
const ResumeWriting = () => {
  return (
    <div className="bg-white">
    {/* hero section */}
<section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-white">
      {/* Illustration */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/PlacementAssistance/hero section pg3.png" 
          alt="Resume Illustration"
          className="max-w-md w-full"/>
      </div>
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
        <h1 className="text-4xl font-bold mb-2">
          Land interviews with <br />
          Resumes that are  <span className="ml-2 font-bold px-2 rounded text-blue-600 bg-blue-100 inline-block text-underline-yellow">
          <TypeAnimation
            sequence={[
           'Meticulos', 1400,
          'Powerful', 1400,
         'Cutting-Edge', 1400,
          ]}
          cursor={true}
         repeat={Infinity}
        style={{ display: 'inline-block' }} />
       </span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Get a professionally crafted resume that reflects the best of what you are and helps you grab the opportunities you want.
        </p>
        <a
          href="/plans"
          className="inline-block bg-white border border-gray-300 rounded-full px-6 py-3 text-blue-600 font-semibold shadow transition hover:bg-gray-100"
        >
          Checkout Our Plans <span className="font-bold">Click Here &rarr;</span>
        </a>
      </div>
    </section>
    {/* Resume Writing Service */}
    <div className="text-center py-12 px-4 bg-white">
  <h1 className="text-2xl md:text-4xl font-bold mb-4">
    Resume Writing Service
  </h1>
  <h2 className="text-xl md:text-2xl text-gray-500 mb-8">
    Leverage your work portfolio and land the interview
  </h2>
  <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
    A Resume is fundamentally the starting point of your job-seeking journey. A good resume includes keywords, powerful hooks, engaging descriptions, and much more. As one of the best resume writing services in India, we ensure that your resume reflects your work portfolio in the most optimum way possible. This includes making your Resume ATS friendly, leveraging your work experience, skills, and education, and describing how they make you a worthy candidate for the job. Apart from the Resume writing service, we would also be equipping you with powerful, and well-crafted resume writing tips and samples to help you further ahead in your job search.
  </p>
</div>
<div className="text-center text-2xl md:text-4xl font-bold mb-4 py-12 px-4 bg-white">
    Why Resume Writing?
<ServiceComponet/>
</div>
<p className="text-center my-7sm:text-inline text-2xl text-gray-500 bg-white">If all above points are true, then you are at the right place. Our team of HRs will help you 
<span><br/>find the right job in no time.</span></p>

{/*Benefits of Resume Writing */}
<div className="w-full bg-white pt-6 pb-20 flex flex-col items-center justify-center">
                {/* Main Heading */}
<h2 className="text-4xl font-bold text-center mb-16 mt-4" style={{ letterSpacing: "-1px" }}>
  Benefits of Resume Writing
 </h2>
 {/* Main Content Row */}
<div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4">
 {/* Left Content */}
 <div className="md:w-[55%] w-full flex flex-col items-center md:items-start text-center md:text-left">
  {/* Subheading */}
 <h3 className="text-2xl md:text-2xl font-bold text-black mb-5">
 Pass through the ATS algorithms
 </h3>
 {/* Para */}
   <p className="text-lg md:text-lg text-gray-500 font-normal tracking-tight leading-relaxed" style={{ maxWidth: 520 }}>
         90% of resumes don’t meet the HRs’ eyes, because of the simple fact that most companies today use ATS algorithms to filter through resumes. The ATS algorithm ensures that irrelevant resumes that don’t match the job description are not allowed to go ahead to HR. Thus it is important to use keywords matching your job description in your resume to beat the ATS algorithms. With our professional resume writing service, your Resume will be optimized to become ATS friendly, thereby ensuring that your resume stays in the top 10% of applicants.
 </p>
 </div>
{/* Right Image */}
                    <div className="md:w-[45%] w-full flex justify-center items-center mt-10 md:mt-0">
 <img
 src="/PlacementAssistance/re2.png"
  alt="Calendar"
 className="max-w-[390px] w-full"
style={{ minWidth: "320px" }} />
  </div>
  </div>
 </div>
 <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 bg-white">
  {/* Image (Left Side) */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
    <img
      src="PlacementAssistance/land.png" 
      alt="Resume Interview Illustration"
      className="max-w-md w-full h-auto"
      style={{ objectFit: 'contain' }}
    />
  </div>

  {/* Text (Right Side) */}
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-2">
    <h2 className="text-4xl font-bold text-center md:text-left mb-8 mt-2">
      Land relatively more interviews
    </h2>
    <p className="text-gray-500 text-center md:text-left text-xl leading-relaxed max-w-2xl">
      An optimized resume can heavily increase the chances of landing an interview. As one of the best Resume writing services in India, we ensure that your resume is optimized to a definite structure and is more engaging to its viewers, (which are the hiring managers, and the recruiters). Often people need help with resume writing because they seem to be unable to land interviews even after having spent hours on their resumes. However, we have delivered more than 1000 resumes to our clients and the average shortlisting rate for our clients has always been more than 50%! With 3+ years of experience in crafting resumes across various finance domains, we know exactly what the recruiters are looking for in a resume.
    </p>
  </div>
</section>
<section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 bg-white">
  {/* Text (Left Side) */}
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
    <h2 className="text-4xl font-bold text-center md:text-left mb-8 mt-2">
      Build a professional work portfolio
    </h2>
    <p className="text-gray-500 text-center md:text-left text-xl leading-relaxed max-w-2xl">
      Your resume is going to go a long way with you. Any investment that you make to 
      achieve the perfect resume is always worth it, because that resume is altogether your work portfolio, and it’s going to be your first introduction to your prospective employers. You have to make sure that the first impression becomes a lasting one. With our top Resume writing services, you can get a professionally structured resume that contains all your work experience, skills, and educational background in an optimum manner, highlighting the best of your potential and your professional achievements.
    </p>
  </div>
  {/* Image (Right Side) */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-12 md:mt-0">
    <img src="PlacementAssistance/com.png" alt="Work Portfolio Illustration"className="max-w-lg w-full h-auto"style={{ objectFit: 'contain' }}/>
  </div>
</section>
<PriceCard/>

<div className="w-full py-20 flex flex-col items-center bg-white">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Frequently Asked Questions(FAQs)
    </h2>

    {/* FAQ Rows */}
    <div className="w-full max-w-5xl mx-auto flex flex-col px-20">
      {faqs.map((item, idx) => (
        <div
          key={idx}
          className="w-full py-8 border-b flex items-center justify-between cursor-pointer transition group"
        >
          <span className="text-2xl font-bold text-[#212F56] group-hover:text-blue-600 transition-colors">
            {item.q}
          </span>
          <span className="text-2xl text-[#212F56] group-hover:text-blue-600 font-bold">
            +
          </span>
        </div>
      ))}
    </div>
  </div>
{/* still curious */}
<div className="w-full flex flex-col items-center mt-20 bg-white">
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
  )
}

export default ResumeWriting