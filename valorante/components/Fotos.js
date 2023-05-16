import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'

const Fotos = (props) => {
    return (
        <Card>
            <Card.Header className='text-center text-light bg-danger'>{props.Name}</Card.Header>
            <Card.Body>
                <Link href={props.Link + props.uuid}>
                    <Card.Img variant="top" src={props.img} />
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Fotos