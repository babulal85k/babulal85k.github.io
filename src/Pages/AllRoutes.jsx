import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from './DashBoard';
import NotFound from '../components/NotFound';

const AllRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoute;