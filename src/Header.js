import React from "react";

export default function Header({title, subtitle, info}) {
  return (
    <>
    <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>
        {info}
      </h3>
    </>
  )
}