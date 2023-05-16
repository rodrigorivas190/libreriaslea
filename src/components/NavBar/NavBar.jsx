import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light">
        <Container className="navBar--height">
          <Link to="/">
            <Navbar.Brand>
              <img
                className="imagen"
                src="../imagenes/SIGUE MI VOZ.jpg"
                alt="LibreriasLea"
              />
            </Navbar.Brand>
          </Link>

          <NavDropdown className="btn btn-secondary btn-lg m-2" title="Genero">
            <NavDropdown.Item>
              <Link
                className="btn btn-secondary btn-lg m-2"
                menuVariant="dark"
                to="/productos/ROMANCE"
              >
                Romance
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="btn btn-secondary btn-lg m-2"
                to="/productos/FICCION"
              >
                Ficcion
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="btn btn-secondary btn-lg m-2"
                to="/productos/TERROR"
              >
                Terror
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="btn btn-secondary btn-lg m-2"
                to="/productos/FANTASIA"
              >
                Fantasia
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className="btn btn-secondary btn-lg m-2" to="/">
                Todos los libros
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <div className="d-flex justify-end">
            <Link className="link" to="/cart">
              <CartWidget />
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
