import { useState, createContext } from "react"

const defaultsSidebarValue = {
    sidebar: false,
    setSidebar: ()=>{}
}

export const SidebarContext = createContext(defaultsSidebarValue)

export const SidebarContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    return (
      <SidebarContext.Provider value={{ sidebar, setSidebar }}>
        {children}
      </SidebarContext.Provider>
    );
  };