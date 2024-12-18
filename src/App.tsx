import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import TestEDCO from './pages/EDCO/Test';
import PrepEDCO from './pages/EDCO/Prep';
import ProdEDCO from './pages/EDCO/Prod';
import TestEDCR from './pages/EDCR/Test';
import PrepEDCR from './pages/EDCR/Prep';
import ProdEDCR from './pages/EDCR/Prod';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edco/test" element={<TestEDCO />} />
            <Route path="/edco/prep" element={<PrepEDCO />} />
            <Route path="/edco/prod" element={<ProdEDCO />} />
            <Route path="/edcr/test" element={<TestEDCR />} />
            <Route path="/edcr/prep" element={<PrepEDCR />} />
            <Route path="/edcr/prod" element={<ProdEDCR />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
