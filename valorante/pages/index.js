import Align from '@/components/Align'
import Fotos from '../components/Fotos'
import Header from '..//components/Header'
import apiValorante from '@/services/apiValorante'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const index = ({ Weapons }) => {

    console.log(Weapons)
    return (
        <>
            <Header />
            <Align>
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

    return {
        props: { Weapons }, // will be passed to the page component as props
    }
}