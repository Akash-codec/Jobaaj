import React, { useContext } from "react";
import { SignupForm } from "../Components/signup-form";
import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { UIContext } from "../Context/UIContext";

const Signup = () => {
  const {
      setOpenLogin,
    } = useContext(UIContext);
  return (
    <div className="bg-white h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] max-w-6xl mx-auto gap-4 lg:gap-6 p-5">
        {/* Left banner */}
        <div>
          <div className="py-4">
            <h3 className="text-[18px] font-semibold leading-5">
              Getting a job should not be difficult
            </h3>
            <p className="py-2 text-sm text-gray-500">
              Jobaaj is built on a unique customer first approach addressing the
              criticality of getting a job through a seamless yet optimised
              process
            </p>
          </div>
          <div>
            <h3 className="text-[18px] font-semibold leading-5">
              How we do it:
            </h3>
            <div className="py-2 space-y-2 text-sm text-gray-500">
              <p className="flex items-start gap-2 leading-5">
                <CircleCheck
                  size={20}
                  className="shrink-0"
                  fill="#387eff"
                  stroke="white"
                />
                Quick apply
              </p>

              <p className="flex items-start gap-2 leading-5">
                <CircleCheck
                  size={20}
                  className="shrink-0"
                  fill="#387eff"
                  stroke="white"
                />
                Optimise your CV
              </p>

              <p className="flex items-start gap-2 leading-5">
                <CircleCheck
                  size={20}
                  className="shrink-0"
                  fill="#387eff"
                  stroke="white"
                />
                See how your CV score for a job
              </p>

              <p className="flex items-start gap-2 leading-5">
                <CircleCheck
                  size={20}
                  className="shrink-0"
                  fill="#387eff"
                  stroke="white"
                />
                Build your brand through LinkedIn Optimisation tool
              </p>
            </div>
          </div>
        </div>

        {/* Center banner */}
        <div>
          <SignupForm />
          <div className="text-gray-500">Already have an account? <button onClick={()=>{setOpenLogin(true)}} className="text-[#377dff]">Sign in</button></div>
        </div>

        {/* Right banner */}
        <div>
          <div className="flex flex-col justify-center max-w-1/2 mx-auto items-center py-4">
            <span className="mb-3 text-gray-500 text-sm">Continue with</span>
            <div className="border border-[#377dff] rounded-2xl text-sm px-2 py-1">
              <div className="flex">
                <a href="#" className="flex items-center gap-2">
                  <img
                    src="/Navbar/google.svg"
                    alt="Google"
                    width="19"
                    height="19"
                  />
                  <span className="text-[#377dff]">Google</span>
                </a>
              </div>
            </div>
            <div className="relative w-full my-3">
              <div className="w-full border-b-2 border-gray-400"></div>
              <span className="text-sm text-gray-500 px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                OR
              </span>
            </div>
            <div className="border border-[#377dff] rounded-2xl text-sm px-2 py-1">
              <div className="flex">
                <a href="#" className="flex items-center gap-2">
                  <img
                    src="/Navbar/linkedin.svg"
                    alt="Google"
                    width="19"
                    height="19"
                  />
                  <span className="text-[#377dff]">Linkedin</span>
                </a>
              </div>
            </div>
          </div>
          <Link
            to="/jobseeker-services"
            target="_blank"
            className="cursor-default"
          >
            <div className="bg-[#13538a] w-full rounded-lg">
              <div className="text-white flex flex-col items-center gap-5 px-1 py-10">
                <h3 className="text-[18px] font-semibold text-center tracking-wide leading-4.5">
                  Complete Job Assistance Service
                </h3>
                <div className="py-2 space-y-2 max-w-9/10 mx-auto text-[12px] font-semibold">
                  <p className="flex items-center gap-2 leading-5">
                    <CircleCheck
                      size={20}
                      className="shrink-0"
                      fill="#fc7f2e"
                      stroke="white"
                    />
                    ATS Approved Resume Writing Services
                  </p>

                  <p className="flex items-start gap-2 leading-5">
                    <CircleCheck
                      size={20}
                      className="shrink-0"
                      fill="#fc7f2e"
                      stroke="white"
                    />
                    Linkedin Optimization Services
                  </p>

                  <p className="flex items-start gap-2 leading-5">
                    <CircleCheck
                      size={20}
                      className="shrink-0"
                      fill="#fc7f2e"
                      stroke="white"
                    />
                    Placement Assistance Services
                  </p>

                  <p className="flex items-start gap-2 leading-5">
                    <CircleCheck
                      size={20}
                      className="shrink-0"
                      fill="#fc7f2e"
                      stroke="white"
                    />
                    30 Days Featured Profile
                  </p>
                </div>
                <button className="bg-[#fc7f2e] px-5 py-1 rounded-md hover:scale-105">
                  <span className="text-sm font-semibold">Click Here</span>
                </button>
                <div className="mx-auto p-2">
                  <img src="/Navbar/jobseeker_girl_banner.png" alt="" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
