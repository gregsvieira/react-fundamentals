import React, { Component } from 'react';
import { Container } from './styles'

import PropTypes from 'prop-types';


export default class FieldText extends Component {
  static propTypes = {
    fieldName: PropTypes.string.isRequired, 
    fieldType: PropTypes.string.isRequired,
  }

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