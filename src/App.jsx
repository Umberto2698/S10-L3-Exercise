import Home from "./components/Home";
import TvShows from "./components/TvShows";
import DetailsMovies from "./components/DetailsMovies";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Logo from "./assets/logo.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar expand="md" className="mb-2" style={{ background: "linear-gradient(to bottom, black, #141414)" }}>
          <Container>
            <Navbar.Brand href="#">
              <img src={Logo} alt="Netflix" style={{ width: 80, height: 35 }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto align-items-center">
                <NavLink to="/" className="nav-link px-2 text-white">
                  Home
                </NavLink>
                <NavLink to="/tv-shows" className="nav-link px-2 text-white">
                  TV Shows
                </NavLink>
                <NavLink className="nav-link px-2 text-white">Movies</NavLink>
                <NavLink className="nav-link px-2 text-white">Recently Added</NavLink>
                <NavLink className="nav-link px-2 text-white">My List</NavLink>
              </Nav>
              <div className="d-flex align-items-center ms-auto">
                <Form className="d-flex">
                  <Button type="submit" className="text-white bg-transparent border-0 py-0">
                    <Icon.Search></Icon.Search>
                  </Button>
                  <Nav.Link className=" text-white" href="#">
                    KIDS
                  </Nav.Link>
                  <Nav.Link>
                    <Button type="button" className="text-white bg-transparent border-0 py-0">
                      <Icon.BellFill></Icon.BellFill>
                    </Button>
                  </Nav.Link>
                  <NavDropdown
                    title="Account"
                    className="text-whites"
                    id="basic-nav-dropdown"
                    style={{ color: "white" }}
                  >
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Log out link</NavDropdown.Item>
                  </NavDropdown>
                </Form>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/tv-shows" element={<TvShows></TvShows>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/details/:movieId" element={<DetailsMovies></DetailsMovies>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
