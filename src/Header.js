import React from "react";

export default function Header({title, subtitle, children}) {
  return (
    <>
    <h1>{title}</h1>
      <h2>{subtitle}</h2>
        {children}
    </>
  )
}