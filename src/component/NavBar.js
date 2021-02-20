import React from "react"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import { NavLink, useHistory } from "react-router-dom"

const NavBar = () => {
  const history = useHistory()

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <NavLink className="navbar-brand" to="/" exact>
          <img
            src="./avatar.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{" "}
          React DevTest_v1
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/" exact activeClassName="active">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/product" activeClassName="active">
              Product
            </NavLink>

            <NavLink className="nav-link" to="/about" activeClassName="active">
              About
            </NavLink>

            <NavDropdown title="Workshop (Pagination + CRUD)" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/hospital")
                }}
              >
                ข้อมูลสถานพยาบาล (Pagination)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/category")
                }}
              >
                หมวดหมู่ข่าว (CRUD)
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink className="nav-link" to="/upload" activeClassName="active">
              Upload
            </NavLink>
          </Nav>

          <Nav>
            <NavLink className="nav-link" to="/register" activeClassName="active">
              Register
            </NavLink>
          </Nav>

          <Nav>
            <NavLink className="nav-link" to="/login" activeClassName="active">
              Login
            </NavLink>
          </Nav>

          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar
