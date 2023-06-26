import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

export default function Header(props) {
  return (
    <>
    <h1>{props.title}</h1>
    <Button theme={props.theme} onClick={props.onToggleTheme}>Change Theme</Button>
      <h2>{props.subtitle}</h2>
        {props.children}
    </>
  )
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: `Lauching App 🚀`,
}