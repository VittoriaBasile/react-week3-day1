import { Badge, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetResultsAction } from "../Redux/ACTIONS";

const Nav = () => {
  const favourites = useSelector((state) => state.favourites.content.length);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetResultsAction());
  };
  return (
    <Navbar bg="light">
      <Container>
        <Link className="nav-link" to="/" onClick={handleReset}>
          Home
        </Link>

        <Link className="nav-link" to="/favourites">
          Favourites{" "}
          <span>
            <Badge bg="dark">{favourites}</Badge>
          </span>
        </Link>
      </Container>
    </Navbar>
  );
};
export default Nav;
