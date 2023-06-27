import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';


export default function Button(props) {
  const { theme } = useContext(ThemeContext);

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
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}