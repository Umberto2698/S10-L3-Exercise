import { Component } from "react";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Navbar, NavDropdown, Form, Button } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid ms-4">
        <header className="d-flex mb-3 px-3">
          <div className="d-flex w-100 align-items-center ">
            <div className="d-flex align-items-center me-auto">
              <h1 className="me-3 fs-3 text-white">TV Shows</h1>
              <Navbar expand="xs">
                <Container fluid>
                  <Button
                    className="roundend-0 bg-black"
                    variant="outline-secondary"
                    style={{ height: 26, padding: 0 }}
                  >
                    <NavDropdown className="text-white p-0" title="Genres" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4"> Horror</NavDropdown.Item>
                      <NavDropdown.Item href="#action4"> Cartoon</NavDropdown.Item>
                      <NavDropdown.Item href="#action5">Fantasy </NavDropdown.Item>
                    </NavDropdown>
                  </Button>
                </Container>
              </Navbar>
            </div>
            <Navbar expand="md">
              <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <div className="d-flex ms-auto">
                    <Form className="d-flex align-items-center">
                      <Button
                        className="rounded-0 bg-transparent btn-outline-secondary text-white p-0"
                        type="button"
                        style={{ height: 20, width: 30 }}
                      >
                        <Icon.List></Icon.List>
                      </Button>
                      <Button
                        className="rounded-0 bg-transparent btn-outline-secondary text-white p-0"
                        type="button"
                        style={{ height: 20, width: 30 }}
                      >
                        <Icon.Fullscreen></Icon.Fullscreen>
                      </Button>
                    </Form>
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
