import InputFilter from "../components/InputFilter";
import ListCounter from "../components/ListCounter";
import PodcastCards from "../components/PodcastCards";
import PodcastCardsFiltered from "../components/PodcastCardsFiltered";
import Title from "../components/Title";
import getPodcastList from "../services/getPodcastList";
import { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";

const Home = () => {
  const [allPodcasts, setAllPodcasts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filteredPodcasts, setFilteredPodcasts] = useState("");
  const [error, setError] = useState(null);

  let storagedList = localStorage.getItem("podcastList");

  useEffect(() => {
    const fetchData = async () => {
      if (!storagedList) {
        const podcasts = await getPodcastList();
        setAllPodcasts(podcasts);
        setFilteredPodcasts(podcasts);
        setIsLoaded(true);
      } else {
        setAllPodcasts(JSON.parse(storagedList));
        setFilteredPodcasts(JSON.parse(storagedList));
        setIsLoaded(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const podcastFilteredArray = allPodcasts.filter((element) => {
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
      <Stack gap={2}>
        <div className="p-2">
          <Title />
          <ListCounter
            error={error}
            filteredPodcastsLength={filteredPodcasts.length}
            allPodcastsLength={allPodcasts.length}
            isfiltered={isFiltered}
          />
          <InputFilter setFilterText={setFilterText} setIsFiltered={setIsFiltered} />
        </div>
        <div className="p-2">
          {isFiltered ? (
            <PodcastCardsFiltered filteredPodcasts={filteredPodcasts} />
          ) : (
            <PodcastCards allPodcasts={allPodcasts} isLoaded={isLoaded} />
          )}
        </div>
      </Stack>
    </>
  );
};

export default Home;
