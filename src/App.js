import React from 'react'
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { fetchTables } from './redux/tablesReducer.js';
import Home from './components/pages/Home/Home.js';
import Tables from './components/pages/Tables/Tables.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import Header from './components/views/Header/Header.js';
import Footer from './components/views/Footer/Footer.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:tableId" element={<Tables />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App;
