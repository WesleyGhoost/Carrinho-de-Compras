import { createContext } from "react";
import { ContextTypes } from '../types/contextTypes';

const AppContext = createContext<ContextTypes>({
    products: [],
    setProducts: () => {},
    cartItems: [],
    setCartItems: () => {},
    loading: true,
    setLoading: () => {},
    isCartVisible: false,
    setIsCartVisible: () => {},
    search: '',
    setSearch: () => {},
    selectedProduct: null,
    setSelectedProduct: () => {},
    display: 'none',
    setDisplay: () => {}
})

export default AppContext