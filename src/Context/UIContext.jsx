/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const UIContext = createContext();

export default function UIProvider({ children }) {
  const [openJobs, setOpenJobs] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openOthers, setOpenOthers] = useState(false);
  const [openlogin, setOpenLogin] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileJobs, setMobileJobs] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileOthers, setMobileOthers] = useState(false);

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
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
