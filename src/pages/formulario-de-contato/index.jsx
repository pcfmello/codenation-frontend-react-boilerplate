import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { TextField, Button, Grid } from '@material-ui/core'

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
  title: {
    textAlign: 'center',
  },
  button: {
    textAlign: 'right'
  }
}

export const FormularioDeContato = ({ classes }) => (
  <div>
    
    <h2 className={classes.title}>Contate-nos</h2>

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
            <Grid container spacing={1}>
              <Grid item xs={6}>
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
                />
              </Grid>
              <Grid item xs={6}>
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
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12}>
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
                />
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={12} className={classes.button}>
                <Button type="submit" color="primary" variant="contained" size="large">
                  ENVIAR
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      }
    </Formik>
  </div>
);

FormularioDeContato.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormularioDeContato);