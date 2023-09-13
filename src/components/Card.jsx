import "bootstrap/dist/css/bootstrap.min.css";

const Card = (props) => {
  return (
    <div className="col-6 col-sm-4 col-md-3 object-fit-contain ">
      <img src={props.film.Poster} alt="" style={{ height: 300 }} />
    </div>
  );
};

export default Card;
