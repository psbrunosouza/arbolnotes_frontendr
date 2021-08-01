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
import {SidebarNav} from '../../@components/sidebar';
import './style.less';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container className="container">
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <a href="#a" className="navbar-brand logo">
              REDO
            </a>
          </Navbar.Header>
          <Navbar.Body>
            <Nav>
              <Nav.Item icon={<Icon icon="dashboard" />}>Dashboard</Nav.Item>
              <Nav.Item>News</Nav.Item>
              <Nav.Item>Help</Nav.Item>
            </Nav>
            <Nav pullRight>
              <Nav.Item icon={<Icon icon="cog" />}>Profile</Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
      </Header>
      <Container>
        <Sidebar><SidebarNav></SidebarNav></Sidebar>
        <Content>{children}</Content>
      </Container>
      <Footer className="footer">

      </Footer>
    </Container>
  );
};
