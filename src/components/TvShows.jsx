import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "./Cards";

const TvShows = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchTvShows();
  }, []);

  const fetchTvShows = async () => {
    const data = await fetch("https://www.omdbapi.com/?apikey=d0153dfe&type=series&s=futurama");
    if (data.ok) {
      const seriesObj = await data.json();
      const fetchedSeries = seriesObj.Search.filter((serie) => serie.Poster !== "N/A");
      setSeries(fetchedSeries);
      console.log(fetchedSeries);
    }
  };

  return (
    <Container className=" ms-4" style={{ marginBottom: "5rem" }}>
      <main>
        <Container>
          <section>
            <h4 className="mb-2 fs-6 text-white"> Futurama</h4>
            <div className="row mb-5 ">
              {series.map((serie) => (
                <Card film={serie} key={serie.imdbID}></Card>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </Container>
  );
};

export default TvShows;
