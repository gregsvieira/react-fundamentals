import styled from 'styled-components';

export const Container = styled.form`
  background: ${({ theme }) => theme.postBackgroundColor};
  margin-bottom:  ${({ theme }) => theme.spacing.large}px;
  margin-top: ${({ theme }) => theme.spacing.large}px;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.medium}px;
  border-radius: ${({ theme }) => theme.borderRadius};

  h2 {
    margin: 0 0 8px;
  }

  small {
    opacity: 0.7;
  }

  & + article {
    margin-top: 8px;
  }
`;
