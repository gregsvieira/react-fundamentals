import React, { Component } from 'react';
import { Container } from './styles'

export default class FieldText extends Component {
  render() {
    const { fieldName, fieldType } = this.props;
    
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
}

// export default function FieldText({ fieldName, fieldType}) {
//   return (
//     <> 
//     <label>{fieldName}</label>
//       <Container 
//         type={fieldType} 
//         placeholder={fieldName} 
//       />
//     </>     
//   );
// }
