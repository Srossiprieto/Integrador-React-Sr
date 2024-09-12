import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
    TechContainer,
    ContainerTechWrapper,
    TechWrapper,
    ButtonContainerPagination,
    TextTitle
} from "./TechStyledCard";
import Tech from "./Tech";
import { INITIAL_LIMIT } from '../../utils/constants';
import ButtonPagination from '../Ui/ButtonPagination.jsx';
import { motion } from 'framer-motion';

function TechCard({ textTitle }) {
  const [itemsToShow, setItemsToShow] = useState(INITIAL_LIMIT);
  let tech = useSelector((state) => state.products.tech);
  const { selectedCategory } = useSelector((state) => state.categories);

  // Filtra los productos por la categoría seleccionada
  if (selectedCategory) {
    tech = tech.filter(prod => prod.category === selectedCategory);
  }

  // Obtiene los elementos para mostrar
  const techsToShow = tech.slice(0, itemsToShow);

  // Incrementa la cantidad de elementos a mostrar
  const showMoreItems = () => setItemsToShow(itemsToShow + INITIAL_LIMIT);

  // Reduce la cantidad de elementos a mostrar
  const showLessItems = () => setItemsToShow(Math.max(itemsToShow - INITIAL_LIMIT, INITIAL_LIMIT));

  // Restablece la cantidad de elementos a mostrar cuando cambia la categoría seleccionada
  useEffect(() => {
    setItemsToShow(INITIAL_LIMIT);
  }, [selectedCategory]);

  return (
    <TechContainer>
      <TextTitle>
        <h2>{textTitle}</h2>
      </TextTitle>
      <ContainerTechWrapper>
        <TechWrapper>
          {techsToShow.map(prod => (
            <motion.div 
              key={prod.id} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Tech {...prod} />
            </motion.div>
          ))}
        </TechWrapper>
      </ContainerTechWrapper>
      <ButtonContainerPagination>
        <ButtonPagination 
          text="Ver más" 
          onClick={showMoreItems} 
          disabled={itemsToShow >= tech.length} 
        />
        <ButtonPagination 
          text="Ver menos" 
          onClick={showLessItems} 
          disabled={itemsToShow <= INITIAL_LIMIT} 
        />
      </ButtonContainerPagination>
    </TechContainer>
  );
}

export default TechCard;