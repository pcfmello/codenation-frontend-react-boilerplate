import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../assets/images/logo.png'


export default function ButtonAppBar() {

  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <img src={Logo} width={95} alt="Logotipo da Codenation" />
        </Toolbar>
      </AppBar>
    </div>
  );
}