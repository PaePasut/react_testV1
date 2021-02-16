// import logo from './logo.svg'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import './App.css'
import Footer from './component/Footer'
// import Header from './component/Header'
import NavBar from './component/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import DetailPage from './pages/DetailPage'
import HospitalPage from './pages/hospital/HospitalPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IndexPage from './pages/Category/IndexPage'
import CreatePage from './pages/Category/CreatePage'
import EditPage from './pages/Category/EditPage'
import UploadPage from './pages/UploadPage'

const queryClient = new QueryClient()

function App() {
  const [isopen, setIsopen] = React.useState(false)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          {isopen ? (
            <h1>Login</h1>
          ) : (
            <>
              <NavBar />
              <Switch>
                <Route exact path='/'>
                  <HomePage />
                </Route>
                <Route path='/about'>
                  <AboutPage />
                </Route>
                <Route path='/product'>
                  <ProductPage />
                </Route>
                <Route path='/detail/:id/title/:title'>
                  <DetailPage />
                </Route>
                <Route path='/hospital'>
                  <HospitalPage />
                </Route>
                <Route path='/upload'>
                  <UploadPage />
                </Route>

                <Route
                  path='/category'
                  render={({ match: { url } }) => (
                    <>
                      <Route path={`${url}/`} exact>
                        <IndexPage />
                      </Route>
                      <Route path={`${url}/create`}>
                        <CreatePage />
                      </Route>
                      <Route path={`${url}/edit/:id`}>
                        <EditPage />
                      </Route>
                    </>
                  )}
                ></Route>
              </Switch>
              <Footer />
            </>
          )}
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
