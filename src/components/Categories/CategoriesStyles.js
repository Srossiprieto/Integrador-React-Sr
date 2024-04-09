import styled from 'styled-components';
import { motion } from 'framer-motion';



export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  user-select: none;
  padding-top: 10px;
`;

export const CardCategories = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 5px;
    background-color: ${({ selected }) =>
        selected ? '#1a1a1af0' : 'var(--purple-900)'};
    border-radius: 10px;
    width: 90px;
    cursor: pointer;

    h2 {
        font-size: 12px;
    }
`;

export const BorderDecoration = styled.div`
`;
