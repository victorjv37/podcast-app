import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const PodcastEpisodes = ({ episodesList, isLoaded, id }) => {
  return (
    <>
      {isLoaded ? (
        episodesList && (
          <div className="episodeCard">
            <Table className="br-3" rounded striped style={{ width: "95%" }}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {episodesList.map((episode, index) => (
                  <tr key={index}>
                    <td>
                      <Link to={`/podcast/${id}/episode/${index}`}>{episode.title}</Link>
                    </td>
                    <td>{episode.releaseDate}</td>
                    <td>{episode.duration}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default PodcastEpisodes;
