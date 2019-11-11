import React from 'react'
import PropTypes from 'prop-types'

import {AppBar, Toolbar} from '@material-ui/core'

import Logo from '../../assets/images/logo.png'

const ButtonAppBar = ({classes}) => {

  return (
    <div >
      <AppBar position="static" color="primary">
        <Toolbar>
          <img src={Logo} width={80} alt="Logotipo da Codenation" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ButtonAppBar