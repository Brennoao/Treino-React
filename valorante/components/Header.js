import React from 'react'
import { Button, Form, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="danger" variant="dark" className='px-5 mb-4 d-flex justify-content-between'>
                <Navbar.Brand href="/"> <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top text-light" />Valorante</Navbar.Brand>

                <Form className="d-flex">
                    <Form.Control type="search" style={{ backgroundColor: '#DC3545', color: '#F8F9FA', borderColor: '#F8F9FA' }} placeholder="Search" className="me-2" aria-label="Search" />
                    <Button style={{color: '#F8F9FA', borderColor: '#F8F9FA' }} variant="danger">Search</Button>
                </Form>
        </Navbar>
    )
}

export default Header