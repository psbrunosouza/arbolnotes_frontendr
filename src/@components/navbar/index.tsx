import React from "react";
import { useState } from "react";
import { Nav, Navbar, Icon } from "rsuite";
import "./style.less";

export function NavbarComponent() {
  
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleSidebarExpanded = (): void => {
    setIsSidebarExpanded(!isSidebarExpanded);
  }

  return (
    <Navbar appearance="inverse">
      <Nav>
        <Nav.Item icon={<Icon icon="bars" />}></Nav.Item>
      </Nav>
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
  );
}
