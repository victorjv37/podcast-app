import { useEffect, useState } from "react";
import getPodcastEpisodes from "../services/podcastEpisodes";
import Title from "../components/Title";
import PodcastData from "../components/PodcastData";
import PodcastEpisodes from "../components/PodcastEpisodes";
import PodcastEpisodesCounter from "../components/PodcastEpisodesCounter";
import { Stack } from "react-bootstrap";

const PodcastView = () => {
  const [episodesList, setEpisodesList] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [episodesCounter, setEpisodesCounter] = useState("");
  const [description, setDescription] = useState("");

  let notParsedLi = localStorage.getItem("podcastList");
  let storagedList = JSON.parse(notParsedLi);

  const pathname = window.location.pathname;
  const podcastIdMatch = pathname.match(/\/podcast\/(\d+)/);
  const id = podcastIdMatch[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        let storagedEpisodes = localStorage.getItem(`podcastEpisodes${id}`);

        if (storagedEpisodes) {
          const parsedEpisodes = JSON.parse(storagedEpisodes);
          setEpisodesList(parsedEpisodes);
          setEpisodesCounter(parsedEpisodes.length);
          const lastEpisode = parsedEpisodes[parsedEpisodes.length - 1];

          if (lastEpisode) {
            const lastEpisodeDescription = lastEpisode.description;
            setDescription(lastEpisodeDescription);
          }
        } else {
          const episodes = await getPodcastEpisodes(id);

          if (episodes && episodes.length > 0) {
            setEpisodesList(episodes);
            setEpisodesCounter(episodes.length);
            const lastEpisodeDescription = episodes[episodes.length - 1].description;
            setDescription(lastEpisodeDescription);
            localStorage.setItem(`podcastEpisodes${id}`, JSON.stringify(episodes));
          }
        }
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching or setting data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container podcastContainer" style={{ overflow: "hidden", maxHeight: "100vh" }}>
      <Stack gap={2}>
        <div className="p-3">
          <Title />
        </div>
        <Stack gap={2} className="row noWrap">
          <div className="podcastDataContainer">
            <PodcastData id={id} storagedList={storagedList} description={description} />
          </div>
          <div className="listcounterEpisodes">
            <PodcastEpisodesCounter episodeCounter={episodesCounter} />
            <PodcastEpisodes id={id} episodesList={episodesList} isLoaded={isLoaded} />
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default PodcastView;
