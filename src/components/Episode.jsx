import Title from "./Title";
import PodcastData from "./PodcastData";
import EpisodeData from "./EpisodeData";
import { useEffect, useState } from "react";

const Episode = () => {
  const [podcastFound, setPodcastFound] = useState("");

  const pathname = window.location.pathname;
  const podcastId = pathname.slice(9, 19);
  const episodeId = pathname.slice(28, pathname.length);

  useEffect(() => {
    let storagedNotParsedEpisodes = localStorage.getItem(`podcastEpisodes${podcastId}`);
    let storagedEpisodes = JSON.parse(storagedNotParsedEpisodes);
    if (storagedEpisodes) {
      const podcastFiltered = storagedEpisodes.filter((element, index) => {
        if (episodeId == index) {
          return element;
        }
      });
      setPodcastFound(podcastFiltered);
    }
  }, [podcastId]);
  return (
    <>
      <header className="detailHeader">
        <div className="detailTitle">
          <Title />
        </div>
      </header>
      <main>
        <div>
          <PodcastData podcastId={podcastId} />
        </div>
        <div>
          <EpisodeData podcastFound={podcastFound} />
        </div>
      </main>
    </>
  );
};

export default Episode;
