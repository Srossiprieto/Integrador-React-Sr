import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../api/api'; 
import Modal from '../Modal/Modal';
import {
  ContentForm, Form, Label, Input, FormButtom, StyledLinkContainer
} from './ContactFormUserStyles';
import ButtonPrimary from '../Ui/Button';
import arrowRight from '../assets/img/arrow-right.svg';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria'),
});

const ContactFormUser = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const closeModal = () => setModalIsOpen(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true); // Iniciar carga
      try {
        await api.post('/api/auth/register', {
          username: values.name,
          email: values.email,
          password: values.password,
        });

        setModalIsOpen(true);
        resetForm();
        setErrorMessage(''); 

      } catch (error) {
        setErrorMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      } finally {
        setIsLoading(false); // Finalizar carga
      }
    },
  });

  return (
    <ContentForm>
      <Form onSubmit={formik.handleSubmit}>
        <h2>{text}</h2>

        {/* Campo de Nombre */}
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          placeholder="Nombre"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        )}

        {/* Campo de Email */}
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}

        {/* Campo de Contraseña */}
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          name="password"
          placeholder="Contraseña"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}

        {/* Mensaje de error de envío */}
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

        {/* Botón de Enviar */}
        <ButtonPrimary
          type="submit"
          text={isLoading ? "Cargando..." : "Registrarse"}
          img={arrowRight}
          alt="button-arrowRight"
          disabled={isLoading} // Deshabilitar el botón mientras se carga
        />

        {/* Enlace a Iniciar Sesión */}
        <FormButtom>
          <span>¿Ya tienes cuenta?</span>
          <StyledLinkContainer>
            <Link to="/login">Inicia sesión</Link>
          </StyledLinkContainer>
        </FormButtom>
      </Form>

      {/* Modal de confirmación */}
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <p>¡Te has registrado con éxito!</p>
      </Modal>
    </ContentForm>
  );
};

export default ContactFormUser;