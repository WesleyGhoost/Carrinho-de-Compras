import { useContext, useEffect } from 'react'
import './productCard.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import convertCurrency from '../../utils/convertCurrency'
import AppContext from '../../context/context'
import { ProductsTypes } from '../../types/productsTypes'
import { useNavigate } from 'react-router-dom'

function ProductCard({ data }: { data: ProductsTypes }) {

  const { title, thumbnail, price } = data

  const { cartItems, setCartItems, setSelectedProduct, setDisplay } = useContext(AppContext)

  const navigate = useNavigate()

  const handleSelectedProduct = (product: ProductsTypes): void => {
    setSelectedProduct(product)
    setDisplay('none')
    navigate(`/product/${product.id}`)
  }

  const handleAddCart = () => {
    const newCartItems = [...cartItems, data]
    setCartItems(newCartItems)
    localStorage.setItem('cart-items', JSON.stringify(newCartItems))
  }

  useEffect(() => {
    const getCartItems = localStorage.getItem('cart-items')
    if (getCartItems) {
      const parseCartItems = JSON.parse(getCartItems)
      setCartItems(parseCartItems)
    }
  }, [])

  return (
    <div
      className='product-card'
    >
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="produto"
        className='card__image'
        onClick={() => handleSelectedProduct(data)}
      />
      <div className='card__infos' onClick={() => handleSelectedProduct(data)}>
        <h2 className='card__price'>{convertCurrency(price)}</h2>
        <h2 className='card__title'>{title}</h2>
      </div>
      <button
        onClick={handleAddCart}
        className='card__add-cart'
      >
        <BsFillCartPlusFill />
      </button>
    </div>
  )
}

export default ProductCard