import React from "react"

import { useToasts } from "react-toast-notifications"

import { Container, Form, Button, Row, Col } from "react-bootstrap"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import { useHistory } from "react-router-dom"

const schema = yup.object().shape({
  name: yup.string().required("ชื่อสกุลห้ามว่าง"),
  email: yup.string().required("อีเมลล์ห้ามว่าง").email("รูปแบบอีเมลล์ไม่ถูกต้อง"),
  password: yup.string().required("รหัสผ่านห้ามว่าง").min(3, "รหัสผ่านต้อง 3 ตัวขึ้นไป"),
})

const RegisterPage = () => {
  const history = useHistory()

  const { addToast } = useToasts()

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    console.log(data)
    // const apiUrl = "https://api.codingthailand.com/api/category"
    // const resp = await axios.post(apiUrl, {
    //   name: data.name,
    // })

    // addToast(`${resp.data.message} ID : ${resp.data.data.id} ชื่อที่เพิ่ม ${resp.data.data.name}`, {
    //   appearance: "success",
    //   autoDismiss: true,
    //   autoDismissTimeout: 3000,
    // })
    // history.replace("/category")
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name">
              <Form.Label> ชื่อสกุล </Form.Label>
              <Form.Control
                type="text"
                name="name"
                ref={register}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">{errors.name.message}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label> Email </Form.Label>
              <Form.Control
                type="email"
                name="email"
                ref={register}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <Form.Control.Feedback type="invalid">{errors.email.message}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label> Password </Form.Label>
              <Form.Control
                type="password"
                name="password"
                ref={register}
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
              />
              {errors.password && (
                <Form.Control.Feedback type="invalid">
                  {errors.password.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              สมัครสมาชิก
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage
