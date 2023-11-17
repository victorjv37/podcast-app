
const PodcastCardsFiltered = ({ podcastListFiltered }) => {

  return (
    <div>
      <ul>
        {podcastListFiltered &&
          podcastListFiltered.map((podcast, index) => (
            <li key={index}>
              <h4>{podcast.name}</h4>
              <p>{podcast.artist}</p>
              <img src={podcast.image}></img>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PodcastCardsFiltered;
