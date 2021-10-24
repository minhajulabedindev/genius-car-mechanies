import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut, signInWithGoogle } = useAuth();
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Ginius Car Machanis</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end text-white">
            <Nav.Link as={HashLink} to="/home#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={HashLink} to="/home#service">
              Services
            </Nav.Link>
            <Nav.Link className="text-white" as={HashLink} to="/home#expert">
              Experts
            </Nav.Link>
            {/* ////////////////////////////// */}
            {user?.email ? (
              <Button onClick={logOut}> Log-Out</Button>
            ) : (
              <Nav.Link
                // onClick={signInWithGoogle}
                className="text-white"
                as={HashLink}
                to="/login"
              >
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>

      <br />
    </>
  );
};

export default Header;
