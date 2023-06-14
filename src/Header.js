import React from "react";
import PropTypes from 'prop-types';

export default function Header({title, subtitle, children}) {
  return (
    <>
    <h1>{title}</h1>
      <h2>{subtitle}</h2>
        {children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
}