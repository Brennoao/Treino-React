import Align from '@/components/Align'
import Fotos from '@/components/Fotos'
import Header from '@/components/Header'
import apiValorante from '@/services/apiValorante'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const index = ({ Agents }) => {

    console.log(Agents)
    return (
        <>
            <Header />
            <Align>
                <Row>
                    {Agents.map(item => (
                        <Col key={item.uuid} md={3} className='mb-2'>
                                <Fotos Name={item.displayName} img={item.displayIcon} Link={item.uuid}/>
                        </Col>
                    ))}
                </Row>
            </Align>
        </>
    )
}

export default index

export async function getServerSideProps(context) {
    const PushAgents = await apiValorante.get('/weapons')
    const Agents = PushAgents.data.data

    return {
        props: { Agents }, // will be passed to the page component as props
    }
}