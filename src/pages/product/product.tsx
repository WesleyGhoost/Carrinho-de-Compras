import { useContext } from 'react'
import './product.css'
import AppContext from '../../context/context'
import { BsFillCartPlusFill } from 'react-icons/bs'

function Product() {

  const { selectedProduct, cartItems, setCartItems, setDisplay } = useContext(AppContext)

  function handleAddCart() {
    if (selectedProduct) {
      const newCartItems = [...cartItems, selectedProduct]
      setCartItems(newCartItems)
      localStorage.setItem('cart-items', JSON.stringify(newCartItems))
    }
  }

  return (
    <div className='product-page' onClick={() => setDisplay('none')}>
      <img
        src={selectedProduct?.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="produto"
        className='product-page__img'
      />
      <div className='product-page_details'>
        <h1>{selectedProduct?.title}</h1>
        <h2>R$ {selectedProduct?.price}</h2>
        <p>Quantidade: {selectedProduct?.available_quantity}</p>
        <p>Condição: {selectedProduct?.condition === 'new' ? 'novo' : 'usado'}</p>
        <button onClick={handleAddCart} className='product-page__add-cart'>
          <BsFillCartPlusFill />
        </button>
      </div>
    </div>
  )
}

export default Product