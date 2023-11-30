import { useEffect, useState } from "react";
import getPodcastEpisodes from "../services/podcastEpisodes";
import Title from "../components/Title";
import PodcastData from "../components/PodcastData";
import PodcastEpisodes from "../components/PodcastEpisodes";
import PodcastEpisodesCounter from "../components/PodcastEpisodesCounter";

const PodcastDetail = () => {
  const [episodesList, setEpisodesList] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [episodesCounter, setEpisodesCounter] = useState("");

  let notParsedLi = localStorage.getItem("podcastList");
  let storagedList = JSON.parse(notParsedLi);
  const pathname = window.location.pathname;
  const id = pathname.slice(9, 19);

  useEffect(() => {
    (async () => {
      try {
        let storagedEpisodes = localStorage.getItem(`podcastEpisodes${id}`);

        if (storagedEpisodes) {
          setEpisodesList(JSON.parse(storagedEpisodes));
        } else {
          const episodes = await getPodcastEpisodes(id);
          setEpisodesList(episodes);
          localStorage.setItem(`podcastEpisodes${id}`, JSON.stringify(episodes));
        }
        setIsLoaded(true);
      } catch (error) {
        console.log("Error bringing data to the component", error);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (episodesList) {
      setEpisodesCounter(episodesList.length);
    }
  }, [episodesList]);

  return (
    <>
      <header className="detailHeader">
        <div className="detailTitle">
          <Title />
        </div>
      </header>
      <main>
        <PodcastData id={id} storagedList={storagedList} />
        <div className="listcounterEpisodes">
          <PodcastEpisodesCounter episodeCounter={episodesCounter} />
          <PodcastEpisodes id={id} episodesList={episodesList} isLoaded={isLoaded} />
        </div>
      </main>
    </>
  );
};

export default PodcastDetail;
