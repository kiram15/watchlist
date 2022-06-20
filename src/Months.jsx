import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, CardGroup, Col, Row } from 'react-bootstrap';
import { ChevronDown, ChevronLeft, ChevronUp } from 'react-feather';

// import ArrowStatus from './constants';
const Months = ({ movies }) => {
  const [juneArrow, setJuneArrow] = useState('left'); 
  const [mayArrow, setMayArrow] = useState('left'); 
  const [aprilArrow, setAprilArrow] = useState('left'); 
  const [marchArrow, setMarchArrow] = useState('left'); 
  const [febArrow, setFebArrow] = useState('left'); 
  const [janArrow, setJanArrow] = useState('left'); 

  const monthDict = {
    'june': [ juneArrow, setJuneArrow ],
    'may': [ mayArrow, setMayArrow ], 
    'april': [ aprilArrow, setAprilArrow ], 
    'march': [ marchArrow, setMarchArrow ], 
    'feb': [ febArrow, setFebArrow ], 
    'jan': [ janArrow, setJanArrow ],
  };

  const changeArrow = (arrow, setArrow) => {
    switch(arrow) {
      case 'left':
        setArrow('down');
        break;
      case 'down':
        setArrow('up');
        break;
      default:
        setArrow('left');
    }
  };

  const showArrow = (arrow) => {
    switch(arrow) {
      case 'left':
        return <ChevronLeft />;
      case 'down':
        return <ChevronDown />;
      default:
        return <ChevronUp />;
    }
  }; 

  function monthHeaders() {
    return (Object.keys(monthDict)).map(month => (
      <div className="month-header">
        <Button className="icon arrow" onClick={() => changeArrow(monthDict[month][0], monthDict[month][1])}>
          {showArrow(monthDict[month][0])}
        </Button>
        <h1>{month}</h1>
        <p />
      </div>
    ));
  };

  return (
    <div>
      {monthHeaders()}
      <Row md={1} xlg={2} className="card-group">
        <Col>
          {movies}
        </Col>
      </Row>
    </div>
  );
};

export default Months;
