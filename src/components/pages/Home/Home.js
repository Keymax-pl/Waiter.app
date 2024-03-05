import React from 'react';
import { Col, Button, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesReducer';

const Home = () => {
  const tables = useSelector((state) => getAllTables(state));

  return (
    <div>
      <Row className="mt-6 mb-5">
        <Col>
          <h1 className="mb-0">All tables</h1>
        </Col>
      </Row>
      <Row xs={1}>
        {tables.map(table => (
          <Col key={table.id} className="mb-3">
            <Card className="border-0 border-bottom">
              <Card.Body className="d-flex justify-content-between">
                <div style={{ marginRight: '10px' }}>
                  <Card.Title>Table {table.id}</Card.Title>
                </div>
                <div className="me-auto">
                  <span className="font-weight-bold"><b>Status:</b></span> {table.status}
                </div>
                <Link to={`/table/${table.id}`}>
                  <Button>Show more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
