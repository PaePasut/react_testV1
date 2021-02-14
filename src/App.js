// import logo from './logo.svg'
import React from 'react'
import './App.css'
import Footer from './component/Footer'
// import Header from './component/Header'
import NavBar from './component/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import DetailPage from './pages/DetailPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [isopen, setIsopen] = React.useState(false)

  return (
    <>
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
            </Switch>
            <Footer />
          </>
        )}
      </Router>
    </>
  )
}

export default App
