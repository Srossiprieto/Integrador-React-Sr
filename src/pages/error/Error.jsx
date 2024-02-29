import { ErrorContainer, ErrorTitle, ErrorDirection, ErrorText, StyledLinkError } from './errorStyles.js';

function Error() {
  return (
    <ErrorContainer>
      <p>404</p>
      <ErrorTitle>
        Página no encontrada.
      </ErrorTitle>
      <ErrorDirection>
        <ErrorText>
        Lo sentimos por eso. ¿ Quieres echar un vistazo a nuestra <StyledLinkError to="/">Página de inicio</StyledLinkError>?
        </ErrorText>
      </ErrorDirection>
    </ErrorContainer>
  )
}

export default Error;