import { BsFillCartDashFill } from 'react-icons/bs'
import './cartItem.css'
import convertCurrency from '../../utils/convertCurrency'
import { useContext } from 'react'
import AppContext from '../../context/context'
import { CartItemsTypes } from '../../types/cartItemsTypes'

function CartItem({ data }: { data: CartItemsTypes}) {

    const { id, thumbnail, title, price } = data

    const { cartItems, setCartItems } = useContext(AppContext)

    function handleRemoveItem() {
        const updatedCart = cartItems.filter((item) => item.id !== id)
        setCartItems(updatedCart)
        localStorage.setItem('cart-items', JSON.stringify(updatedCart))
    }

    return (
        <div className='cart-item'>
            <img
                src={thumbnail}
                alt="imagem do produto"
                className='cart-item__img'
            />
            <div className='cart-item-content'>
                <h3 className='cart-item__title'>{title}</h3>
                <h3 className='cart-item__price'>{convertCurrency(price)}</h3>
                <button
                    className='buttom__remove-item'
                    onClick={handleRemoveItem}
                >
                    <BsFillCartDashFill />
                </button>
            </div>
        </div>
    )
}

export default CartItem