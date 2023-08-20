import Cart from "../../components/cart/cart"
import Products from '../../components/products/products'
import AppContext from "../../context/context"
import './home.css'
import { useContext } from 'react'

function Home() {

  const { setDisplay } = useContext(AppContext)
  
  return (
    <div className="home" onClick={() => setDisplay('none')}>
        <Products />
        <Cart />
    </div>
  )
}

export default Home