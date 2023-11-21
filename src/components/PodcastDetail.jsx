import { useEffect, useState } from "react";
import podcastDetail from "../services/podcastDetail";

const PodcastDetail = () => {
  const [podcastDetailList, setPodcastDetailList] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      if (podcastDetailList) {
        setPodcastDetailList(JSON.parse(podcastDetail));
        setLoaded(true);
      } else {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setPodcastDetailList(podcastDetail);
          setLoaded(true);
        } catch (error) {
          console.log("Error bringing data to the component", error);
        }
      }
    })();
  }, []);

  return <>{loaded ? <div>Cargado???</div> : <div>nooo.....</div>}</>;
};

export default PodcastDetail;
