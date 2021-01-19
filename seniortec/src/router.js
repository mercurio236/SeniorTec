import React from 'react';
import './router.css';
import {  Route, Switch, BrowserRouter } from 'react-router-dom';
import Menu from './menu';
import Footer from '../src/footer';

import Home from './Componets/Home';
import Servicos from './Componets/Servico';
import Sobre from './Componets/Sobre';


export default function Rota() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
      
      <Footer/>
    </BrowserRouter>
  )
}

