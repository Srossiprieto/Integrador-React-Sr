import React from 'react'
import { ContactContainer, ContactForm,TitleForm ,InputFormStyles, InputStyles, TextAreaFormStyles, ButtonFormStyles, TextAreaContainer} from './contactStyles'
import arrowRight from '../../components/assets/img/arrow-right.svg'
import ButtonPrimary from '../../components/Ui/Button'
function Contact() {
  return (
    <ContactContainer>
      <ContactForm>
        <TitleForm>Contacto</TitleForm>
        <InputFormStyles>
          <InputStyles type="text" placeholder="Nombre" />
          <InputStyles type="text" placeholder="Apellido" />
          <InputStyles type="email" placeholder="Email" />
        </InputFormStyles>
        <TextAreaContainer>
          <TextAreaFormStyles>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
          </TextAreaFormStyles>
        </TextAreaContainer>
        <ButtonFormStyles>
          {/* <a type="submit">Enviar <img src={arrowRight} alt="arrowRight" /></a> */}
          <ButtonPrimary type="submit" text={"Enviar"} img={arrowRight} alt="arrowRight" />
        </ButtonFormStyles>

      </ContactForm>
    </ContactContainer>
  )
}

export default Contact;

