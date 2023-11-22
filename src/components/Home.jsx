import InputFilter from "./InputFilter";
import ListCounter from "./ListCounter";
import PodcastCards from "./PodcastCards";
import PodcastCardsFiltered from "./PodcastCardsFiltered";
import Title from "./Title";
import podcastList from "../services/podcastList";
import { useState, useEffect } from "react";

const Home = () => {
  const [podcastArray, setPodcastArray] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [podcastListFiltered, setPodcastListFiltered] = useState("");
  const [error, setError] = useState(null);

  let storagedList = localStorage.getItem("podcastList");

  useEffect(() => {
    (async () => {
      if (storagedList) {
        setPodcastArray(JSON.parse(storagedList));
        setPodcastListFiltered(JSON.parse(storagedList));
        setLoaded(true);
      } else {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setPodcastArray(podcastList);
          setPodcastListFiltered(podcastList);
          setLoaded(true);
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
    setPodcastListFiltered(podcastFilteredArray);
  }, [filterText]);

  useEffect(() => {
    if (filtered) {
      if (podcastListFiltered.length === 0) {
        setError(true);
      } else if (podcastListFiltered.length !== 0) {
        setError(false);
      }
    }
  }, [podcastListFiltered]);

  return (
    <>
      <header>
        <Title />
        <InputFilter setFilterText={setFilterText} setFiltered={setFiltered} />
        <ListCounter
          error={error}
          podcastListFilteredLength={podcastListFiltered.length}
          podcastArrayLength={podcastArray.length}
          filtered={filtered}
        />
      </header>
      <div>
        {filtered ? (
          <PodcastCardsFiltered podcastListFiltered={podcastListFiltered} error={error} />
        ) : (
          <PodcastCards podcastArray={podcastArray} loaded={loaded} />
        )}
      </div>
    </>
  );
};

export default Home;
