import React from "react";
import {
  Navbar,
  Nav,
  Icon,
  Container,
  Header,
  Footer,
  Content,
  Sidebar,
} from "rsuite";

function App() {
  return (
    <Container>
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <a href="#a" className="navbar-brand logo">
              REDO
            </a>
          </Navbar.Header>
          <Navbar.Body>
            <Nav>
              <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
              <Nav.Item>News</Nav.Item>
              <Nav.Item>Products</Nav.Item>
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
