import React from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="danger" variant="dark" className='px-5 mb-4 d-flex justify-content-between'>
                <Navbar.Brand href="/"> <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top text-light" />Valorante</Navbar.Brand>

                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="light">Search</Button>
                </Form>
        </Navbar>
    )
}

export default Header