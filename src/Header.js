import React from "react";

export default function Header(props) {
  return (
    <>
    <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>
        {props.children}
      </h3>
    </>
  )
}