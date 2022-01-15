import { Outlet, Link } from "react-router-dom";
import React from 'react'
import useMenu from '../hooks/useMenu'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Layout() {
  const { menu } = useMenu();

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navigation App</Navbar.Brand>
          <Nav className="me-auto">
            {
              menu ? menu.map(item => {
                return (
                  <li key={item.name}>
                    <Nav.Link href={`${item.path}`}>{item.name}</Nav.Link>
                  </li>
                )
              }) : null
            }
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}

export default Layout;