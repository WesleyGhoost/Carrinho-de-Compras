import { useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import './search.css'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/context'
import Suggestions from '../suggestions/suggestions'
import { useNavigate } from 'react-router-dom'

function Search() {

    const { setProducts, setLoading, search, setSearch, setDisplay } = useContext(AppContext)

    const navigate = useNavigate()

    const handleChange = async (e: any) => {
        const updatedSearch = e.target.value
        setSearch(updatedSearch)

        const products = await fetchProducts(search)
        setProducts(products)

        if (search.length >= 0) {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        setLoading(true)
        setDisplay('none')
        navigate('/')

        const products = await fetchProducts(search)
        setProducts(products)
        setLoading(false)
    }

    return (
        <div>
            <form className='search' onSubmit={handleSubmit}>
                <input
                    type='search'
                    className='search__input'
                    placeholder='Buscar produtos'
                    required
                    value={search}
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='search__button'
                >
                    <BsSearch />
                </button>
            </form>
            <Suggestions />
        </div>
    )
}

export default Search