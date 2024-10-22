import styled from 'styled-components';

export const SkeletonContainer = styled.div`
  display: flex;
  margin-top: 6rem;
  padding: 0.75rem;
  flex-direction: column;
  min-height: 65vh;
  max-width: 100vw;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-start;
  justify-content: center;
  text-align: left;

  @media (min-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const SkeletonSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const SkeletonItem = styled.div`
  background-color: #8080804f;
  border-radius: 0.25rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SkeletonButtonContainer = styled.div`
  display: flex;
  gap: 2px;
  justify-content: flex-start;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const SkeletonButton = styled(SkeletonItem)`
  margin-bottom: 0;
`;

export const SkeletonLargeBlock = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 12rem;
  background-color: #8080804f;
  border-radius: 0.25rem;
`;