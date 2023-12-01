import AudioPlayer from "./AudioPlayer";

const EpisodeData = ({ podcastEpisode }) => {
  return (
    <>
      {podcastEpisode && (
        <div className="episodeData">
          <AudioPlayer audioSrc={podcastEpisode.episodeUrl} />
          <h4>{podcastEpisode.title}</h4>
          <p id="episodeP">{podcastEpisode.episodeDescription}</p>
        </div>
      )}
    </>
  );
};

export default EpisodeData;
