import styled from 'styled-components';

export const ShapesContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scale(1, -1);
    height: 250px;
    width: 100%; // Asegúrate de que el ancho sea 100%

    img {
        width: 100%; // Asegúrate de que el ancho de la imagen sea 100%
    }

    @media (max-width: 991px) {
        height: 150px;
    }

    @media (max-width: 479px) {
        height: 50px;
    }
`;
