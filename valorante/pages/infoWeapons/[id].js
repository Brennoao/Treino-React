import Align from '@/components/Align'
import Header from '@/components/Header'
import apiValorante from '@/services/apiValorante'
import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'

const infoWeapons = ({ ExportInfo }) => {

    console.log(ExportInfo)
    console.log(ExportInfo.weaponStats.damageRanges)
    return (
        <>
            <Header />
            <Align>
                <Card>
                    <Card.Header className='text-center text-light bg-danger'>{ExportInfo.displayName}</Card.Header>
                    <Card.Body>
                        <div >
                            <Col className='d-flex justify-content-center'>
                                <Card.Img style={{ width: '40rem' }} variant="top" src={ExportInfo.displayIcon} />
                            </Col>
                            <Row>
                                <Col md={4} className='text-dark'>
                                    {/* <p><strong>Cabeça:</strong> {ExportInfo.weaponsStats.damageRanges.bodyDamage}</p> */}
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>

                <h2>Skins</h2>

                <Table striped bordered hover>
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
        props: { ExportInfo,  }
    }
}

// 