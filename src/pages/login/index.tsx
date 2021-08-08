import React from "react";
import { Row, Col, Form, Input, Button, Checkbox, Typography } from "antd";
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
                  <Input />
                </Form.Item>

                <Form.Item name="password">
                  <Input.Password />
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
                    Submit
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button block type="link" htmlType="button">
                    Create account
                  </Button>
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
