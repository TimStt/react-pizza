import React from 'react';
import logoPizza from '../assets/img/pizza-logo.svg';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function Main() {
  return (
    <div className="wrapper">
      <Header logoPizza={logoPizza} />
      <main className="main">
        <Outlet />
      </main>
      <Footer logoPizza={logoPizza} />
    </div>
  );
}

export default Main;
