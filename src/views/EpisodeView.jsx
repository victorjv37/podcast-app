import Title from "../components/Title";
import PodcastData from "../components/PodcastData";
import EpisodeData from "../components/EpisodeData";
import { useEffect, useState } from "react";

const Episode = () => {
  const [podcastEpisode, setPodcastEpisode] = useState("");

  const pathname = window.location.pathname;
  const podcastId = pathname.slice(9, 19);
  const episodeId = pathname.slice(28, pathname.length);

  let notParsedLi = localStorage.getItem("podcastList");
  let storagedList = JSON.parse(notParsedLi);

  useEffect(() => {
    let storagedNotParsedEpisodes = localStorage.getItem(`podcastEpisodes${podcastId}`);
    let storagedEpisodes = JSON.parse(storagedNotParsedEpisodes);
    if (storagedEpisodes) {
      const podcastFound = storagedEpisodes.find((element, index) => episodeId == index);
      setPodcastEpisode(podcastFound);
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
        <PodcastData storagedList={storagedList} podcastId={podcastId} />
        <div className="episodeDataContainer">
          <EpisodeData podcastEpisode={podcastEpisode} />
        </div>
      </main>
    </>
  );
};

export default Episode;
