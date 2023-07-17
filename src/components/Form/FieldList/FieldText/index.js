import React from 'react';
import { Container } from './styles'

export default function FieldText({ fieldName, fieldType}) {
  return (
    <> 
    <label>{fieldName}</label>
      <Container 
        type={fieldType} 
        placeholder={fieldName} 
      />
    </>     
  );
}