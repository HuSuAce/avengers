import React from 'react'
import {Button} from 'src/Button'
import StoreComp from './StoreComp'
import incStore from './store/incStore'
// export {Button, StoreComp, incStore}
const App = () => {
  return (
    <>
      <h1>Base1</h1>
      <StoreComp />
    </>
  )
}
export default App
