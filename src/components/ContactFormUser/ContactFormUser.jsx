import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext'; // Importar el contexto de autenticación
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import {
  ContentForm, Form, Label, Input, FormButtom, StyledLinkContainer
} from './ContactFormUserStyles';
import ButtonPrimary from '../Ui/Button';
import arrowRight from '../assets/img/arrow-right.svg';
import { Link } from 'react-router-dom';
import Loader from '../Ui/Loader/Loader';

const validationSchema = Yup.object({
  username: Yup.string().required('El nombre de usuario es obligatorio'),
  email: Yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
});

const handleSubmit = async (values, { resetForm }, setIsLoading, setErrorMessage, signup, navigate) => {
  setIsLoading(true); // Iniciar carga
  try {
    await signup(values); // Usar la función signup del contexto de autenticación
    resetForm();
    setErrorMessage('');
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Error desconocido';
    setErrorMessage(errorMessage);
  } finally {
    setIsLoading(false); // Finalizar carga
  }
};

const ContactFormUser = ({ text }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const { signup, isAuthenticated, errors: registerErrors } = useAuth(); // Usar el contexto de autenticación
  const navigate = useNavigate(); // Usar useNavigate para redireccionar

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, actions) => handleSubmit(values, actions, setIsLoading, setErrorMessage, signup, navigate),
  });

  return (
    <ContentForm>
      <Form onSubmit={formik.handleSubmit}>
        <h2>{text}</h2>
        {
          registerErrors && registerErrors.length > 0 && (
            <div style={{ color: 'red' }}>
              {registerErrors.map((error, index) => (
                <p key={index}>{error.message || error}</p>
              ))}
            </div>
          )
        }
        
        <Label htmlFor="username">Nombre de Usuario</Label>
        <Input
          id="username"
          name="username"
          placeholder="Nombre de Usuario"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <div style={{ color: 'red' }}>{formik.errors.username}</div>
        )}

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

        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

        <ButtonPrimary
          type="submit"
          text={isLoading ? <Loader/> : "Registrarse"}
          img={isLoading ? null : arrowRight}
          alt="button-arrowRight"
          disabled={isLoading} // Deshabilitar el botón mientras se carga
        />

        <FormButtom>
          <span>¿Ya tienes cuenta?</span>
          <StyledLinkContainer>
            <Link to="/login">Inicia sesión</Link>
          </StyledLinkContainer>
        </FormButtom>
      </Form>
    </ContentForm>
  );
};

export default ContactFormUser;