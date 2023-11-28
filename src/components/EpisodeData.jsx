const EpisodeData = ({ podcastFound }) => {
  return (
    <>
      {podcastFound && (
        <div>
          <h4>{podcastFound[0].title}</h4>
          <p>{podcastFound[0].episodeDescription}</p>
          <audio controls>
            <source src={podcastFound[0].episodeUrl} type="audio/mp3" />
          </audio>
        </div>
      )}
    </>
  );
};

export default EpisodeData;
