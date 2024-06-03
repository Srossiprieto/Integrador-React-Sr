import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 30px;
  background: var(--bg-footer);
  width: 100%;
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
`;

export const FooterLinks = styled.div`
  h2 {
    color: var(--text);
    font-weight: 800;
    font-size: 45px;
  }
  h3{
    font-size: 19px;
    color: var(--purple-300);
    font-weight: 800;
    padding: 10px 0;

  }
  p {
    color: var(--text);
    max-width: 250px;
  }
  p a {
    color: var(--gray-400);
    font-weight: 500;
    transition: all 0.3s ease-in-out;
  }
  p a:hover {
    color: var(--purple-300);
  }

  li {
    list-style: none;
    margin: 10px 0;
  }
  a {
    color: var(--gray-400);
    font-weight: 500;
    transition: all 0.3s ease-in-out;
  }
  a:hover {
    color: var(--purple-300);
  }

`;

export const SocialLink = styled.div`
padding-top: 10px;
  a {
    color: var(--text);
    font-size: 20px;
    margin-right: 20px;
  }
  a:hover {
    color: var(--purple-300);
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-footer-bottom);
  border-top: 1px solid var(--gray-400);
  font-size: 14px;
  font-weight: 500;
  gap: 10px;
  padding: 10px;
  img {
    width: 270px;
    height: 20px;
  }

  @media (max-width: 768px) {
    img {
      width: 200px;
      height: 15px;
    }
  }

`;

export const Copyright = styled.p`
  color: var(--text);
  a {
    color: var(--text);
    font-weight: 600;
    transition: all 0.3s ease-in-out;
  }
  a:hover {
    color: var(--purple-300);
  }

`;

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin: 10px 0px 10px 0px;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  input::placeholder {
    color: var(--gray-400);
    font-weight: 500;
  }
  span{
    color: var(--gray-400);
    max-width: 250px;
    font-weight: 500;
  }


 
`;