import React from 'react'
import { Table, Image, Badge, Spinner, Button } from 'react-bootstrap'
import axios from 'axios'
import { format } from 'date-fns'
import { th } from 'date-fns/locale'
import { BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  const [product, setProduct] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const cancelToken = React.useRef(null)

  const getData = async () => {
    try {
      setLoading(true)
      const resp = await axios.get(
        'https://api.codingthailand.com/api/course',
        {
          cancelToken: cancelToken.current.token,
        }
      )
      //   console.log(resp.data.data)
      setProduct(resp.data.data)
    } catch (error) {
      //   console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source()
    getData()

    return () => {
      //   console.log('exit product page')
      cancelToken.current.cancel()
    }
  }, [])

  if (loading === true) {
    return (
      <div className='text-center mt-5'>
        <Spinner animation='border' variant='primary' />
      </div>
    )
  }

  if (error) {
    return (
      <div className='text-center mt-5 text-danger'>
        <p> เกิดข้อผิดพลาด </p>
        <p>{error.response.data.message}</p>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-md-12'>
          <h1> สินค้า </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>ชื่อคอร์ส</th>
                <th>รายละเอียด</th>
                <th>วันที่สร้าง</th>
                <th>views</th>
                <th>รูปภาพ</th>
                <th>เครื่องมือ</th>
              </tr>
            </thead>
            <tbody>
              {product.map((p, index) => {
                return (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td>{p.detail}</td>
                    <td>
                      {format(new Date(p.date), 'dd MMMM yyyy', { locale: th })}
                    </td>
                    <td>
                      <h3>
                        <Badge variant='success'>{p.view}</Badge>
                      </h3>
                    </td>
                    <td>
                      <Image
                        src={p.picture}
                        thumbnail
                        alt={p.title}
                        width={100}
                      />
                    </td>

                    <td>
                      <Link to={`/detail/${p.id}/title/${p.title}`}>
                        <BsEyeFill />
                      </Link>
                      {'  --  '}
                      <Link to={`/about`}>
                        <Button variant='outline-info'>About</Button>
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
