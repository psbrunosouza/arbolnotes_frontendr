import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { User } from "../../entities/user";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Register() {
  const onSubmit = (user: User): void => {
    console.log(user);
  };

  return (
    <>
      <Row>
        <Col
          className="col-form-image animate__animated animate__fadeIn"
          span={9}
          style={{ height: "100vh", background: "#8282f6" }}
        ></Col>

        <Col className="col-form-register" span={15}>
          <Row style={{ height: "100vh" }} align="middle" justify="center">
            <Col className="animate__animated animate__fadeIn">
              <Form
                name="form-user"
                initialValues={{ password: "", email: "" }}
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

                <Form.Item name="name">
                  <Input placeholder="Name" />
                </Form.Item>

                <Form.Item name="email">
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item name="password">
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                  <Button block type="primary" htmlType="submit">
                    REGISTER
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Link
                    style={{ display: "flex", justifyContent: "center" }}
                    to="/login"
                  >
                    Return to login
                  </Link>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
