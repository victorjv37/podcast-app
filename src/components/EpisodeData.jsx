import AudioPlayer from "./AudioPlayer";

const EpisodeData = ({ podcastFound }) => {
  return (
    <>
      {podcastFound && (
        <div className="episodeData">
          <h4>{podcastFound[0].title}</h4>
          <p id="episodeP">{podcastFound[0].episodeDescription}</p>
          <AudioPlayer audioSrc={podcastFound[0].episodeUrl} />
        </div>
      )}
    </>
  );
};

export default EpisodeData;
