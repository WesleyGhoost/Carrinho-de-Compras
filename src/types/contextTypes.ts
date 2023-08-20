import { CartItemsTypes } from "./cartItemsTypes"
import { ProductsTypes } from "./productsTypes"

export type ContextTypes = {
    products: ProductsTypes[],
    setProducts: React.Dispatch<React.SetStateAction<ProductsTypes[]>>,
    cartItems: CartItemsTypes[],
    setCartItems: React.Dispatch<React.SetStateAction<CartItemsTypes[]>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    isCartVisible: boolean,
    setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
    selectedProduct: ProductsTypes | null,
    setSelectedProduct: React.Dispatch<React.SetStateAction<ProductsTypes | null>>
    display: string,
    setDisplay: React.Dispatch<React.SetStateAction<string>>
}