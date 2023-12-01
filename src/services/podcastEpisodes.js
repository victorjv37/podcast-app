import axios from "axios";
import X2JS from "x2js";

const getPodcastEpisodes = async (id) => {
  const podcastUnordenedEpisodes = [];

  const conversionX2JS = async (feedUrl) => {
    try {
      const xmlResponse = await axios.get(feedUrl);
      const xmlData = xmlResponse.data;

      let x2js = new X2JS();
      const result = x2js.xml2js(xmlData);

      const descriptionPromise = result.rss.channel.description;
      const description = await descriptionPromise;

      return description;
    } catch (error) {
      console.error("Error fetching XML:", error);
    }
  };

  try {
    const response = await axios.get(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=201`
    );
    const results = response.data.results;
    const feedUrl = results[0].feedUrl;
    const description = { description: await conversionX2JS(feedUrl) };
    const formatTime = (value) => {
      return String(value).padStart(2, "0");
    };
    results.forEach((episode, index) => {
      const totalSeconds = Math.floor(episode.trackTimeMillis / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds / 60);
      const formattedDuration = `${hours > 0 ? formatTime(hours) + ":" : ""}
      ${formatTime(minutes)}:
      ${formatTime(seconds)}`;

      const date = episode.releaseDate.slice(0, 10);
      const invertDate = date.split("-").reverse().join("-");

      const url = episode.episodeUrl;

      podcastUnordenedEpisodes.push({
        title: episode.trackName,
        releaseDate: invertDate,
        duration: formattedDuration,
        episodeUrl: url,
        episodeDescription: episode.description
      });
    });
    const podcastEpisodes = podcastUnordenedEpisodes.slice(1, podcastUnordenedEpisodes.length);
    podcastEpisodes.push(description);
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
