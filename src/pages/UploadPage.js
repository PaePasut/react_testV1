import React from 'react'

import { Col, Row, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { axios } from 'axios'
import { useHistory } from 'react-router-dom'

const UploadPage = () => {
  const history = useHistory()

  const { handleSubmit, errors, register } = useForm()

  const onSubmit = (date) => {
    console.log(date)
  }

  return (
    <Container className='mt-4'>
      <Row>
        <Col md={4}>
          <h1>อัพโหลดรูปภาพ</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label htmlFor='exampleFormControlFile1'>เลือกไฟล์ภาพ</label>

              <input
                type='file'
                name='picture'
                ref={register({
                  required: 'กรุณาเลือกไฟล์ก่อน',
                })}
                className={`form-control-file ${
                  errors.picture ? 'is-invalid' : ''
                }`}
                id='exampleFormControlFile1'
              />
            </div>

            {errors.picture && errors.picture.type === 'required' && (
              <div className='invalid-feedback'>{errors.picture.message}</div>
            )}

            <button className='btn btn-primary' type='submit'>
              {' '}
              Upload...{' '}
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default UploadPage
