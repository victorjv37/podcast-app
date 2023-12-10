import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

const PodcastCardsFiltered = ({ filteredPodcasts }) => {
  return (
    <div>
      {filteredPodcasts && (
        <Row xs={"auto"} lg={4} className="g-4 justify-content-center align-items-center">
          {filteredPodcasts.map((podcast, index) => (
            <Col key={index}>
              <Card className="text-center card" style={{ width: "13rem", height: "12.5rem" }}>
                <Link to={`/podcast/${podcast.id}`}>
                  <Image roundedCircle fluid src={podcast.image} alt={podcast.name} />
                  <Card.Body>
                    <Card.Title
                      style={{
                        fontSize: "1rem",
                        marginBottom: "1vh",
                        maxHeight: "2.36rem",
                        overflow: "hidden"
                      }}
                    >
                      {podcast.name}
                    </Card.Title>
                    <Card.Text
                      style={{ fontSize: "0.8rem", maxHeight: "1.15rem", overflow: "hidden" }}
                    >
                      Author: {podcast.artist}
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default PodcastCardsFiltered;
