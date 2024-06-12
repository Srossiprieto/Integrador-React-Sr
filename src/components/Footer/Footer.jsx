import React from 'react';
import { FooterContainer, FooterRow, FooterLinks, FooterBottom, SocialLink, Copyright, NewsletterForm} from './FooterStyles';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import payment from '../assets/img/payment.webp';
import ButtonPrimary  from '../Ui/Button';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <FooterRow>
        <FooterLinks>
          <h2>SRP</h2>
          <p>Si tiene alguna pregunta, por favor contáctenos en: <br/><a href="mailto:support@gmail.com">srp@gmail.com</a></p>
          <SocialLink>
            <a href="https://www.facebook.com/" target='_blanc' aria-label="Facebook Link"  alt="Facebook Link"><FaFacebookF /></a>
            <a href="https://www.instagram.com/" target='_blanc'aria-label="Instagram Link"  alt="Instagram Link"><FaInstagram /></a>
            <a href="https://x.com/" target='_blanc' aria-label="X (Twitter) Link" alt="X (Twitter) Link"><FaTwitter /></a>
            <a href="https://www.youtube.com" target='_blanc' aria-label="Youtube Link"  alt="Youtube Link"><FaYoutube /></a>
          </SocialLink>
        </FooterLinks>
        <FooterLinks>
          <h3>Enlaces</h3>
    
            <Link to="/">
              <span>Inicio</span>
            </Link>
            <Link to="/productos">
              <span>Productos</span>
            </Link>
            <Link to="/contacto">
              <span>Contacto</span>
            </Link>
            <Link to="/nosotros">
              <span>Acerca de</span>
            </Link>
   
        </FooterLinks>
        <FooterLinks>
          <h3>Legal</h3>
      
            <Link to="/contacto">
              <span>Contacto</span>
            </Link>
            <Link to="/nosotros">
              <span>Términos y condiciones</span>
            </Link>
            <Link to="/nosotros">
              <span>Política de privacidad</span>
            </Link>
            <Link to="/nosotros">
              <span>Política de cookies</span>
            </Link>


        </FooterLinks>
        <FooterLinks>
          <h3>Miembro</h3>
          <NewsletterForm>
            <span>¡Suscríbete a nuestro boletín!</span>
            <input type="email" placeholder="Correo electrónico" />
            <ButtonPrimary text={"Suscribirse"}/>
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