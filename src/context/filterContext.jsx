import { createContext, useContext, useEffect, useState } from "react";

const PodcastListContext = createContext();

export const PodcastListProvider = ({ children }) => {
  const [podcastListFiltered, setPodcastListFiltered] = useState([]);

  return (
    <PodcastListContext.Provider value={{ podcastListFiltered, setPodcastListFiltered }}>
      {children}
    </PodcastListContext.Provider>
  );
};

export const usePodcastListContext = () => {
  return useContext(PodcastListContext);
};
