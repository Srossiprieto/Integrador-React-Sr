import styled from 'styled-components';

// =============================== Tech ===============================



export const CardTechDest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 300px;
  height: 450px;
  gap: 10px;
  background: var(--bg-card);
  border-radius: 8px;
  img {
    width: 100%;
    height: 200px;
    border-radius: 8px 8px 0 0;
    object-fit: contain;
    background: white;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    gap: 0;
    background: var(--bg-card);
    border-radius: 8px;
    img{
        width: 100%;
        height: 60px;
        border-radius: 8px 8px 0 0;
        object-fit: contain;
        background: white;
    }
  }


`;

export const TextTechContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  padding: 10px;
  gap: 10px;
  h2 {
    font-size: 20px;
    font-weight: 700;
    color: var(--text);
  }

  h3 {
    font-size: 15px;
    font-weight: 300;
    color: var(--gray);
    white-space: normal;       /* Permite que el texto se divida en varias líneas */
    overflow: hidden;          /* Oculta el desbordamiento del contenido */
    text-overflow: ellipsis;   /* Añade elipsis (...) al final del texto que no cabe */
    display: -webkit-box;      /* Requerido para el truncamiento de múltiples líneas */
    -webkit-line-clamp: 3;     /* Número de líneas a mostrar antes de truncar */
    -webkit-box-orient: vertical; /* Orientación del contenedor */
    max-width: 200px;          /* Asegura que el contenedor tenga un tamaño fijo */
  }
  p{
        font-size: 16px;
    }
  @media (max-width: 480px) {
    gap: 0;
    background: var(--bg-card);
    padding: 5px;
    border-radius: 8px;
    h2{
        font-size: 12px; 
        overflow: hidden;       /* Oculta el desbordamiento del contenido */
        text-overflow: ellipsis; 
    }

    p{
        font-size: 10px;
    }
    button{
        height: 30px;
    }}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: auto;
  padding: 10px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  color: var(--text);
  background-color: var(--purple-700);
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--purple-600);
  }
`;

// =============================== Tech ===============================

// =============================== TechCard ===============================

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  h1 {
    text-align: center;
    color: var(--text);
    font-weight: 800;
    font-size: 30px;
  }
`;

export const ContainerTechWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5vh;
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  gap: 10px;
  justify-content: center;
  margin: 15px 15px;
  > h2 {
    color: var(--bg);
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;

    h3{
        display: none;
    }
  }
`;

export const ButtonContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 20px;
  width: auto;
  gap: 1rem;
`;

// =============================== TechCard ===============================



