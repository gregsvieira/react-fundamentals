import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 16px 0px;
  border: none;
  border-radius: 4px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 3px;
  color: #222;
  cursor: pointer;
  transition: .2s;
  background-color: #483379;
  color: white;
  margin-top:  ${({ theme }) => theme.spacing.large}px;
`