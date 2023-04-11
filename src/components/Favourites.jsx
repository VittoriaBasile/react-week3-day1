import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import Company from "./Company";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  const navigate = useNavigate();
  return (
    <>
      {favourites.length > 0 ? (
        <Container>
          <Row>
            <Col>
              {favourites.map((company, index) => (
                <Company key={index} company={company} i={index} />
              ))}
            </Col>
          </Row>
        </Container>
      ) : (
        <Row>
          <Col>
            <Alert variant="success" className="text-center">
              Ancora nessun preferito
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                torna in home
              </Button>
            </Alert>
          </Col>
        </Row>
      )}
    </>
  );
};
export default Favourites;
