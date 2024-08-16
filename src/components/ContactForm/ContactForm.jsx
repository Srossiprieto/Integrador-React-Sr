import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../Modal/Modal';
import { ContentForm, Form, Label, Input, Textarea } from './ContactFormStyles';
import ButtonPrimary from '../Ui/Button';
import arrowRight from '../assets/img/arrow-right.svg';

// Esquema de validación con Yup
const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
  message: Yup.string().required('El mensaje es obligatorio'),
});

const ContactForm = ({text}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setModalIsOpen(true);
      resetForm();
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
          type="text"
          placeholder='nombre'
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
          placeholder='email'
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}

        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          placeholder='mensaje'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div style={{ color: 'red' }}>{formik.errors.message}</div>
        ) : null}

        <ButtonPrimary type="submit" text="Enviar" img={arrowRight} alt="button-arrowRight" />
      </Form>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <p>Gracias por tu mensaje</p>
      </Modal>
    </ContentForm>
  );
};

export default ContactForm;