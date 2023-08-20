import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import './loading.css'

function Loading() {
  return (
    <div className='container-loading'>
        <AiOutlineLoading3Quarters className="loading" />
    </div>
  )
}

export default Loading