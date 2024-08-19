import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { ContentForm, Form, Label, Input } from './ContactFormUserStyles';
import ButtonPrimary from '../Ui/Button';
import arrowRight from '../assets/img/arrow-right.svg';

// Esquema de validación con Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria'),
});

const ContactFormUser = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setModalIsOpen(true);
      resetForm();
      setTimeout(() => {
        setModalIsOpen(false);
        navigate('/');
      }, 200); // Redirigir después de 2 segundos
    },
  });

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ContentForm>
      <Form onSubmit={formik.handleSubmit}>
        <h2>{text}</h2>

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

        <ButtonPrimary type="submit" text="Iniciar sesión" img={arrowRight} alt="button-arrowRight" />
      </Form>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <p>Iniciaste sesión con éxito!!</p>
      </Modal>
    </ContentForm>
  );
};

export default ContactFormUser;