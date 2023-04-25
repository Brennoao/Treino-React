import { Row, Card, Button} from 'react-bootstrap'
import apiRiot from '../services/apiRiot';
import Link from 'next/link'

export default function Home({ agents }) {
  console.log(agents)
  return (
    <div className="bg-dark">
      <Row md={5} className="d-flex gap-4 justify-content-center align-items-start">
        {agents.map(item => (
          <Card key={item.uuid} className="border border-light border-4 text-bg-dark p-3 rounded-4">
            <Card.Img variant="top" src={item.displayIcon} className="border border-light rounded-4" />
            <Card.Body>
              <Card.Title>{item.displayName}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Link className='btn btn-danger' href={"/agents/" + item.uuid}>Agente</Link>
            </Card.Body>
          </Card>

        ))}
      </Row>
    </div>
  )
}

export async function getServerSideProps(context) {

  const resultado = await apiRiot.get('/agents' + '?language=pt-BR')
  const agents = resultado.data.data

  return {
    props: { agents }, // will be passed to the page component as props
  }
}