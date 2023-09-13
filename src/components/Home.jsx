import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Main from "./Main";

import "../css/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default Home;
