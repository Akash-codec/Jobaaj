/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../Redux/Slices/JobSlice";

export const UIContext = createContext();

export default function UIProvider({ children }) {
  // Navbar UIcontext 
  const [openJobs, setOpenJobs] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openOthers, setOpenOthers] = useState(false);
  const [openlogin, setOpenLogin] = useState(false);

  // Mobile Navbar UIcontext 
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileJobs, setMobileJobs] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileOthers, setMobileOthers] = useState(false);

  // HeroSection UIcontext 
  const [searchMode, setSearchMode] = useState("AI");


  // Fetch jobs run once 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs()); // run ONCE globally
  }, [dispatch]);

  
  return (
    <UIContext.Provider
      value={{
        openJobs,
        setOpenJobs,
        openServices,
        setOpenServices,
        openOthers,
        setOpenOthers,
        openlogin,
        setOpenLogin,
        mobileMenu,
        setMobileMenu,
        mobileJobs,
        setMobileJobs,
        mobileServices,
        setMobileServices,
        mobileOthers,
        setMobileOthers,
        searchMode,
        setSearchMode,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
