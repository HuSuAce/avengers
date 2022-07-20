import {observer} from 'mobx-react-lite'
import incStore from './store/incStore'
const PortalStoreComp = observer(() => {
  return (
    <>
      <p>{incStore.num}</p>
      <pre>{incStore.code}</pre>
      <button
        onClick={() => {
          incStore.inc()
          incStore.loadData()
        }}
      >
        +1(project button)
      </button>
    </>
  )
})
export default PortalStoreComp
