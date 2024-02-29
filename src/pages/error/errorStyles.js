import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    justify-content: center;
    padding: 20px;
    background-color: var(--bg);
    
    p {
        font-size: 20px;
        color: var(--purple-500);
        font-weight: 800;
    }

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const ErrorTitle = styled.h1`
    font-size: 4em;
    color: var(--text);
    margin-top: 20px;
    font-weight: 800;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2em;
    }
`;

export const ErrorDirection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const ErrorText = styled.div`
    font-size: 1.4em;
    text-align: center;
    color: var(--gray);
    font-weight: 300;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const StyledLinkError = styled(Link)`
    font-weight: 300;
    color: var(--text);
    text-decoration: none;
    margin: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: var(--purple-500);
    }

    @media (max-width: 768px) {
        padding: 5px;
    }
`;