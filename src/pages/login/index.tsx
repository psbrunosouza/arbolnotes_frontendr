import React from "react";
import { Row, Col, Form, Input, Button } from "antd";

const onSubmit = (values: any) => {
  console.log(values);
};

export default function Login() {
  return (
    <>
      <Row>
        <Col className="col-form-login" span={15}>
          <Row style={{height: '100vh'}} align="middle" justify="center">
            <Col>
              <Form
                name="basic"
                initialValues={{ remember: true, password: "", email: "" }}
                onFinish={onSubmit}
              >
                <Form.Item name="email">
                  <Input />
                </Form.Item>

                <Form.Item name="password">
                  <Input.Password />
                </Form.Item>

                <Form.Item >
                  <Button block type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col className="col-form-image" span={9}>
          <div></div>
        </Col>
      </Row>
    </>
  );
}
