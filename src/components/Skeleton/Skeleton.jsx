import React from 'react';
import {
  SkeletonContainer,
  SkeletonSection,
  SkeletonItem,
  SkeletonButton,
  SkeletonButtonContainer,
  SkeletonLargeBlock,
} from './SkeletonStyled';

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonSection>
        <SkeletonItem width="25%" height="8px" />
        <SkeletonSection>
          <SkeletonItem width="75%" height="12px" />
          <SkeletonItem width="50%" height="4px" />
          <SkeletonItem width="100%" height="4px" />
          <SkeletonItem width="83%" height="4px" />
          <SkeletonButtonContainer>
            <SkeletonButton width="15%" height="10px" />
            <SkeletonButton width="15%" height="10px" />
          </SkeletonButtonContainer>
        </SkeletonSection>
      </SkeletonSection>
      <SkeletonLargeBlock />
    </SkeletonContainer>
  );
};

export default Skeleton;