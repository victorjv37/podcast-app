import React from "react";

const ListCounter = ({ error, podcastListFilteredLength, podcastArrayLength, filtered }) => {
  return (
    <>
      {filtered ? (
        error ? (
          <div>Unmatching Data...</div>
        ) : (
          <div>{podcastListFilteredLength}</div>
        )
      ) : (
        <div>{podcastArrayLength}</div>
      )}
    </>
  );
};

export default ListCounter;
