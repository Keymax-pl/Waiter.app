import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTableById } from '../../../redux/tablesReducer';
import { Form, Col, Row, Button, InputGroup } from 'react-bootstrap';
import { editTableRequest } from '../../../redux/tablesReducer'
import {useState, useEffect} from 'react'
import { getStats } from '../../../redux/StatusReducer';

const Tables = ()=> {

  const dispatch = useDispatch();
  const { tableId } = useParams();
  const tableData = useSelector(state => getTableById(state, tableId));
  const statuses = useSelector(getStats);

  const [ status, setStatus] = useState('');
  const [ peopleAmount, setPeopleAmount] = useState(0);
  const [ maxPeopleAmount, setMaxPeopleAmount ] = useState(0);
  const [ bill, setBill ] = useState(0);
  useEffect(() => {
    if(tableData){
      setStatus(tableData.status)
      setPeopleAmount(tableData.peopleAmount)
      setMaxPeopleAmount(tableData.maxPeopleAmount)
      setBill(tableData.bill)
    }
  }, [tableData])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTableRequest({ id: tableId, status, peopleAmount, maxPeopleAmount, bill }));
};
  if(!tableData){
    return (
      <span>
        Loading...
      </span>
    )
  }

  return (
    <Form onSubmit={handleSubmit} className="ms-0" style={{ width: '30%'}}>
      <h1>Table {tableData.id}</h1>
      <Row className="mt-4 mb-4 mx-0">
        <Col style={{ fontWeight: 'bold', fontSize: '18px' }}>Status:</Col>
        <Form.Group as={Col} controlId="formGridState" style={{ marginLeft: '-210px' }}>
          <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
            {statuses.map(status => (<option> {status.name}</option>))}
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mt-4 mb-4 mx-0">
        <Col style={{ fontWeight: 'bold', fontSize: '18px' }}>People:</Col>
        <Form.Group as={Col} style={{ maxWidth: '70px',marginLeft: '-300px' }}>
          <Form.Control value={peopleAmount} onChange={(e) => setPeopleAmount(e.target.value)} />
        </Form.Group>
        <Col xs="auto">
          <InputGroup.Text style={{ fontSize: '23px' }} className="p-0 border-0 bg-transparent">/</InputGroup.Text>
        </Col>
        <Form.Group as={Col} style={{ maxWidth: '70px' }}>
          <Form.Control  value={maxPeopleAmount} onChange={(e) => setMaxPeopleAmount(e.target.value)}/>
        </Form.Group>
      </Row>
      {status === 'Busy' &&(
      <Row className="mt-4 mb-4 mx-0">
        <Col style={{ fontWeight: 'bold', fontSize: '18px'}}>Bill:</Col>
        <Col xs="auto">
          <InputGroup.Text style={{  fontSize: '23px', marginLeft: '-300px' }}  className="p-0 border-0 bg-transparent">$</InputGroup.Text>
        </Col>
        <Form.Group as={Col} style={{ maxWidth: '70px',marginLeft: '-300px' }}>
          <Form.Control value={bill} onChange={(e) => setBill(e.target.value)}/>
        </Form.Group>
      </Row>
      )}
      <Button className="mt-4" type="submit">Update</Button>
    </Form>
  );
};

export default Tables;