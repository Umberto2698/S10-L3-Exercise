import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const DetailsMovies = () => {
  const params = useParams();
  const [film, setFilm] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const dataObj = await fetch("https://www.omdbapi.com/?apikey=d0153dfe&i=" + params.movieId);
    const commentsObj = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/" + params.movieId + "/comments",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTZlY2MwMzRmZjAwMTQwM2Y0ZTgiLCJpYXQiOjE2OTQ2MTUxNzEsImV4cCI6MTY5NTgyNDc3MX0.v0n7_XjidOpxVL8puEnqorlGQ0lzkOl4Cke5BLdYfPk",
        },
      }
    );
    if (dataObj.ok && commentsObj.ok) {
      const data = await dataObj.json();
      const comments = await commentsObj.json();
      setFilm(data);
      setComments(comments);
      console.log(comments);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (film) {
    return (
      <Container className="text-white">
        <div className="text-center my-3">
          <img src={film.Poster} width={300} height={300} alt="" />
        </div>
        <h1>{film.Title}</h1>
        <p>{film.Plot}</p>
        <ListGroup variant="flush">
          <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold">Director</div>
              {film.Director}
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold">Writer</div>
              {film.Writer}
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold">Actors</div>
              {film.Actors}
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold">Awards</div>
              {film.Awards}
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold">Genres</div>
              {film.Genre}
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold">Released Date</div>
              {film.Released}
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold">Box Office</div>
              {film.BoxOffice}
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold">Ratings</div>
              {film.imdbRating}
            </div>
          </ListGroup.Item>
        </ListGroup>
        <CommentsList commentsList={comments} setCommentList={setComments}></CommentsList>
        <AddComment movieId={params.movieId} commentsList={comments} setCommentList={setComments}></AddComment>
      </Container>
    );
  }
};

export default DetailsMovies;
