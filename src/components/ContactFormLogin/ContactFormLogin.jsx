import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from '../Modal/Modal';
import { ContentForm, Form, Label, Input, FormButtom, StyledLinkContainer } from './ContactFormLoginStyles';
import ButtonPrimary from '../Ui/Button';
import arrowRight from '../assets/img/arrow-right.svg';
import api from '../../api/api';

// Esquema de validación con Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria'),
});

const ContactFormLogin = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true); // Iniciar carga
      try {
        // Petición POST al backend para verificar las credenciales del usuario
        const response = await api.post('/api/auth/login', {
          email: values.email,
          password: values.password,
        });

        // Verificar la respuesta del servidor
        if (response.status === 200) {
          // Éxito: Muestra el modal y resetea el formulario
          setModalIsOpen(true);
          resetForm();
          setErrorMessage('');

          // Almacenar el token de autenticación (si es necesario)
          localStorage.setItem('authToken', response.data.token);

          setTimeout(() => {
            setModalIsOpen(false);
            navigate('/'); // Redirigir a la página principal después de iniciar sesión
          }, 1500); // Redirigir después de 1.5 segundos
        } else {
          // Error: Muestra el mensaje de error
          setErrorMessage('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        // Error: Muestra el mensaje de error
        setErrorMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      } finally {
        setIsLoading(false); // Finalizar carga
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

        {/* Campo de Email */}
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
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}

        {/* Campo de Contraseña */}
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
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}

        {/* Mensaje de error de envío */}
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

        {/* Botón de Enviar */}
        <ButtonPrimary
          type="submit"
          text={isLoading ? "Cargando..." : "Iniciar sesión"}
          img={arrowRight}
          alt="button-arrowRight"
          disabled={isLoading} // Deshabilitar el botón mientras se carga
        />

        {/* Enlace a Registrarse */}
        <FormButtom>
          <span>¿No tienes cuenta?</span>
          <StyledLinkContainer>
            <Link to="/register">Regístrate</Link>
          </StyledLinkContainer>
        </FormButtom>
      </Form>

      {/* Modal de confirmación */}
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <p>Has iniciado sesión con éxito!!</p>
      </Modal>
    </ContentForm>
  );
};

export default ContactFormLogin;