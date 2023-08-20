import './header.css'
import Search from '../search/search'
import CartButton from '../cartButton/cartButton'
import { useContext } from 'react'
import AppContext from '../../context/context'

function Header() {

    const { setDisplay } = useContext(AppContext)

    return (
        <header className='header' onClick={() => setDisplay('none')}>
            <div className='container'>
                <Search />
                <CartButton />
            </div>
        </header>
    )
}

export default Header