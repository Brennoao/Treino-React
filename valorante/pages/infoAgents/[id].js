import React from 'react'
import apiValorante from '../../services/apiValorante'
import Header from '../../components/Header'
import Align from '../../components/Align'
import { Card, Col, Row } from 'react-bootstrap'

const infoAgents = ({ ExportInfo }) => {

  const Abilities = ExportInfo.abilities
  console.log(ExportInfo)
  console.log(Abilities)
  return (
    <>
      <Header />
      <Align>
        <Row>
          <div className='d-flex gap-0 column-gap-3 border-primary border rounded-4 border-4 p-4 mb-5'>
            <Col md={4}>
              <Card className='card border-light mr-3'>
                <Card.Img variante='top' src={ExportInfo.displayIcon} />
              </Card>
            </Col>
            <Col md={8}>
              <h4>Detalhes</h4>
              <p><strong className='text-danger'>Nome:</strong> {ExportInfo.displayName}</p>
              <p><strong className='text-danger'>Desenvolvedor:</strong> {ExportInfo.developerName}</p>
              <h6>Habilidades:</h6>
              {Abilities.map((item, i) => (
                <p key={i}><strong className='text-danger'>{item.slot}:</strong> {item.displayName}</p>
              ))}
              <p style={{ width: '52rem' }}><strong className='text-danger'>Descrição:</strong> {ExportInfo.description}</p>
            </Col>
          </div>
        </Row>
      </Align>
    </>
  )
}

export default infoAgents

export async function getServerSideProps(context) {
  const id = context.params.id

  const Info = await apiValorante.get('/agents/' + id)
  const ExportInfo = Info.data.data

  return {
    props: { ExportInfo }
  }
}