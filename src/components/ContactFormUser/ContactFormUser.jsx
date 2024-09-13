import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api/api'; 
import Modal from '../Modal/Modal';
import { ContentForm, Form, Label, Input, FormButtom, StyledLinkContainer } from './ContactFormUserStyles';
import ButtonPrimary from '../Ui/Button';
import arrowRight from '../assets/img/arrow-right.svg';

// Validation schema for Yup
const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria'),
  phone: Yup.string().matches(/^[0-9]+$/, 'El número de teléfono debe ser válido').required('El número de teléfono es obligatorio'),
});

const ContactFormUser = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await api.post('/api/users', {
          username: values.name,
          email: values.email,
          phone: values.phone,
          password_hash: values.password,
        });
        setModalIsOpen(true);
        resetForm();
        setErrorMessage(''); 
        setTimeout(() => {
          setModalIsOpen(false);
          navigate('/');
        }, 1500); 
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        setErrorMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.'); // Set error message
      }
    },
  });

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ContentForm>
      <Form onSubmit={formik.handleSubmit}>
        <h2>{text}</h2>

        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          placeholder="nombre"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}

        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          name="password"
          placeholder="contraseña"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}

        <Label htmlFor="phone">Teléfono</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="teléfono"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div style={{ color: 'red' }}>{formik.errors.phone}</div>
        ) : null}

        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} {/* Display error message */}

        <ButtonPrimary type="submit" text="Registrarse" img={arrowRight} alt="button-arrowRight" />
        <FormButtom>
          <span>¿Ya tienes cuenta?</span>
          <StyledLinkContainer>
            <Link to="/login">Inicia sesión</Link>
          </StyledLinkContainer>
        </FormButtom>
      </Form>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <p>Te has registrado con éxito!!</p>
      </Modal>
    </ContentForm>
  );
};

export default ContactFormUser;