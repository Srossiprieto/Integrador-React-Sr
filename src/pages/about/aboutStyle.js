import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  justify-content: center;
  padding: 20px;
  background-color: var(--bg);
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: var(--purple-500);
`;

export const Subtitle = styled.h2`
  font-size: 2em;
  color: var(--purple-300);
`;

export const Text = styled.p`
  font-size: 1.2em;
  color: var( --purple-100);
  text-align: center;
`;