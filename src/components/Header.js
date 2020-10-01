import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link href="/">
            <a>
              <Navbar.Brand>ProShop</Navbar.Brand>
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/cart">
                <a className="nav-link" role="button">
                  <i className="fas fa-shopping-cart" /> Cart
                </a>
              </Link>
              <Link href="/login">
                <a className="nav-link" role="button">
                  <i className="fas fa-user" /> Sign In
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
