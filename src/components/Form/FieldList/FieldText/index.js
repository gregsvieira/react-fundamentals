import React from 'react';
import { Container } from './styles'

export default function FieldText({ fieldName, fieldType}) {
  return (
    <>
      <Container />
      <input 
        type={fieldType} 
        placeholder={fieldName} 
      />
    </>     
  );
}