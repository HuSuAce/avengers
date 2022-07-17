import HostApp from '@microHost/App'
import StoreComp from './StoreComp'

const App = () => {
  return (
    <>
      <div>
        <HostApp />
      </div>
      <div>---------------------divide---------------------</div>
      <div>
        <h1>Micro app1</h1>
        <StoreComp />
      </div>
    </>
  )
}
export default App
