import StoreComp from '@microHost/StoreComp'
import BaseApp from '@microHost/App'
import ProjectStoreComp from './StoreComp'

const App = () => {
  return (
    <>
      <div>
        <div>
          <h1>Project1</h1>
          <ProjectStoreComp />  
        </div>
        <div>
          <BaseApp />
        </div>
        <div>
          <h1>get base1 in project1</h1>
          <StoreComp />
        </div>
      </div>
    </>
  )
}
export default App
