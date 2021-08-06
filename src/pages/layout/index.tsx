import React from "react";
import {
  Container,
  Header,
  Footer,
  Content,
  Sidebar,
} from "rsuite";
import { SidenavComponent } from "../../@components/sidebar";
import { NavbarComponent } from "../../@components/navbar";
import "./style.less";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container className="container">
      <Header>
        <NavbarComponent></NavbarComponent>
      </Header>
      <Container>
        <Sidebar>
          <SidenavComponent></SidenavComponent>
        </Sidebar>
        <Content>{children}</Content>
      </Container>
      <Footer className="footer"></Footer>
    </Container>
  );
};
