import React from "react";
import { Row, Col, Form, Input, Button, Checkbox, Typography } from "antd";
import { Link } from "react-router-dom";
import { User } from "../../entities/user";
import Logo from "../../assets/logo.png";
import "animate.css";

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
            <Col className="animate__animated animate__fadeInDown">
              <Form
                name="basic"
                initialValues={{ remember: true, password: "", email: "" }}
                onFinish={onSubmit}
              >
                <Row align="middle" justify="center">
                  <Col>
                    <img
                      src={Logo}
                      width="164px"
                      height="164px"
                      alt="logo"
                      className="logo"
                    />
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
        <Col
          className="animate__animated animate__fadeIn col-form-image"
          span={9}
        >
          <Row style={{ height: "100vh", background: "#8282f6" }}>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
