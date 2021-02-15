import React from 'react'
import Pagination from 'react-js-pagination'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'

const HospitalPage = () => {
  const [hospital, setHospital] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const cancelToken = React.useRef(null)

  const getData = async () => {
    try {
      setLoading(true)
      const resp = await axios.get(
        `https://api.codingthailand.com/api/course/${hospital}`,
        {
          cancelToken: cancelToken.current.token,
        }
      )
      //   console.log(resp.data.data)
      setHospital(resp.data.data)
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
  }, [hospital])

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
    <div>
      <h1>HospitalPage</h1>
    </div>
  )
}

export default HospitalPage
