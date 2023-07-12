import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 24px;
  background: #333;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;

  h2 {
    margin: 0 0 8px;
  }

  small {
    opacity: 0.7;
  }

  & + article {
    margin-top: 8px;
  }

  ${({ removed }) => css`
    opacity: ${removed ? 0.5 : 1};
    color: ${removed ? '#7d7d7d' : '#ebe6e6'};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`