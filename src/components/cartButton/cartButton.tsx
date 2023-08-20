import { useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import './cartButton.css'
import AppContext from '../../context/context'

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

  return (
    <button
      type='button'
      className='cart-button'
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <BsCart />
      {cartItems.length > 0 && <span className='cart-button__status'>{cartItems.length}</span>}
    </button>
  )
}

export default CartButton