import React from 'react'
import PropTypes from 'prop-types'

import { Container, Box } from '@material-ui/core'

import FormularioDeContato from '../formulario-de-contato'

const Home = ({ classes }) => (

    <Container fixed>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <h1>Projeto inicial de frontend em React</h1>
            <p>Desenvolvido como modelo para ser utilizados nas aplicações backend do programa AceleraDev</p>

            <FormularioDeContato />
        </Box>
    </Container>
)

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Home