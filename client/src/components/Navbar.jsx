import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


const NavigationBar = props => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">StayKay</Navbar.Brand>
        <Nav className="mr-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="ml-sm-2" />

          </Form>
        </Nav>
        <Nav className="justify-content-end" >
          <NavDropdown title="Become a host" id="nav-dropdown mr-auto" className='mr-auto'>
            <NavDropdown.Item eventKey="4.1">List your place</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Learn about hosting your place</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.3">Host an experience</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#saved">Saved</Nav.Link>
          <Nav.Link href="#Trips">Trips</Nav.Link>
          <NavDropdown title="Messages" id="nav-dropdown">
            <NavDropdown.Item eventKey="5.1">Message (0)</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="5.2">Notifications (0)</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Help" id="nav-dropdown">
            <FormControl type="text" placeholder="Search by Key" className="mr-sm-2" />
            <NavDropdown.Item eventKey="6.1">Recommended Articles</NavDropdown.Item>
            < NavDropdown.Item eventKey="6.1">When I am charged for Reservations?</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="6.2">Visit Help Center</NavDropdown.Item>
          </NavDropdown>
          <Image src='https://images.unsplash.com/photo-1502937406922-305bb2789e95?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&fit=max&s=9ccf7504e3c56169185184198f642dcf' fluid thumbnail roundedCircle />
        </Nav>
      </Navbar>
    </div >
  )
}




export default NavigationBar