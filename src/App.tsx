import React from "react";
import "rsuite/dist/styles/rsuite-default.css";
import {
  Container,
  Header,
  Content,
  Footer,
  Sidebar,
  Navbar,
  Nav,
  Icon,
} from "rsuite";

function App() {
  return (
    <Container>
      <Header>
        <Navbar>
          <Navbar.Header>
            <a href="#a" className="navbar-brand logo">
              ARBOL
            </a>
          </Navbar.Header>
          <Navbar.Body>
            <Nav>
              <Nav.Item icon={<Icon icon="home" />}>Dashboard</Nav.Item>
            </Nav>
            <Nav pullRight>
              <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
      </Header>
      <Container>
        <Sidebar>Sidebar</Sidebar>
        <Content>Content</Content>
      </Container>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default App;
