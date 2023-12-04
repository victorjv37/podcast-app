import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

const PodcastData = ({ id, podcastId, storagedList, description }) => {
  const [podcastFound, setPodcastFound] = useState("");

  useEffect(() => {
    const podcast = storagedList.find((podcast) => podcast.id === id || podcast.id === podcastId);
    setPodcastFound(podcast);
  }, [id, podcastId]);

  return (
    <>
      {podcastFound && (
        <Card className="card podcastCard">
          <Link to={`/podcast/${id || podcastId}`}>
            <Card.Body>
              <Image
                style={{ float: "left" }}
                rounded
                className="podcastImage"
                src={podcastFound.image}
                alt={podcastFound.name}
              />
              <Card.Title>{podcastFound.name}</Card.Title>
              <Card.Text>by: {podcastFound.artist}</Card.Text>
              <Card.Title>Description:</Card.Title>
              <Card.Text>
                {description && (
                  <p id={description.length < 160 ? "shorterP" : "p"}>{description}</p>
                )}
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      )}
    </>
  );
};

export default PodcastData;
