import React from 'react'
import PropTypes from 'prop-types'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { withStyles } from '@material-ui/core/styles'
import { TextField, Button, FormControl } from '@material-ui/core'
import { inherits } from 'util'

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Mínimo 2 caracteres')
    .max(50, 'Máximo 50 caracteres')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('E-mail com formato inválido')
    .required('Campo obrigatório'),
  message: Yup.string()
    .min(2, 'Mínimo 2 caracteres')
    .max(500, 'Máximo 500 caracteres')
    .required('Campo obrigatório'),
});

const styles = {
  root: {
    paddingBottom: '1rem',
    margin: 'inherit 1rem'
  },
  title: {
    textAlign: 'center',
  },
  button: {
    textAlign: 'right'
  }
}

export const FormularioDeContato = ({ classes }) => (
  <div className={classes.root}>
    
    <h2 className={classes.title}>Formulário de exemplo usando Formik</h2>

    <Formik
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      validationSchema={ContactSchema}
      onSubmit={async values => {
        await setTimeout(() => {
          console.log('mensagem enviada')
        }, 3000)
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
        } = props;

        return (
          <Form>            
            <TextField
            error={errors.name && touched.name}
            id="name"
            label="Nome"
            value={values.name}
            onChange={handleChange}
            helperText={errors.name}
            placeholder="Digite seu nome"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            error={errors.email && touched.email}
            id="email"
            label="E-mail"
            value={values.email}
            onChange={handleChange}
            helperText={errors.email}
            placeholder="Digite seu e-mail"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            error={errors.message && touched.message}
            id="message"
            label="Mensagem"
            value={values.message}
            onChange={handleChange}
            helperText={errors.message}
            placeholder="Digite sua mensagem"
            variant="outlined"
            fullWidth
            multiline
            rows="4"
            margin="normal"
          />
          <Button className={classes.button} type="submit" color="secondary" variant="contained" size="large" fullWidth>
            ENVIAR
          </Button>
            
        </Form>
      )}}
    </Formik>
  </div>
);

FormularioDeContato.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormularioDeContato);