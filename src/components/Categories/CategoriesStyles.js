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
        selected ? 'var(--bg-btn-category-selected)' : 'var(--bg-btn-category)'};
    border-radius: 10px;
    width: 90px;
    cursor: pointer;

    h2 {
        font-size: 12px;
    }
`;

