import AudioPlayer from "./AudioPlayer";

const EpisodeData = ({ podcastEpisode }) => {
  return (
    <>
      {podcastEpisode && (
        <div className="episodeData">
          <h4>{podcastEpisode.title}</h4>
          <p id="episodeP">{podcastEpisode.episodeDescription}</p>
          <AudioPlayer audioSrc={podcastEpisode.episodeUrl} />
        </div>
      )}
    </>
  );
};

export default EpisodeData;
