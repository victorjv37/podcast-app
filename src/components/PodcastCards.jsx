import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

const PodcastCards = ({ allPodcasts, isLoaded }) => {
  return (
    <div>
      {isLoaded ? (
        <Row xs={"auto"} lg={4} className="g-4 justify-content-center align-items-center">
          {allPodcasts.map((podcast, index) => (
            <Col key={index}>
              <Card className="text-center card" style={{ width: "13rem", height: "12.5rem" }}>
                <Link to={`/podcast/${podcast.id}`}>
                  <Image roundedCircle fluid src={podcast.image} alt={podcast.name} />
                  <Card.Body>
                    <Card.Title>{podcast.name}</Card.Title>
                    <Card.Text>Author: {podcast.artist}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PodcastCards;
