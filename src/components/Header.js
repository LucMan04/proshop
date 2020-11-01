import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavLink from "./navigation/NavLink";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <NavLink href="/" text="ProShop" brand />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <NavLink href="/" iconClassName="fas fa-home" text="Home" />
              <NavLink
                href="/cart"
                iconClassName="fas fa-shopping-cart"
                text="Cart"
              />
              <NavLink
                href="/login"
                iconClassName="fas fa-user"
                text="Sign In"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
