import styled, { css } from 'styled-components';

export const Container = styled.input`
  width: 98%;
  margin-bottom:  ${({ theme }) => theme.spacing.medium}px;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.small}px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;