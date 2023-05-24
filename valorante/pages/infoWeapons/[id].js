import Align from '@/components/Align'
import Header from '../../components/Header'
import apiValorante from '@/services/apiValorante'
import React, { useState } from 'react'
import { Accordion, Card, Col, Modal, Row, Table } from 'react-bootstrap'

const infoWeapons = ({ ExportInfo }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedSkin, setSelectedSkin] = useState(null);

    const handleImageClick = (image, skin) => {
        setSelectedImage(image);
        setSelectedSkin(skin);
        setShowModal(true);
    }

    const infos = ExportInfo.weaponStats.damageRanges; const Correct = infos[0]; const Skins = ExportInfo.skins;

    console.log(Correct)
    console.log(Skins)

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
                                <p><strong className='text-danger'>Cabeça:</strong> {Correct.headDamage}</p>
                                <p><strong className='text-danger'>Corpo:</strong> {Correct.bodyDamage}</p>
                                <p><strong className='text-danger'>Perna:</strong> {Correct.legDamage}</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <h2>Skins</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Foto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Skins.map(item => (
                            <React.Fragment key={item.uuid}>
                                {item.displayIcon ? (
                                    <tr key={item.uuid}>
                                        <td>{item.displayName}</td>
                                        <td>
                                            <img src={item.displayIcon} onClick={() => handleImageClick(item.displayIcon, item)} />
                                        </td>
                                    </tr>
                                ) : ('')}
                            </React.Fragment>
                        ))}
                    </tbody>
                </Table>``

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Body className="show-grid">
                        <Row md={12}>
                            <img className='h-100 mb-5' src={selectedImage} />
                            <Accordion>
                                {selectedSkin && selectedSkin.levels.map((level, i) => (
                                    <Accordion.Item eventKey={level.uuid} key={level.uuid}>
                                        <Accordion.Header>{level.displayName}</Accordion.Header>
                                        <Accordion.Body>
                                            <Card className='border border-0 mb-5'> <img src={level.displayIcon} /> </Card>
                                            {level.streamedVideo ? (
                                                <div className="embed-responsive embed-responsive-16by9">
                                                    <iframe className="embed-responsive-item" src={level.streamedVideo} allowFullScreen ></iframe>
                                                </div>
                                            ) : ''}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Row>
                    </Modal.Body>
                </Modal>
            </Align>
        </>
    )
}

export default infoWeapons

export async function getServerSideProps(context) {
    const id = context.params.id

    const Info = await apiValorante.get('/weapons/' + id)
    const ExportInfo = Info.data.data

    return {
        props: { ExportInfo }
    }
}