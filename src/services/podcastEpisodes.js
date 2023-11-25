import axios from "axios";

const podcastEpisodes = [];
(async () => {
  const podcastIdList = [];
  let storagedNotParsedId = localStorage.getItem("podcastId");
  let storagedId = JSON.parse(storagedNotParsedId);
  if (storagedId) {
    if (!podcastIdList.includes(storagedId)) {
      podcastIdList.push(storagedId);
    }
  }
  try {
    const response = await axios.get(
      `https://itunes.apple.com/lookup?id=${storagedId}&media=podcast&entity=podcastEpisode&limit=201`
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
    const setListInLocalStorage = () =>
      localStorage.setItem(`podcastEpisodes${storagedId}`, JSON.stringify(podcastEpisodes));
    setListInLocalStorage();
    setInterval(setListInLocalStorage, 1000 * 60 * 60 * 24);
  } catch (error) {
    console.error("Error fetching data from the API:", error);
  }
})();

export default podcastEpisodes;
