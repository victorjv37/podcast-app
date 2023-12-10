import Title from "../components/Title";
import PodcastData from "../components/PodcastData";
import EpisodeData from "../components/EpisodeData";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";

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
      <div className="container">
        <Stack gap={2}>
          <div className="p-3">
            <Title />
          </div>
          <div className="p-3">
            <Stack gap={2}>
              <div className="p-3">
                <PodcastData
                  storagedList={storagedList}
                  podcastId={podcastId}
                  description={description}
                />
              </div>
              <div className="p-3">
                <EpisodeData podcastEpisode={podcastEpisode} />
              </div>
            </Stack>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default EpisodeView;
