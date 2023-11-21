import { useState, useEffect } from "react";
import { usePodcastListContext } from "../context/filterContext";
import podcastList from "../services/podcastList";

const InputFilter = ({ setFiltered, filtered }) => {
  debugger;
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const { podcastListFiltered, setPodcastListFiltered } = usePodcastListContext();

  useEffect(() => {
    const podcastFilteredArray = podcastList.filter((element) => {
      let elementName = element.name;
      let authorName = element.artist;

      if (filterText) {
        if (
          elementName.toLowerCase().includes(filterText.toLowerCase()) ||
          authorName.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return element;
        }
      }
    });
    setPodcastListFiltered(podcastFilteredArray);
  }, [filterText]);

  useEffect(() => {
    if (podcastListFiltered) {
      if (filterText && podcastListFiltered.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }, [filterText]);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    setFiltered(true);
    if (event.target.value === "") {
      setFiltered(false);
    }
  };

  return (
    <>
      <input type="text" placeholder="Search podcast" onChange={handleFilterChange} />
      {(error === true && <div>No matching data</div>) || (
        <h4>
          {podcastListFiltered &&
            (podcastListFiltered.length === 0 || error === null
              ? podcastList.length
              : podcastListFiltered.length)}
        </h4>
      )}
    </>
  );
};

export default InputFilter;
