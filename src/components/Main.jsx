import { Component } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
  state = {
    film1: [],
    film2: [],
    film3: [],
  };

  getFilms1 = async (title) => {
    try {
      const data = await fetch("https://www.omdbapi.com/?apikey=d0153dfe&type=movie&s=" + title);

      if (data.ok) {
        const films = await data.json();
        this.setState({ film1: films.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };
  getFilms2 = async (title) => {
    try {
      const data = await fetch("https://www.omdbapi.com/?apikey=d0153dfe&type=movie&s=" + title);

      if (data.ok) {
        const films = await data.json();
        this.setState({ film2: films.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };
  getFilms3 = async (title) => {
    try {
      const data = await fetch("https://www.omdbapi.com/?apikey=d0153dfe&type=movie&s=" + title);

      if (data.ok) {
        const films = await data.json();
        this.setState({ film3: films.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getFilms1("The+Lord+of+the+Rings");
    this.getFilms2("Iron+man");
    this.getFilms3("Hobbit");
  }

  render() {
    return (
      <div className="container-fluid ms-4" style={{ marginBottom: "5rem" }}>
        <main>
          <section>
            <h4 className="mb-2 fs-6 text-white"> Lord of The Ring</h4>
            <div className="row mb-5 ">
              {this.state.film1.length !== 0 && (
                <Card film={this.state.film1[0]} key={this.state.film1[0].imdbId}></Card>
              )}
              ;
              {this.state.film1.length !== 0 && (
                <Card film={this.state.film1[2]} key={this.state.film1[2].imdbId}></Card>
              )}
              ;
              {this.state.film1.length !== 0 && (
                <Card film={this.state.film1[1]} key={this.state.film1[1].imdbId}></Card>
              )}
              ;
            </div>
            <section>
              <h4 className="mb-2 fs-6 text-white">Iron man</h4>
              <div className="row mb-5 gx-1">
                {this.state.film2.length !== 0 && (
                  <Card film={this.state.film2[0]} key={this.state.film2[0].imdbId}></Card>
                )}
                ;
                {this.state.film2.length !== 0 && (
                  <Card film={this.state.film2[2]} key={this.state.film2[2].imdbId}></Card>
                )}
                ;
                {this.state.film2.length !== 0 && (
                  <Card film={this.state.film2[1]} key={this.state.film2[1].imdbId}></Card>
                )}
                ;
              </div>
            </section>
          </section>
          <h4 className="mb-2 fs-6 text-white">The Hobbit</h4>
          <div className="row mb-5 gx-1">
            {this.state.film3.length !== 0 && <Card film={this.state.film3[0]} key={this.state.film3[0].imdbId}></Card>}
            ;
            {this.state.film3.length !== 0 && <Card film={this.state.film3[1]} key={this.state.film3[1].imdbId}></Card>}
            ;
            {this.state.film3.length !== 0 && <Card film={this.state.film3[2]} key={this.state.film3[2].imdbId}></Card>}
            ;
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
