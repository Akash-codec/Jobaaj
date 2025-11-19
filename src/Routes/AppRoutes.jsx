import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Jobs from "../pages/Jobs";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/drop-cv", element: <Jobs /> },
      { path: "/jobseeker-services", element: <Jobs /> },
      { path: "/placement-assistance", element: <Jobs /> },
      { path: "/ats-checker", element: <Jobs /> },
      { path: "/recruter-branding", element: <Jobs /> },
      { path: "/job-posting", element: <Jobs /> },
      { path: "/candidate-pool", element: <Jobs /> },
      { path: "/about-us", element: <Jobs /> },
      { path: "/contact-us", element: <Jobs /> },
      { path: "/our-blog", element: <Jobs /> },
      { path: "/jobaaj-cares", element: <Jobs /> },
      { path: "/post-job", element: <Jobs /> },
      { path: "/post-job", element: <Jobs /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
