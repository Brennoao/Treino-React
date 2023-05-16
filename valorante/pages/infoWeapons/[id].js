import Align from '@/components/Align'
import Header from '@/components/Header'
import apiValorante from '@/services/apiValorante'
import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'

const infoWeapons = ({ ExportInfo }) => {

    console.log(ExportInfo)
    console.log(ExportInfo.weaponStats.damageRanges)

    const infos = ExportInfo.weaponStats.damageRanges
    // console.log(infos.headDamage)

    return (
        <>
            <Header />
            <Align>
                <Card border='danger' className='mb-3 border border-3'>
                    <Card.Header className='text-center text-light bg-danger rounded-0'>{ExportInfo.displayName}</Card.Header>
                    <Col border='danger' className='d-flex justify-content-center border border-top-0 border-end-0 border-start-0 border-danger p-4'>
                        <Card.Img style={{ width: '40rem' }} variant="top" src={ExportInfo.displayIcon} />
                    </Col>
                    <Card.Body>
                        <Row>
                            <Col md={4} className='text-dark'>
                                <h3 className='text-danger'>Dano</h3>
                                {infos.map(item => (<p key={1}><strong className='text-danger'>Cabeça:</strong> {item.headDamage}</p>))}
                                {infos.map(item => (<p key={1}><strong className='text-danger'>Corpo:</strong> {item.bodyDamage}</p>))}
                                {infos.map(item => (<p key={1}><strong className='text-danger'>Perna:</strong> {item.legDamage}</p>))}
                            </Col>
                            <Col md={4} className='text-dark'>
                                <h3 className='text-danger'>Dano</h3>
                                {infos.map(item => (<p key={1}><strong className='text-danger'>Cabeça:</strong> {item.headDamage}</p>))}
                                {infos.map(item => (<p key={1}><strong className='text-danger'>Corpo:</strong> {item.bodyDamage}</p>))}
                                {infos.map(item => (<p key={1}><strong className='text-danger'>Perna:</strong> {item.legDamage}</p>))}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <h2>Skins</h2>
                <Table striped bordered hover variant='danger'>
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {/* <td>{ExportInfo.skin.uuid}</td> */}
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </Align>
        </>
    )
}

export default infoWeapons

export async function getServerSideProps(context) {
    const id = context.params.id

    // const IdSkin = await apiValorante.get('/weapons/skins' + id)
    // const ExportIdSkin = IdSkin.data.data.skin.uuid

    const Info = await apiValorante.get('/weapons/' + id)
    const ExportInfo = Info.data.data

    // const Skin = await apiValorante.get('/weapons/skins/' + id)
    // const ExportSkin = Skin.data.data

    return {
        props: { ExportInfo, }
    }
}

// 