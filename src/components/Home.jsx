import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../css/home.css";
import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Logo from "../assets/logo.png";

class Home extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <Navbar expand="md" className="mb-2" style={{ background: "linear-gradient(to bottom, black, #141414)" }}>
          <Container>
            <Navbar.Brand href="#">
              <img src={Logo} alt="Netflix" style={{ width: 80, height: 35 }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto align-items-center">
                <Nav.Link className="px-2 text-white" href="#">
                  Home
                </Nav.Link>
                <Nav.Link className="px-2 text-white" href="#">
                  TV Shows
                </Nav.Link>
                <Nav.Link className="px-2 text-white" href="#">
                  Movies
                </Nav.Link>
                <Nav.Link className="px-2 text-white" href="#">
                  Recently Added
                </Nav.Link>
                <Nav.Link className="px-2 text-white" href="#">
                  My List
                </Nav.Link>
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
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
