import React from "react";

const ListCounter = ({ error, podcastListFiltered, podcastArray, filtered }) => {
  return (
    <>
      {filtered ? (
        error ? (
          <div>Unmatching Data...</div>
        ) : (
          <div>{podcastListFiltered.length}</div>
        )
      ) : (
        <div>{podcastArray.length}</div>
      )}
    </>
  );
};

export default ListCounter;
