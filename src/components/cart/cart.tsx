import { useContext } from 'react'
import './cart.css'
import CartItem from '../cartItem/cartItem'
import AppContext from '../../context/context'
import convertCurrency from '../../utils/convertCurrency'

function Cart() {

  const { cartItems, isCartVisible, setDisplay } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)

  return (
    <section
      className={`cart ${isCartVisible ? 'cart--active' : ''}`}
      onClick={() => setDisplay('none')}
    >
      <div className='cart-items'>
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
      </div>
      <div className='cart-resume'>{convertCurrency(totalPrice)}</div>
    </section>
  )
}

export default Cart