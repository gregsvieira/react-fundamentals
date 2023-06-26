import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
import { ThemeContext } from './ThemeContext';
export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
    <h1>{props.title}</h1>
    <Button onClick={onToggleTheme}>Change Theme</Button>
      <h2>{props.subtitle}</h2>
        {props.children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: `Lauching App 🚀`,
}