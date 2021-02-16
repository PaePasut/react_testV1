import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const schema = yup.object().shape({
  name: yup.string().required('เพิ่มชื่อหมวดหมู่'),
})

const EditPage = () => {
  const history = useHistory()
  const { id } = useParams()

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  })

  // const getData = async (id) => {
  //   const resp = await axios.get(
  //     `https://api.codingthailand.com/api/category/${id}`
  //   )
  //   console.log(resp.data)
  //   setValue('name', resp.data.name)
  // }

  // React.useEffect(() => {
  //   getData(id)
  // }, [id])

  const getData = React.useCallback(async () => {
    const resp = await axios.get(
      `https://api.codingthailand.com/api/category/${id}`
    )
    // console.log(resp.data)
    setValue('name', resp.data.name)
  }, [id, setValue])

  React.useEffect(() => {
    // console.log('useEffect edit page')
    getData()
  }, [getData])

  const onSubmit = async (data) => {
    // console.log(data)
    const apiUrl = 'https://api.codingthailand.com/api/category'
    const resp = await axios.put(apiUrl, {
      id: id,
      name: data.name,
    })

    alert(
      `${resp.data.message} ID : ${resp.data.data.id} ชื่อที่เพิ่ม ${resp.data.data.name}`
    )
    history.replace('/category')
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId='name'>
              <Form.Label> หมวดหมู่ข่าว </Form.Label>
              <Form.Control
                type='text'
                name='name'
                ref={register}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              />
              {errors.name && (
                <Form.Control.Feedback type='invalid'>
                  {errors.name.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
    </Container>
  )
}

export default EditPage
