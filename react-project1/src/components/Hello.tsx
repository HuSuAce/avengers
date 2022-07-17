import React from 'react'

export interface HelloProps {
  compiler: string
  framework: string
}

const Hello = () => (
  <h1>
    {/* Hello from {props.compiler} and {props.framework}! */}
    react-project1 Hello.tsx
  </h1>
)

export default Hello
