import React from 'react';
import {FooterContainerStyled , FooterTextContainerStyled, FooterIconsContainer, FooterPContainer  } from './FooterStyles';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (

        <FooterContainerStyled>
          <FooterTextContainerStyled>
            <h2>SRP</h2>
            <FooterIconsContainer>
              <FaFacebook/>
              <FaInstagram/>
              <FaXTwitter/>
            </FooterIconsContainer>
            <FooterPContainer>
            <p>&copy; Copyright 2024.</p>
            <p>Desarrollado por <span>Santino Rossi</span></p>
            </FooterPContainer>
          </FooterTextContainerStyled>
        </FooterContainerStyled>

        );
}

export default Footer
