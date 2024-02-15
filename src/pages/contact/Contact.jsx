import React from 'react'
import { ContactContainer, ContactForm,TitleForm ,InputFormStyles, InputStyles, TextAreaFormStyles, ButtonFormStyles, TextAreaContainer} from './contactStyles'
import arrowRight from '../../components/assets/img/arrow-right.svg'
function Contact() {
  return (
    <ContactContainer>
      <ContactForm>
        <TitleForm>Contacto</TitleForm>
        <InputFormStyles>
          <InputStyles type="text" placeholder="Name" />
          <InputStyles type="text" placeholder="Apellido" />
          <InputStyles type="email" placeholder="Email" />
        </InputFormStyles>
        <TextAreaContainer>
          <TextAreaFormStyles>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
          </TextAreaFormStyles>
        </TextAreaContainer>
        <ButtonFormStyles>
          <a type="submit">Send <img src={arrowRight} alt="arrowRight" /></a>
        </ButtonFormStyles>

      </ContactForm>
    </ContactContainer>
  )
}

export default Contact;

