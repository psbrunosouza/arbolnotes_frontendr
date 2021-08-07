import React from "react";
import { Sidenav, Nav, Icon, Dropdown } from "rsuite";
import "./style.less";

export function SidenavComponent() {
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
              <Dropdown.Item divider className="divider"/>
              <Dropdown.Item className="panelStyles" panel>
                category1
              </Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
