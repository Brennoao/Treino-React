import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'

const Fotos = (props) => {
    return (

        <>
            {props.Link == '/infoAgents/' ? (
                <Card style={{ height: '22em' }} className='grid gap-1'>
                    <Card.Header className='text-center text-light bg-danger'>{props.Name}</Card.Header>
                    <Card.Body className='d-flex justify-content-center align-items-center'>
                        <Link href={props.Link + props.uuid}>
                            <Card.Img variant="top" src={props.img} />
                        </Link>
                    </Card.Body>
                </Card>

            ) : (
                <Card style={{ height: '17em' }} className='grid gap-1'>
                    <Card.Header className='text-center text-light bg-danger'>{props.Name}</Card.Header>
                    <Card.Body className='d-flex justify-content-center align-items-center'>
                        <Link href={props.Link + props.uuid}>
                            <Card.Img variant="top" src={props.img} />
                        </Link>
                    </Card.Body>
                </Card>
            )}
        </>
    )
}

export default Fotos