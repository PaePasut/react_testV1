import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { BsNewspaper } from 'react-icons/bs'
import { Spinner } from 'react-bootstrap'

const HomePage = () => {
  // const { isLoading, error, data } = useQuery('getData', () =>
  //   fetch(
  //     'https://api.codingthailand.com/api/news?page=1&per_page=1'
  //   ).then((res) => res.json())
  // )

  const query = useQuery('getData', () => {
    const controller = new AbortController()
    const signal = controller.signal
    const promise = fetch(
      'https://api.codingthailand.com/api/news?page=1&per_page=1',
      {
        method: 'get',
        signal: signal,
      }
    ).then((res) => res.json())

    //cancel request
    promise.cancel = () => controller.abort()
    return promise
  })

  const { isLoading, error, data } = query

  if (isLoading === true) {
    return (
      <div className='text-center mt-5'>
        <Spinner animation='border' variant='primary' />
        {/* <h1>รอแปปปปปปปปปป</h1> */}
      </div>
    )
  }

  if (error) {
    return (
      <div className='text-center mt-5 text-danger'>
        <p> เกิดข้อผิดพลาด </p>
        <p>{JSON.stringify(error)}</p>
      </div>
    )
  }

  return (
    <>
      <main role='main'>
        {/* Main jumbotron for a primary marketing message or call to action */}
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-3'>PPKS</h1>
            <p>Web developed with react (test) By PPKS</p>
            <p>
              <Link
                to='/Product'
                className='btn btn-primary btn-lg'
                role='button'
              >
                สินค้าทั้งหมด
              </Link>
            </p>
          </div>
        </div>
        <div className='container'>
          {/* Example row of columns */}
          <div className='row'>
            {data.data.map((news, index) => {
              return (
                <div className='col-md-4' key={news.id}>
                  <h2>
                    {news.topic} <BsNewspaper />
                  </h2>
                  <p>{news.detail}</p>
                  <p>หมวดหมู่ : {news.name}</p>
                </div>
              )
            })}
          </div>
          <hr />
        </div>{' '}
        {/* /container */}
      </main>
    </>
  )
}

export default HomePage
