import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTableById } from '../../../redux/tablesReducer';
import { Form, Col, Row, Button, InputGroup } from 'react-bootstrap';
import { addTablesRequest } from '../../../redux/tablesReducer'

const Tables = ()=> {

  const dispatch = useDispatch();
  const { tableId } = useParams();
  const tableDataId = useSelector(state => getTableById(state, tableId));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTablesRequest({ id: tableId }));
};

  return (
    <Form onSubmit={handleSubmit} className="ms-0" style={{ width: '30%'}}>
      <h1>Table {tableDataId.id}</h1>
      <Row className="mt-4 mb-4 mx-0">
        <Col style={{ fontWeight: 'bold', fontSize: '18px' }}>Status:</Col>
        <Form.Group as={Col} controlId="formGridState" style={{ marginLeft: '-210px' }}>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mt-4 mb-4 mx-0">
        <Col style={{ fontWeight: 'bold', fontSize: '18px' }}>People:</Col>
        <Form.Group as={Col} style={{ maxWidth: '70px',marginLeft: '-300px' }}>
          <Form.Control />
        </Form.Group>
        <Col xs="auto">
          <InputGroup.Text style={{ fontSize: '23px' }} className="p-0 border-0 bg-transparent">/</InputGroup.Text>
        </Col>
        <Form.Group as={Col} style={{ maxWidth: '70px' }}>
          <Form.Control />
        </Form.Group>
      </Row>
      <Row className="mt-4 mb-4 mx-0">
        <Col style={{ fontWeight: 'bold', fontSize: '18px'}}>Bill:</Col>
        <Col xs="auto">
          <InputGroup.Text style={{  fontSize: '23px', marginLeft: '-300px' }}  className="p-0 border-0 bg-transparent">$</InputGroup.Text>
        </Col>
        <Form.Group as={Col} style={{ maxWidth: '70px',marginLeft: '-300px' }}>
          <Form.Control />
        </Form.Group>
      </Row>
      <Button className="mt-4" type="submit">Update</Button>
    </Form>
  );
};

export default Tables;