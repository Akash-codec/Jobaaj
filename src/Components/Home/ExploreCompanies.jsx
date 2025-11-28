import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterJobsByCategory } from "../../Redux/Slices/JobSlice";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "accounting",
    label: "Accounting Finance",
    icon: "/Home/ExploreCompanies/accounting.svg",
  },
  {
    id: "design",
    label: "Product Management",
    icon: "/Home/ExploreCompanies/design.svg",
  },
  {
    id: "corporate_finance",
    label: "Corporate Finance",
    icon: "/Home/ExploreCompanies/corporate_finance.svg",
  },
  {
    id: "data_science",
    label: "Data Science",
    icon: "/Home/ExploreCompanies/data_science.svg",
  },
  {
    id: "legal",
    label: "Legal & Regulatory",
    icon: "/Home/ExploreCompanies/legal.svg",
  },
  {
    id: "management",
    label: "Management",
    icon: "/Home/ExploreCompanies/management.svg",
  },
  {
    id: "investment_banking",
    label: "Investment Banking",
    icon: "/Home/ExploreCompanies/investment_banking.svg",
  },
];
function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diff = (now - past) / 1000; // difference in seconds

  if (diff < 3600) return `${Math.floor(diff / 3600)} hours ago`; // less than 1 hour → 0 hours ago

  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`; // hours

  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`; // days (1–6)

  return `${Math.floor(diff / 604800)} weeks ago`; // 7+ days → weeks
}

const ExploreCompanies = () => {
  const dispatch = useDispatch();

  const filteredJobs = useSelector((state) => state.jobs.categorizedJob);
  const jobs = useSelector((state) => state.jobs.jobs);
  const [selectedCategory, setSelectedCategory] = useState("accounting");

  // Run once on load
  useEffect(() => {
    if (jobs.length > 0) {
      dispatch(filterJobsByCategory(selectedCategory));
    }
  }, [jobs, selectedCategory, dispatch]);

  // Debug
  console.log(filteredJobs);

  return (
    <section className="mx-auto mt-15">
      <div className="max-w-7xl py-8 px-5 mx-auto bg-linear-to-br from-[#e1ecff] to-[#fdfefe]">
        <h1 className="max-w-xl mx-auto text-center text-4xl font-bold">
          Explore 3,67,369 companies that boost your career
        </h1>

        <div className="flex flex-nowrap overflow-scroll md:overflow-hidden scroll-mt-10 md:flex-wrap justify-center items-center mt-8 jobs-tabs">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`tab max-h-25 flex flex-col gap-2 justify-center items-center rounded-xl cursor-pointer p-4 ${
                cat.id === selectedCategory
                  ? "bg-linear-to-br from-[#8356FF] to-[#367CFF] text-white"
                  : "bg-white"
              }`}
              onClick={() => {
                setSelectedCategory(cat.id);
                dispatch(filterJobsByCategory(cat.id));
              }}
            >
              <img
                src={cat.icon}
                width="35"
                height="35"
                loading="lazy"
                alt={cat.label}
                className={`hidden lg:block ${
                  cat.id === selectedCategory
                    ? "brightness-0 invert"
                    : "invert-0"
                }`}
              />

              <span
                className={`font-bold ${
                  cat.id === selectedCategory
                    ? "text-white"
                    : "bg-clip-text text-transparent bg-linear-to-br from-[#8356FF] to-[#367CFF]"
                }`}
              >
                {cat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
          {filteredJobs.map((job, index) => {
            if (index >= 6) return null; // show only first 6
            return (
              <div className="p-2">
                <div className="bg-white shadow-md rounded-xl p-5 border flex flex-col justify-between border-gray-100 h-full">
                  {/* Time Ago */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-gray-500 text-sm">
                      {timeAgo(job.postedAt)}
                    </div>
                  </div>

                  {/* Company + Title */}
                  <div className="flex items-start mb-2 gap-3">
                    <div className="w-[60px] h-[50px]">
                      <img
                        src={job.companyLogo}
                        alt={job.company}
                        loading="lazy"
                        width={60}
                        height={50}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://cdn.nishtyainfotech.com/content/jobaaj/assets/img/building.png";
                        }}
                        className="object-contain"
                      />
                    </div>

                    <div className="grow">
                      {/* Job Title */}
                      <h3 className="text-lg font-semibold leading-tight">
                        <Link
                          href={job.jobLink}
                          target="_blank"
                          className="hover:text-blue-600 duration-200"
                        >
                          {job.title}
                        </Link>
                      </h3>

                      {/* Company + Applicants */}
                      <div className="text-sm text-gray-600 mt-1">
                        <Link
                          href={job.companyLink}
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          {job.company}
                        </Link>{" "}
                        • {job.applicants}+ Applicants
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 my-2">
                    {job.tags?.[0] && (
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded">
                        {job.tags[0]}
                      </span>
                    )}

                    {job.tags?.[1] && (
                      <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded">
                        {job.tags[1]}
                      </span>
                    )}
                  </div>

                  {/* Skills */}
                  <div>
                    <div className="text-gray-500 mb-2">
                      {job.skills.join(" • ")}
                    </div>

                    {/* Footer */}
                    <div className="border-t-2 border-gray-400 mb-2 w-full h-2"></div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold">
                        <div>{job.experience}</div>
                        <div className="text-sm font-normal">{job.location}</div>
                      </div>

                      <Link
                        className="bg-[#374151] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 duration-200"
                        target="_blank"
                        href={job.jobLink}
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-[#4777fe] rounded-xl my-10 py-2 px-5 text-white font-bold">Show more</button>
        </div>
      </div>
    </section>
  );
};

export default ExploreCompanies;
