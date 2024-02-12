import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './page/Home';
import NotFound from './page/NotFound';
import Basket from './page/Basket';
import PizzaCard from './page/PizzaCard';
import Main from './layouts/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
        <Route path="basket" element={<Basket />} />
        <Route path="pizza/:id" element={<PizzaCard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
