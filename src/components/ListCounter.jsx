import React from "react";

const ListCounter = ({ error, filteredPodcastsLength, allPodcastsLength, isfiltered }) => {
  return (
    <>
      {isfiltered ? (
        error ? (
          <div className="error">Unmatching Data...</div>
        ) : (
          <div>{filteredPodcastsLength}</div>
        )
      ) : (
        <div>{allPodcastsLength}</div>
      )}
    </>
  );
};

export default ListCounter;
