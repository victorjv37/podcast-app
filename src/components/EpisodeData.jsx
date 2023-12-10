import AudioPlayer from "./AudioPlayer";

const EpisodeData = ({ podcastEpisode }) => {
  return (
    <>
      {podcastEpisode && (
        <div className="card p-3">
          <h4>
            <strong>{podcastEpisode.title}</strong>
          </h4>
          <p id="episodeP">{podcastEpisode.episodeDescription}</p>
          <AudioPlayer audioSrc={podcastEpisode.episodeUrl} />
        </div>
      )}
    </>
  );
};

export default EpisodeData;
