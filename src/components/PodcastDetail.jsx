import { useEffect, useState } from "react";
import Title from "./Title";
import PodcastData from "./PodcastData";
import PodcastEpisodes from "./PodcastEpisodes";
import PodcastEpisodesCounter from "./PodcastEpisodesCounter";
import podcastEpisodes from "../services/podcastEpisodes";

const PodcastDetail = () => {
  const [episodesList, setEpisodesList] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  let storagedId = localStorage.getItem("podcastId");
  let storagedEpisodes = localStorage.getItem(`podcastEpisodes${storagedId}`);

  useEffect(() => {
    let podcastEpisodeList = JSON.stringify(podcastEpisodes);
    (async () => {
      if (storagedEpisodes) {
        setEpisodesList(JSON.parse(storagedEpisodes));
        setIsLoaded(true);
      } else {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setEpisodesList(JSON.parse(podcastEpisodeList));
          setIsLoaded(true);
        } catch (error) {
          console.log("Error bringing data to the component", error);
        }
      }
      console.log(storagedEpisodes);
    })();
  }, []);

  return (
    <>
      <header>
        <Title />
      </header>
      <main>
        <div>
          <PodcastData />
        </div>
        <div>
          <PodcastEpisodesCounter />
          <PodcastEpisodes episodesList={episodesList} />
        </div>
      </main>
    </>
  );
};

export default PodcastDetail;
