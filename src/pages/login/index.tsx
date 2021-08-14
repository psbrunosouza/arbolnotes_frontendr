import React from "react";
import { Row, Col, Form, Input, Button, Checkbox, Typography } from "antd";
import { Link } from "react-router-dom";
import { User } from "../../models/user";

const onSubmit = (values: User) => {
  console.log(values);
};

export default function Login() {
  const { Title } = Typography;

  return (
    <>
      <Row>
        <Col className="col-form-login" span={15}>
          <Row style={{ height: "100vh" }} align="middle" justify="center">
            <Col>
              <Form
                name="basic"
                initialValues={{ remember: true, password: "", email: "" }}
                onFinish={onSubmit}
              >
                <Row align="middle" justify="center">
                  <Col>
                    <Title level={2}>REDO</Title>
                  </Col>
                </Row>

                <Form.Item name="email">
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item name="password">
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Row align="middle" justify="space-between">
                  <Col>
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item>
                      <a href="#f">Forget?</a>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item>
                  <Button block type="primary" htmlType="submit">
                    LOGIN
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Link
                    style={{ display: "flex", justifyContent: "center" }}
                    to="/register"
                  >
                    Create account
                  </Link>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col className="col-form-image" span={9}>
          <Row style={{ height: "100vh", background: "#8282f6" }}>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
