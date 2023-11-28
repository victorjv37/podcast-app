import { useEffect, useState } from "react";
import getPodcastEpisodes from "../services/podcastEpisodes";
import Title from "./Title";
import PodcastData from "./PodcastData";
import PodcastEpisodes from "./PodcastEpisodes";
import PodcastEpisodesCounter from "./PodcastEpisodesCounter";

const PodcastDetail = () => {
  const [episodesList, setEpisodesList] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [episodesCounter, setEpisodesCounter] = useState("");

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
        <div>
          <PodcastData id={id} />
        </div>
        <div className="listcounterEpisodes">
          <PodcastEpisodesCounter episodeCounter={episodesCounter} />
          <PodcastEpisodes id={id} episodesList={episodesList} isLoaded={isLoaded} />
        </div>
      </main>
    </>
  );
};

export default PodcastDetail;
