import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateNav from './pages/Create/CreateNav';
import Create from './pages/Create/Create';
import Create1 from './pages/Create/Create1';
import Create2 from './pages/Create/Create2';
import Create3 from './pages/Create/Create3';

function Router() {
  return (
    <BrowserRouter>
      <CreateNav />
      <Routes>
        <Route path="/create" element={<Create />} />;
        <Route path="/create/title-and-cover" element={<Create1 />} />;
        <Route path="/create/class-introduction" element={<Create2 />} />;
        <Route path="/create/creater-introduction" element={<Create3 />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
