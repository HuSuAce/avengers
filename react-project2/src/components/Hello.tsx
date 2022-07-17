import React from 'react'

export interface HelloProps {
  compiler: string
  framework: string
}

const Hello = (props: HelloProps) => (
  <h1>
    react-project2 Hello.tsx
  </h1>
)

export default Hello
