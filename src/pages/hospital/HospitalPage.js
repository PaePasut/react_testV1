import React from 'react'
import Pagination from 'react-js-pagination'
import axios from 'axios'
import { Spinner, Table } from 'react-bootstrap'

const pageSize = 10

const HospitalPage = () => {
  const [hospital, setHospital] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const cancelToken = React.useRef(null)

  //pagination
  const [page, setPage] = React.useState(1)
  const [total, setTotal] = React.useState(0)

  const getData = async (page) => {
    try {
      setLoading(true)
      const resp = await axios.get(
        `https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${pageSize}`,
        {
          cancelToken: cancelToken.current.token,
        }
      )
      //   console.log(resp.data.data)
      setHospital(resp.data.data)
      setTotal(resp.data.meta.pagination.total)
    } catch (error) {
      //   console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source()
    getData(page)

    return () => {
      //   console.log('exit product page')
      cancelToken.current.cancel()
    }
  }, [page])

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

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber)
    setPage(pageNumber)
  }

  return (
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-md-12'>
          <h2>HospitalPage</h2>
          <Table striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>id</th>
                <th>ชื่อคอร์ส</th>
                <th>รายละเอียด</th>
              </tr>
            </thead>
            <tbody>
              {hospital.map((h, index) => {
                return (
                  <tr key={h.id}>
                    <td>{h.id}</td>
                    <td>{h.code}</td>
                    <td>{h.h_name}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <br />
          <Pagination
            activePage={page}
            itemsCountPerPage={pageSize}
            totalItemsCount={total}
            pageRangeDisplayed={15}
            onChange={handlePageChange}
            itemClass='page-item'
            linkClass='page-link'
            prevPageText='ก่อนหน้า'
            nextPageText='ต่อไป'
            firstPageText='หน้าแรก'
          />
        </div>
      </div>
    </div>
  )
}

export default HospitalPage
