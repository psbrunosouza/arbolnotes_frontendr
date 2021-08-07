import React from "react";
import {
  Button,
  ButtonToolbar,
  Form,
  FormControl,
  FormGroup,
  Icon,
  InputGroup,
  Checkbox,
} from "rsuite";
import "./style.less";

export function Login() {
  return (
    <div className="login-container">
      <main>
        <Form fluid layout="horizontal" className="login-form">
          <h1>REDO</h1>

          <FormGroup>
            <InputGroup inside>
              <FormControl name="email" placeholder="E-mail" />
              <InputGroup.Addon>
                <Icon icon="avatar" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup inside>
              <FormControl name="password" placeholder="Password" />
              <InputGroup.Addon>
                <Icon icon="key" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup className="remember-group">
            <Checkbox value={"remember"}>Remember-me</Checkbox>
            <a href="#a">Forget?</a>
          </FormGroup>

          <ButtonToolbar className="button-group">
            <Button appearance="primary" type="submit">
              LOGIN
            </Button>
          </ButtonToolbar>

          <div className="register-group">
            <a href="#a">Register account</a>
          </div>
        </Form>
      </main>
      <aside></aside>
    </div>
  );
}
