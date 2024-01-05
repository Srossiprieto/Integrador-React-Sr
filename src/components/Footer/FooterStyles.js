import styled from 'styled-components';


export const FooterContainerStyled = styled.div`
width: 100%;
height: 100%;
gap: 4rem;
padding: 4rem 0.5rem 2rem;
margin-top: 60px ;
background: var(--bg-footer);
`
export const FooterTextContainerStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
h2{
    font-size: 28px;
    font-weight: 800;
}
`
export const FooterIconsContainer = styled.div`
display: flex;
gap: 20px;
font-size: 18px;
`
export const FooterPContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-around;
color: var(--text-footer);
gap: 20px;
@media (max-width: 968px) {
    flex-direction: column;
  }
`