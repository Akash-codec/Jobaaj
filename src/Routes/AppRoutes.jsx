import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Jobs from "../pages/Jobs";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/jobs", element: <Jobs/> },

    ],
  },
  { path: "*", element: <NotFound/> },
]);
