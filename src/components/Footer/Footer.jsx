import React from 'react';
import { FooterContainer, FooterRow, FooterLinks, FooterBottom, SocialLink, Copyright, NewsletterForm} from './FooterStyles';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import payment from '../assets/img/payment.png';
function Footer() {
  return (
    <FooterContainer>
      <FooterRow>
        <FooterLinks>
          <h2>SRP</h2>
          <p>Si tiene alguna pregunta, por favor contáctenos en: <br/><a href="mailto:support@gmail.com">srp@gmail.com</a></p>
          <SocialLink>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </SocialLink>
        </FooterLinks>
        <FooterLinks>
          <h3>Enlaces</h3>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Acerca de</a></li>
        </FooterLinks>
        <FooterLinks>
          <h3>Legal</h3>
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Política de privacidad</a></li>
          <li><a href="#">Política de cookies</a></li>
          <li><a href="#">Política de devoluciones</a></li>
        </FooterLinks>
        <FooterLinks>
          <h3>Miembro</h3>
          <NewsletterForm>
            <span>¡Suscríbete a nuestro boletín!</span>
            <input type="email" placeholder="Correo electrónico" />
            <button type="submit">Suscribirse</button>
          </NewsletterForm>
        </FooterLinks>
      </FooterRow>
      <FooterBottom>
        <Copyright>
          &copy; Hecho con ❤️ por <a href="#">Santino Rossi</a>
        </Copyright>
        <img src={payment} width="397" height="32" alt="payment method" />
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;