import React from 'react';
import { Container } from './styles';


export default function Button({children}) {
  return(
    <>
    <Container>
      {children}
    </Container>
    </>
  )
}