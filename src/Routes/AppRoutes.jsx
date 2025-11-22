import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Jobs from "../pages/Jobs";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllJobSheeker from "../pages/AllJobSheeker";
import Signup from "../pages/Signup";
import PlacementAssistance from "../pages/PlacementAssistance";
import ResumeWriting from "../pages/ResumeWriting";
import AtsChecker from "../pages/AtsChecker";
import EmployerSignup from "../pages/EmployerSignup";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/drop-cv", element: <Jobs /> },
      { path: "/jobseeker-services", element: <AllJobSheeker /> },
      { path: "/placement-assistance", element: <PlacementAssistance/> },
      { path: "/resume-writing", element: <ResumeWriting/> },
      { path: "/ats-checker", element: <AtsChecker/> },
      { path: "/recruter-branding", element: <Jobs /> },
      { path: "/job-posting", element: <Jobs /> },
      { path: "/candidate-pool", element: <Jobs /> },
      { path: "/about-us", element: <Jobs /> },
      { path: "/contact-us", element: <Jobs /> },
      { path: "/our-blog", element: <Jobs /> },
      { path: "/jobaaj-cares", element: <Jobs /> },
      { path: "/post-job", element: <Jobs /> },
      { path: "/careers", element: <Jobs /> },
      { path: "/signup", element: <Signup/> },
      { path: "/employer-signup", element: <EmployerSignup /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
