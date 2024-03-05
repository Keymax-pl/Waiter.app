import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTableById } from '../../../redux/tablesReducer';
import { Form, Col, Row, Button, InputGroup } from 'react-bootstrap';

const Tables = ()=> {

  const dispatch = useDispatch();

  const tableId = useSelector(state => getTableById(state, tableId));

  return (
    <Form>
      <h1>Table{tableId.id}</h1>
      <Row>
        <Col>Status:</Col>
      </Row>
      <Row>
        <Col>People:</Col>
      </Row>
      <Row>
        <Col>Bill:</Col>
      </Row>
      <Button type="submit">Update</Button>
    </Form>
  );
};

export default Tables;