import React from 'react';
import { Container } from './styles';

import FieldText from './FieldText';


export default function FieldList() {
  return (
    <>
      <Container>
        <FieldText 
          fieldName='Task Name' fieldType='string' />
        <FieldText 
          fieldName='Task Id' fieldType='number' />
        <FieldText 
          fieldName='Description' fieldType='string' />
      </Container>
    </>
  );
}