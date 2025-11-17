import { createContext, useState } from "react";

const UIContext = createContext();

export default function UIProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <UIContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isSidebar,
        setIsSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
