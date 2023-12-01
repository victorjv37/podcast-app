import Title from "../components/Title";
import PodcastData from "../components/PodcastData";
import EpisodeData from "../components/EpisodeData";
import { useEffect, useState } from "react";

const EpisodeView = () => {
  const [podcastEpisode, setPodcastEpisode] = useState("");
  const [description, setDescription] = useState("");

  const pathname = window.location.pathname;
  const podcastIdMatch = pathname.match(/\/podcast\/(\d+)\/episode\/(\d+)/);
  const podcastId = podcastIdMatch[1];
  const episodeId = podcastIdMatch[2];

  let notParsedLi = localStorage.getItem("podcastList");
  let storagedList = JSON.parse(notParsedLi);

  useEffect(() => {
    let storagedNotParsedEpisodes = localStorage.getItem(`podcastEpisodes${podcastId}`);
    let storagedEpisodes = JSON.parse(storagedNotParsedEpisodes);

    if (storagedEpisodes && episodeId >= 0 && episodeId < storagedEpisodes.length) {
      const podcastFound = storagedEpisodes[episodeId];
      const podcastDescription = storagedEpisodes[storagedEpisodes.length - 1].description;
      setPodcastEpisode(podcastFound);
      setDescription(podcastDescription);
    }
  }, [podcastId, episodeId]);

  return (
    <>
      <header className="detailHeader">
        <div className="detailTitle">
          <Title />
        </div>
      </header>
      <main>
        <PodcastData storagedList={storagedList} podcastId={podcastId} description={description} />
        <div className="episodeDataContainer">
          <EpisodeData podcastEpisode={podcastEpisode} />
        </div>
      </main>
    </>
  );
};

export default EpisodeView;
