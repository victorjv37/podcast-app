import axios from "axios";

  const podcastList = [];
  const fetchData = async () => {
        try {
          const response = await axios.get(
            'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
          )
          const dataArray = response.data.feed.entry;
          dataArray.forEach(data => {
            podcastList.push({
              name :  data["im:name"].label,
              artist : data["im:artist"].label,
              image : data["im:image"][0].label
            })
          });
        } catch (error) {
          console.error("Error al obtener datos de la API:", error);
        }
      }
      fetchData()
      
      export default podcastList

