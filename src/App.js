// import logo from './logo.svg'
import React from 'react'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import NavBar from './component/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
            </Switch>
            <Footer />
          </>
        )}
      </Router>
    </>
  )
}

export default App
