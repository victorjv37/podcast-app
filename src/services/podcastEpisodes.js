import axios from "axios";
import { useParams } from "react-router";

const getPodcastEpisodes = async (id) => {
  const podcastEpisodes = [];
  try {
    const response = await axios.get(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=201`
    );
    const results = response.data.results;
    const formatTime = (value) => {
      return String(value).padStart(2, "0");
    };
    results.forEach((episode) => {
      const formattedDuration = `${formatTime(
        Math.floor(episode.trackTimeMillis / 1000 / 60)
      )}:${formatTime((episode.trackTimeMillis / 1000) % 60)}`;

      const date = episode.releaseDate.slice(0, 10);
      const invertDate = date.split("-").reverse().join("-");

      podcastEpisodes.push({
        title: episode.trackName,
        releaseDate: invertDate,
        duration: formattedDuration
      });
    });
    const setListInLocalStorage = (id) =>
      localStorage.setItem(`podcastEpisodes${id}`, JSON.stringify(podcastEpisodes));
    setListInLocalStorage(id);
    setInterval(setListInLocalStorage, 1000 * 60 * 60 * 24);
    return podcastEpisodes;
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    return [];
  }
};

export default getPodcastEpisodes;
