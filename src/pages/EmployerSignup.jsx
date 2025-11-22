import React, { useContext } from "react";
import { CircleCheck } from "lucide-react";
import { UIContext } from "../Context/UIContext";
import { EmployeeSignupForm } from "../Components/Employee-signup-form";

const EmployerSignup = () => {
  const { setOpenLogin } = useContext(UIContext);
  return (
    <div className="bg-white h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] max-w-6xl mx-auto gap-4 lg:gap-25 py-30 px-12">
        {/* Left banner */}
        <div>
          <div className="py-4 mt-15">
            <h3 className="text-[18px] font-semibold leading-5">
              Bring together the power of hiring the right talent at the right
              time
            </h3>
            <p className="py-2 text-sm text-gray-500">
              Jobaaj is built on a unique customer first approach addressing the
              criticality of the hiring process through broad yet simple
              infrastructure.
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
                Quick job posting
              </p>

              <p className="flex items-start gap-2 leading-5">
                <CircleCheck
                  size={20}
                  className="shrink-0"
                  fill="#387eff"
                  stroke="white"
                />
                Advance applicant filters and ranking
              </p>

              <p className="flex items-start gap-2 leading-5">
                <CircleCheck
                  size={20}
                  className="shrink-0"
                  fill="#387eff"
                  stroke="white"
                />
                Remove hiring bias with just a toggle
              </p>

              <p className="flex items-start gap-2 leading-5">
                <CircleCheck
                  size={20}
                  className="shrink-0"
                  fill="#387eff"
                  stroke="white"
                />
                Access our vast database with simple clicks
              </p>
            </div>
          </div>
        </div>

        {/* right form */}
        <div className="shadow-xl">
          <EmployeeSignupForm />
          <div className="text-gray-500 px-7 pb-10">
            Already have an account?{" "}
            <button
              onClick={() => {
                setOpenLogin(true);
              }}
              className="text-[#377dff]"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerSignup;
