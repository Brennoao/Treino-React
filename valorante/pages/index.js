import Align from '@/components/Align'
import Fotos from '../components/Fotos'
import Header from '..//components/Header'
import apiValorante from '@/services/apiValorante'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const index = ({ Weapons, Agents }) => {

    console.log(Agents)
    console.log(Weapons)
    return (
        <>
            <Header />
            <Align>
                <Row>
                    {Agents.map(item => (
                        <Col key={item.uuid} md={3} className='mb-4'>
                                <Fotos Name={item.displayName} img={item.displayIcon} Link='/infoAgents/' uuid={item.uuid}/>
                        </Col>
                    ))}
                    </Row>
                <Row>
                    {Weapons.map(item => (
                        <Col key={item.uuid} md={3} className='mb-4'>
                                <Fotos Name={item.displayName} img={item.displayIcon} Link='/infoWeapons/' uuid={item.uuid}/>
                        </Col>
                    ))}
                </Row>
            </Align>
        </>
    )
}

export default index

export async function getServerSideProps(context) {
    const PushWeapons = await apiValorante.get('/weapons')
    const Weapons = PushWeapons.data.data

    const PushAgents = await apiValorante.get('/agents')
    const Agents = PushAgents.data.data

    return {
        props: { Weapons, Agents }, // will be passed to the page component as props
    }
}