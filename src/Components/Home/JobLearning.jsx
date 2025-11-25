import { GraduationCap, Award, NotebookText } from "lucide-react";

const JobLearning = () => {
  return (
    <section className="bg-white w-full mt-15 overflow-hidden">
      <div className="relative pt-5 px-3">
        <div className="w-full md:w-3/4 lg:w-full xl:w-3/5 max-w-7xl text-center mx-auto mb-1 py-1">
          <h2 className="text-[28px] font-bold text-dark">#Jobaajlearnings</h2>

          {/* Content */}
          <div className="flex justify-center mt-5 items-center flex-col lg:flex-row w-full">
            <div className="flex justify-center items-center my-2 py-3 flex-col lg:flex-row h-fit">
              {/* LEFT IMAGE CARD */}
              <div className="w-full lg:w-1/2 border-0 h-full bg-transparent">
                <div className="p-0">
                  <img
                    src="/Home/lakshay20242.webp"
                    alt="Saksham Agarwal"
                    loading="lazy"
                    width="546"
                    height="462"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* RIGHT FORM CARD */}
              <div className="w-full lg:w-1/2 lg:-ml-5 -mt-3 lg:my-4 h-full xl:py-5  rounded-[25px] bg-white shadow">
                <div className=" p-4 lg:px-8 text-center lg:text-left">
                  <div className="text-transparent bg-clip-text bg-linear-to-r from-[#ee3445] to-[#8e1390]">
                    <p className="mb-1 text-3xl font-bold text-gradient leading-10">
                      Education that turns your Dreams into Reality
                    </p>
                  </div>

                  {/* STRIP */}
                  <div className="flex justify-center items-center gap-3 mt-4 flex-wrap text-gray-400">
                    <div className="flex items-center">
                      <GraduationCap /> Nanodegrees
                    </div>
                    <div className="flex items-center">
                      <Award /> Programs
                    </div>
                    <div className="flex items-center">
                      <NotebookText /> Crash Courses
                    </div>
                  </div>

                  {/* FORM */}
                  <form className="mt-6">
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="phone"
                        placeholder="Enter Your Phone no"
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                      />
                    </div>

                    <div className="mb-4">
                      <select
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                        required
                      >
                        <option value="" className="text-gray-400">
                          Select Your Interest
                        </option>
                        <option value="Data Science & Analytics">
                          Data Science & Analytics
                        </option>
                        <option value="Finance - Investment Banking, Stock Market, etc.">
                          Finance - Investment Banking, Stock Market, etc.
                        </option>
                        <option value="Management Consulting">
                          Management Consulting
                        </option>
                        <option value="Product Management">
                          Product Management
                        </option>
                        <option value="Full Stack Web Development">
                          Full Stack Web Development
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-3 py-2 rounded-md"
                    >
                      Schedule Link call
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobLearning;
