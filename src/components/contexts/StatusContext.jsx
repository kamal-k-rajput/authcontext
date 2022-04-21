import { createContext, useState } from "react";

const StatusContext = createContext();

const StatusContextProvider = ({ children }) => {
    const [status, setstatus] = useState(false);
  const handlestatus = (value) => {
    setstatus(value);
  };
  return (
    <StatusContext.Provider value={{ status, handlestatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export { StatusContext, StatusContextProvider };
