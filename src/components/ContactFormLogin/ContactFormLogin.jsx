import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import {
  ContentForm, Form, Label, Input, FormButtom, StyledLinkContainer
} from './ContactFormLoginStyles';
import ButtonPrimary from '../Ui/Button';
import arrowRight from '../assets/img/arrow-right.svg';
import Loader from '../Ui/Loader/Loader';

const validationSchema = Yup.object({
  email: Yup.string().email('Debe ser un email válido').required('El email es obligatorio'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
});

const ContactFormLogin = ({ text }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        await signin(values);
        resetForm();
        setErrorMessage('');
      } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || 'Error desconocido';
        setErrorMessage(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <ContentForm>
      <Form onSubmit={formik.handleSubmit}>
        <h2>{text}</h2>
        {
          signinErrors && signinErrors.length > 0 && (
            <div style={{ color: 'red' }}>
              {signinErrors.map((error, index) => (
                <p key={index}>{error.message || error}</p>
              ))}
            </div>
          )
        }
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

        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

        <ButtonPrimary
          type="submit"
          text={isLoading ? <Loader /> : "Iniciar sesión"}
          img={isLoading ? null : arrowRight}
          alt="button-arrowRight"
          disabled={isLoading}
        />

        <FormButtom>
          <span>¿No tienes cuenta?</span>
          <StyledLinkContainer>
            <Link to="/register">Regístrate</Link>
          </StyledLinkContainer>
        </FormButtom>
      </Form>
    </ContentForm>
  );
};

export default ContactFormLogin;