import { createContext, useContext, useState } from "react";

const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterText, setFilterText] = useState("");
  return <FilterProvider value={{ filterText, setFilterText }}>{children}</FilterProvider>;
};

export const useFilter = () => {
  return useContext(filterContext);
};
