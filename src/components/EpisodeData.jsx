import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const EpisodeData = ({ podcastEpisode }) => {
  const track = [
    {
      url: podcastEpisode.episodeUrl,
      title: "",
      tags: [""]
    }
  ];

  return (
    <>
      {podcastEpisode && (
        <div className="card p-3">
          <h4>
            <strong>{podcastEpisode.title}</strong>
          </h4>
          <p id="episodeP">{podcastEpisode.episodeDescription}</p>
          <div className="container">
            <Player trackList={track} />
          </div>
        </div>
      )}
    </>
  );
};

export default EpisodeData;
