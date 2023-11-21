import { useState, useEffect } from "react";
import { useFilter } from "../context/filterContext";
import podcastList from "../services/podcastList";
import PodcastCardsFiltered from "./PodcastCardsFiltered";

const InputFilter = ({ setFiltered, filtered, podcastListFiltered }) => {
  const [error, setError] = useState(null);
  const { filterText, setFilterText } = useFilter();

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
