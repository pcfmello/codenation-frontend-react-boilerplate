import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import NavBar from './components/nav-bar'

export default () => (

  <div className="App">
    <>
    <NavBar />
      <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Home} />
              {/* <Route path="/sobre" exact={true} component={Sobre} /> */}

              {/* EXEMPLOS DE COMO USAR O REACT ROUTER https://medium.com/collabcode/roteamento-no-react-com-os-poderes-do-react-router-v4-fbc191b9937d */}

          </Switch>
      </BrowserRouter>
    </>
  </div>
);
