import React from "react";

const ListCounter = ({ error, filteredPodcastsLength, allPodcastsLength, isfiltered }) => {
  return (
    <>
      {isfiltered ? (
        error ? (
          <div className="error counter">Unmatching Data...</div>
        ) : (
          <div className="counter">{filteredPodcastsLength}</div>
        )
      ) : (
        <div className="counter">{allPodcastsLength}</div>
      )}
    </>
  );
};

export default ListCounter;
