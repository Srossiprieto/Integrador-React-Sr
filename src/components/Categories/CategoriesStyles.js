import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  user-select: none;
  padding-top: 100px;
  margin: 0 10px;

  h2 {
    color: var(--text-footer);
    font-weight: 800;
    font-size: 20px;
  }
`;

export const CardCategories = styled(motion.div)`
  display: flex;
  align-items: center;
  color: ${({ selected }) => (selected ? "var(--text-footer)" : "var(--text)")};
  cursor: pointer;
  h3 {
    font-size: 12px;
  }
`;

export const SelectAllButton = styled(motion.h3)`
  font-size: 12px;
  cursor: pointer;
  text-align: left;
  color: var(--text);
  &:focus {
    color: var(--text-footer);
  }
`;