import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <div className="col-6 col-sm-4 col-md-3 object-fit-contain">
      <Card>
        <div className="d-flex flex-column">
          <img src={props.film.Poster} alt="" style={{ height: 300 }} />
          <Card.Footer>
            <Link to={"/details/" + props.film.imdbID}>
              <Button>Details</Button>
            </Link>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
