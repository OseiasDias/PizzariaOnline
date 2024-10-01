/* eslint-disable react/prop-types */
import "../styles/header.css";
import imgLogo from "../assets/Logo.png";
import { FaBagShopping } from "react-icons/fa6";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ModalE from "./ModalE";
import { useState } from "react";

function Header({ qtd, display }) {

  const [modalShow, setModalShow] = useState(false);
  return (
    <Navbar expand="md" className="bg-menu">
      <Container className="subHeader justify-content-between d-flex">
        <Navbar.Brand href="/">
          <div className="logotipo ">
            <img src={imgLogo} alt="img logo" width="50" height="50" />
            <span>Pizzaria</span>
          </div>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="itens-Li">
              Home
            </Nav.Link>

            <a href="#menu-pizzaria" className="itens-Li arranjoLi">
              <span className={display}>
                <Nav.Link href="#menu-pizzaria" className="itens-Li">
                  Menu
                </Nav.Link>
              </span>
            </a>

            <Nav.Link  className="itens-Li btnUnico"  onClick={() => setModalShow(true)}>
              Contacto
            </Nav.Link>
            <ModalE
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          </Nav>
          <div className="carrinho">
            <FaBagShopping
              className="icone-carrinho"
              size={25}
              color="2E2E2E"
            />
            <Link to="/final" className="tiraDecoracao">
              <div className="qtd">
                <span>{qtd}</span>
              </div>
            </Link>
          </div>
        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Header;
