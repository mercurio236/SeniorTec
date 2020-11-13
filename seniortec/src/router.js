import React from 'react';
import './router.css';
import {  Route, Switch, BrowserRouter } from 'react-router-dom';
import Menu from './menu';

import Home from './Componets/Home';
import Servicos from './Componets/Servico';
import Sobre from './Componets/Sobre';
import Contato from './Componets/Contato';


export default function Rota() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  )
}

