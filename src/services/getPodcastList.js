import axios from "axios";

const getPodcastList = async () => {
  const podcastList = [];
  try {
    const response = await axios.get(
      "https://rss.applemarketingtools.com/api/v2/es/podcasts/top/100/podcasts.json"
    );
    const dataArray = response.data.feed.results;
    console.log(dataArray);

    dataArray.forEach((data) => {
      podcastList.push({
        name: data.name,
        artist: data.artistName,
        image: data.artworkUrl100,
        id: data.id
      });
    });

    const setListInLocalStorage = () =>
      localStorage.setItem("podcastList", JSON.stringify(podcastList));
    setListInLocalStorage();
    setInterval(setListInLocalStorage, 1000 * 60 * 60 * 24);

    return podcastList;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default getPodcastList;
