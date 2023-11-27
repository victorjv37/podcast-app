import { useEffect, useState } from "react";
import Title from "./Title";
import PodcastData from "./PodcastData";
import PodcastEpisodes from "./PodcastEpisodes";
import PodcastEpisodesCounter from "./PodcastEpisodesCounter";
import getPodcastEpisodes from "../services/podcastEpisodes";

const PodcastDetail = () => {
  const [episodesList, setEpisodesList] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [episodeCounter, setEpisodeCounter] = useState(undefined);

  const pathname = window.location.pathname;
  const id = pathname.slice(9, pathname.length);

  useEffect(() => {
    (async () => {
      try {
        let storagedEpisodes = localStorage.getItem(`podcastEpisodes${id}`);

        if (storagedEpisodes) {
          setEpisodesList(JSON.parse(storagedEpisodes));
          setEpisodeCounter(JSON.parse(storagedEpisodes).length);
        } else {
          const episodes = await getPodcastEpisodes(id);
          setEpisodesList(episodes);
          setEpisodeCounter(episodes.length);
          localStorage.setItem(`podcastEpisodes${id}`, JSON.stringify(episodes));
        }
        setIsLoaded(true);
      } catch (error) {
        console.log("Error bringing data to the component", error);
      }
    })();
  }, [id]);

  return (
    <>
      <header>
        <Title />
      </header>
      <main>
        <div>
          <PodcastData id={id} />
        </div>
        <div className="listcounterEpisodes">
          <PodcastEpisodesCounter episodeCounter={episodeCounter} />
          <PodcastEpisodes episodesList={episodesList} isLoaded={isLoaded} />
        </div>
      </main>
    </>
  );
};

export default PodcastDetail;
