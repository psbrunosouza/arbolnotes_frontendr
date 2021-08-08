import React from "react";
import { Row, Col, Form, Input, Button, Checkbox, Typography } from "antd";

const onSubmit = (values: any) => {
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

                <Row align="middle" justify="space-between" style={{ marginBottom: 12 }}>
                  <Col>
                    <Checkbox>Keep logged</Checkbox>
                  </Col>
                  <Col>
                    <a href="#f">Forget?</a>
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
          <Row style={{height: '100vh', background: '#8282f6'}}>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
