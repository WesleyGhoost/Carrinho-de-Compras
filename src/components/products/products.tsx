import { useContext, useEffect } from 'react'
import './products.css'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../productCard/productCard'
import Loading from '../loading/loading'
import AppContext from '../../context/context'

function Products() {

    const { search, products, setProducts, loading, setLoading } = useContext(AppContext)

    useEffect(() => {
        fetchProducts(search ? search : 'iphone')
            .then((response) => {
                setProducts(response)
                setLoading(false)
            })
    }, [])

    return (
        <section className='products'>
            {loading ? <Loading /> : products.map((product) => <ProductCard key={product.id} data={product}/>)}
        </section>
    )
}

export default Products