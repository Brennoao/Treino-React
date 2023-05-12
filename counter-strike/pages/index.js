import apiCounterStrike from '../services/apiCounterStrike';
import { Card, Col, Pagination, Row } from 'react-bootstrap';
import { useState } from 'react';
import Align from '../components/Align';
import '../styles/pagination.module.css';

export default function Home({ Skins }) {

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 40;
  const totalPages = Math.ceil(Skins.length / resultsPerPage);

  // CONFIGURAÇÃO PAGINATION
  const maxPagesToShow = 20;
  const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
  const startPage = Math.max(Math.min(currentPage - halfMaxPagesToShow, totalPages - maxPagesToShow), 1);
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  const paginate = page =>
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));

  const currentResults = Skins.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );
  return (
    <>
      <Align>
        <Row xs={2} md={4} lg={6}>
          {currentResults.map((item) => (
            <Col key={item.id}>
              <Card border="danger" className="mb-3 border-4">
                <Card.Header className="text-center text-light bg-danger">{item.weapon}</Card.Header>
                <Card.Body>
                  <Card.Img variant="top" src={item.image} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className='d-flex justify-content-center'>
          <Pagination>
            <Pagination.First  onClick={() => paginate(1)} />
            <Pagination.Prev  onClick={() => paginate(currentPage - 1)} />
            {startPage > 1 && <Pagination.Ellipsis />}
            {[...Array(endPage - startPage + 1)].map((_, i) => (
              <Pagination.Item style={{color: '#ff0000'}} key={startPage + i} active={startPage + i === currentPage} onClick={() => paginate(startPage + i)}> {startPage + i}</Pagination.Item>
            ))}
            {endPage < totalPages && <Pagination.Ellipsis />}
            <Pagination.Next  onClick={() => paginate(currentPage + 1)} />
            <Pagination.Last  onClick={() => paginate(totalPages)} />
          </Pagination>
        </div>
      </Align>
    </>
  )
}

export async function getServerSideProps(context) {

  const PushSkins = await apiCounterStrike.get('/skins.json')
  const Skins = PushSkins.data

  return {
    props: { Skins }, // will be passed to the page component as props
  }
}