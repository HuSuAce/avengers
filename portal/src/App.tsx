import StoreComp from '@microHost/StoreComp'
import BaseApp from '@microHost/App'
import PortalStoreComp from './StoreComp'

const App = () => {
  return (
    <>
      <div>
        <div>
          <h1>portal</h1>
          <PortalStoreComp />  
        </div>
        <div style={{marginLeft: '100px'}}>
          <div>
            <h1>get MFE App in project1</h1>
            <BaseApp />
          </div>
          <div>
            <h1>get MFE StoreComponent in project1</h1>
            <StoreComp />
          </div>
        </div>
      </div>
    </>
  )
}
export default App
