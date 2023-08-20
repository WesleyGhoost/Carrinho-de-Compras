import { useState } from 'react'
import { ReactNode } from 'react';
import AppContext from './context';
import { ContextTypes } from '../types/contextTypes';
import { ProductsTypes } from '../types/productsTypes';

function Provider({ children }: { children: ReactNode }) {

    const [products, setProducts] = useState<ContextTypes['products']>([])
    const [cartItems, setCartItems] = useState<ContextTypes['cartItems']>([])
    const [loading, setLoading] = useState<ContextTypes['loading']>(true)
    const [isCartVisible, setIsCartVisible] = useState<ContextTypes['isCartVisible']>(false)
    const [search, setSearch] = useState<ContextTypes['search']>('')
    const [selectedProduct, setSelectedProduct] = useState<ProductsTypes | null>(null)
    const [display, setDisplay] = useState<ContextTypes['display']>('none')

    const propsValues: ContextTypes = {
        products,
        setProducts,
        cartItems,
        setCartItems,
        loading,
        setLoading,
        isCartVisible,
        setIsCartVisible,
        search,
        setSearch,
        selectedProduct,
        setSelectedProduct,
        display,
        setDisplay
    }

    return (
        <AppContext.Provider value={propsValues}>
            { children }
        </AppContext.Provider>
    )
}

export default Provider