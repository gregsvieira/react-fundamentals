import React from "react";
import PropTypes from 'prop-types';


export default function Button(props) {
  const theme = props.theme;

  return (
    <button 
      onClick={props.onClick}
      style={{
        color: theme === 'dark' ? '#f1f1f1' : '#131313',
        background: theme === 'dark' ? '#131313' : '#f1f1f1',
      }}
    >
      {props.children}
    </button>);
}

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}