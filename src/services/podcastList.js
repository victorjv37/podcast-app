import axios from "axios";

const podcastList = [];
(async () => {
  try {
    const response = await axios.get(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    const dataArray = response.data.feed.entry;
    dataArray.forEach((data) => {
      podcastList.push({
        name: data["im:name"].label,
        artist: data["im:artist"].label,
        image: data["im:image"][0].label,
        id: data.id.attributes["im:id"],
        description: data.summary
      });
    });
    const setListInLocalStorage = () =>
      localStorage.setItem("podcastList", JSON.stringify(podcastList));
    setListInLocalStorage();
    setInterval(setListInLocalStorage, 1000 * 60 * 60 * 24);
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
  }
})();

export default podcastList;

// const handleClick = (index) => {
//   const elementFiltered = podcastListFiltered.filter((element, i) => i === index);
//   localStorage.setItem("podcastId", JSON.stringify(elementFiltered[0].id));
// };
