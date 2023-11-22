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

  console.log("error", error, "filtered", filtered, "filtertext", filterText);

  let storagedList = localStorage.getItem("podcastList");

  useEffect(() => {
    (async () => {
      if (storagedList) {
        setPodcastArray(JSON.parse(storagedList));
        setLoaded(true);
      } else {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setPodcastArray(podcastList);
          setLoaded(true);
        } catch (error) {
          console.log("Error bringing data to the component", error);
        }
      }
    })();
  }, [filterText]);

  return (
    <>
      <header>
        <Title />
        <InputFilter setFilterText={setFilterText} setFiltered={setFiltered} />
        <ListCounter
          error={error}
          podcastListFiltered={podcastListFiltered}
          podcastArray={podcastArray}
          filtered={filtered}
        />
      </header>
      <div>
        {filtered ? (
          <PodcastCardsFiltered
            filterText={filterText}
            podcastListFiltered={podcastListFiltered}
            setPodcastListFiltered={setPodcastListFiltered}
            error={error}
            setError={setError}
            filtered={filtered}
          />
        ) : (
          <PodcastCards podcastArray={podcastArray} loaded={loaded} />
        )}
      </div>
    </>
  );
};

export default Home;
