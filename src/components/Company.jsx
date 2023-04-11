import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteCompanyAction } from "../Redux/ACTIONS";

const Company = ({ company, i }) => {
  const dispatch = useDispatch();
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${company.company_name}`}>{company.company_name}</Link>
      </Col>
      <Col>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(DeleteCompanyAction(i));
          }}
        >
          DELETE FAVOURITES
        </Button>
      </Col>
    </Row>
  );
};
export default Company;
