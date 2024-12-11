import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as React from 'react';

interface Values {
  name: string;
  email: string;
  phone: string;
  consulta: string;
}

export function FormApp() {

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        consulta: '',
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};

        if (!values.name) {
          errors.name = 'El nombre es requerido';
        }
        if (!values.email) {
          errors.email = 'El correo electrónico es requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Formato de correo electrónico incorrecto';
        }
        if (!values.phone) {
          errors.phone = 'El teléfono es requerido';
        } else if (!/^\d+$/.test(values.phone)) {
          errors.phone = 'El teléfono solo puede contener números';
        }
        if (!values.consulta) {
          errors.consulta = 'La consulta es requerida';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetch('https://formsubmit.co/ajax/facutota@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...values,
              //cc: 'automotoresdongregorio@hotmail.com' // Dirección de correo electrónico de CC
            }),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const result = await response.json();
          console.log('Form submitted successfully:', result);
          alert('Formulario enviado exitosamente');
          // Restablecer los valores del formulario
          resetForm();
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Hubo un error al enviar el formulario');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ submitForm, isSubmitting, resetForm }) => (
        <Form className='w-full lg:p-8 '>
          <Field className='m-2 w-full'
            component={TextField}
            name="name"
            type="name"
            label="Nombre"
            InputProps={{
              className: 'text-white border border-blue-500' // Aplica estilos usando clases de Tailwind
            }}
            InputLabelProps={{
              className: 'text-white' // Aplica estilos usando clases de Tailwind
            }}
          />
          <br />
          <Field className='m-2 w-full'
            component={TextField}
            name="email"
            type="email"
            label="Email"
            InputProps={{
              className: 'text-white border border-blue-500' // Aplica estilos usando clases de Tailwind
            }}
            InputLabelProps={{
              className: 'text-white' // Aplica estilos usando clases de Tailwind
            }}
          />
          <br />
          <Field className='m-2 w-full'
            component={TextField}
            name="phone"
            type="phone"
            label="Telefono"
            InputProps={{
              className: 'text-white border border-blue-500' // Aplica estilos usando clases de Tailwind
            }}
            InputLabelProps={{
              className: 'text-white' // Aplica estilos usando clases de Tailwind
            }}
          />
          <br />
          <Field className='m-2 w-full'
            component={TextField}
            name="consulta"
            type="text"
            label="Consulta"
            multiline={true} // Habilitar el modo multiline
            rows={4} // Número de filas inicial
            InputProps={{
              className: 'text-white border border-blue-500' // Aplica estilos usando clases de Tailwind
            }}
            InputLabelProps={{
              className: 'text-white' // Aplica estilos usando clases de Tailwind
            }}
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button className='m-2 w-40 text-white'
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            ENVIAR
          </Button>
        </Form>
      )}
    </Formik>
  );
}