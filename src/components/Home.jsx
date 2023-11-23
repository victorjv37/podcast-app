import InputFilter from "./InputFilter";
import ListCounter from "./ListCounter";
import PodcastCards from "./PodcastCards";
import PodcastCardsFiltered from "./PodcastCardsFiltered";
import Title from "./Title";
import podcastList from "../services/podcastList";
import { useState, useEffect } from "react";

const Home = () => {
  const [allPodcasts, setAllPodcasts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filteredPodcasts, setFilteredPodcasts] = useState("");
  const [error, setError] = useState(null);

  let storagedList = localStorage.getItem("podcastList");

  useEffect(() => {
    (async () => {
      if (storagedList) {
        setAllPodcasts(JSON.parse(storagedList));
        setFilteredPodcasts(JSON.parse(storagedList));
        setIsLoaded(true);
      } else {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setAllPodcasts(podcastList);
          setFilteredPodcasts(podcastList);
          setIsLoaded(true);
        } catch (error) {
          console.log("Error bringing data to the component", error);
        }
      }
    })();
  }, []);

  useEffect(() => {
    const podcastFilteredArray = podcastList.filter((element) => {
      let elementName = element.name;
      let authorName = element.artist;

      if (filterText) {
        if (
          elementName.toLowerCase().includes(filterText.toLowerCase()) ||
          authorName.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return element;
        }
      }
    });
    setFilteredPodcasts(podcastFilteredArray);
  }, [filterText]);

  useEffect(() => {
    if (isFiltered) {
      if (filteredPodcasts.length === 0) {
        setError(true);
      } else if (filteredPodcasts.length !== 0) {
        setError(false);
      }
    }
  }, [filteredPodcasts]);

  return (
    <>
      <header className="header">
        <Title />
        <div className="input-listcounter">
          <ListCounter
            error={error}
            filteredPodcastsLength={filteredPodcasts.length}
            allPodcastsLength={allPodcasts.length}
            isfiltered={isFiltered}
          />
          <InputFilter setFilterText={setFilterText} setIsFiltered={setIsFiltered} />
        </div>
      </header>
      <>
        {isFiltered ? (
          <PodcastCardsFiltered filteredPodcasts={filteredPodcasts} />
        ) : (
          <PodcastCards allPodcasts={allPodcasts} isLoaded={isLoaded} />
        )}
      </>
    </>
  );
};

export default Home;
