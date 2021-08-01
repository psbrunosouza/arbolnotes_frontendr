import React from "react";
import { Sidenav, Nav, Icon, Dropdown } from "rsuite";
import "./style.less";

export function SidebarNav() {
  return (
    <div className="navbar">
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
              Dashboard
            </Nav.Item>

            <Dropdown
              eventKey="2"
              title="Workspaces"
              icon={<Icon icon="pagelines" />}
            >
              <Dropdown
                eventKey="3"
                title="Categories"
                icon={<Icon icon="gear-circle" />}
              ></Dropdown>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
