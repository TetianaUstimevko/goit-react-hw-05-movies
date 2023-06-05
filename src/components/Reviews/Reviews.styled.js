import styled from '@emotion/styled';

// export const StyledReviewsList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   align-items: baseline;
// `;

export const StyledReviewItem = styled.ul`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

// export const StyledReviewContainer = styled.div`
//   width: 300px;
// `;

export const StyledReviewAuthorName = styled.li`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const StyledReviewAboutMovie = styled.li`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const StyledReviewPost = styled.p`
  font-size: 16px;
`;

export const NoReviews = styled.p`
  margin-left: 40px;
  color: red;
  font-style: italic;
`;