import { useContext } from "react"
import AppContext from "../../context/context"
import './suggestions.css'
import { useNavigate } from "react-router-dom"
import { ProductsTypes } from "../../types/productsTypes"

function Suggestions() {

    const { search, products, setSelectedProduct, display, setDisplay } = useContext(AppContext)

    const navigate = useNavigate()

    const handleSelectedProduct = (product: ProductsTypes) => {
        setSelectedProduct(product)
        setDisplay('none')
        navigate(`/product/${product.id}`)
    }

    const searchLowerCase = search.toLowerCase()
    const suggestionProducts = products.filter((product) => product.title.toLowerCase().includes(searchLowerCase))

    if(suggestionProducts.length === 0) {
        setDisplay('none')
    }
    
    return (
        <ul
            className='suggestions'
            style={{ display: `${display}` }}
        >
            {suggestionProducts.map((product) => (
                <li
                    key={product.id}
                    onClick={() => handleSelectedProduct(product)}
                    className='suggestions-items'
                >
                    {product.title}
                </li>
            ))}
        </ul>
    )
}

export default Suggestions