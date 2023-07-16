import React from 'react';
import FieldList from './FieldList'
import Button from './Button'

import { Container } from './styles'

export default function Form() {
  return (
    <>
      <Container>
        <FieldList />
        <Button>
          Take note
        </Button>
      </Container>
    </>
  );
}