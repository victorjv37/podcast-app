import axios from "axios";
import { parseString } from "xml2js";


  export const podcastDetail = () => {
  const podcastDetail = [];
  const podcastIdList = [];

  let storagedNotParsedId = localStorage.getItem("podcastId");
  let storagedId = JSON.parse(storagedNotParsedId);
  if (!podcastIdList.includes(storagedId)){
    podcastIdList.push(storagedId)
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://itunes.apple.com/lookup?id=${storagedId}`
      )
      const feedUrl = response.data.results[0].feedUrl;

      if (feedUrl){
        const feedResponse = await axios.get(feedUrl);
        const xmlData = feedResponse.data;
        
        parseString(xmlData, (error, result) =>{
          if(error){
            console.log(error + 'parseo xml fallido')
          }else{
            console.log(result)
          }
        })
      }else{
        console.log('Didnt found URL')
      }

      const setListInLocalStorage = () =>
      localStorage.setItem("podcastDetail", JSON.stringify(podcastDetail));
      setListInLocalStorage();
      setInterval(setListInLocalStorage, 1000 * 60 * 60 * 24);
    } catch (error) {
      console.error("Error al obtener datos de la API???:", error);
    }
  };
  fetchData();
};

export default podcastDetail;
