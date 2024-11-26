import React from 'react';
import {
  SkeletonContainer,
  SkeletonSection,
  SkeletonButton,
  SkeletonButtonContainer,
  SkeletonButtonContainerGap
} from './SkeletonProductStyled';

const SkeletonProduct = () => {
  return (
    <SkeletonContainer>
      <SkeletonSection>
        <SkeletonButtonContainer>  
        <SkeletonButtonContainerGap>
          <SkeletonButton />
          <SkeletonButton />
          <SkeletonButton />
          <SkeletonButton />
        </SkeletonButtonContainerGap>
        </SkeletonButtonContainer>
        <SkeletonButtonContainer>  
        <SkeletonButtonContainerGap>
          <SkeletonButton />
          <SkeletonButton />
          <SkeletonButton />
          <SkeletonButton />
        </SkeletonButtonContainerGap>
        </SkeletonButtonContainer>
        <SkeletonButtonContainer>  
        <SkeletonButtonContainerGap>
          <SkeletonButton />
          <SkeletonButton />
          <SkeletonButton />
          <SkeletonButton />
        </SkeletonButtonContainerGap>
        </SkeletonButtonContainer>
      </SkeletonSection>
    </SkeletonContainer>
  );
};

export default SkeletonProduct;