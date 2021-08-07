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
    <div>
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
                <Icon icon="lock" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup className="remember-group">
            <Checkbox value={"remember"}>Remember-me</Checkbox>
            <a href="#a">Forget?</a>
          </FormGroup>

          <ButtonToolbar className="button-group">
            <Button appearance="primary" type="submit">Login</Button>
          </ButtonToolbar>
        </Form>
      </main>
      <aside></aside>
    </div>
  );
}
