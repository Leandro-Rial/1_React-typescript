import { createContext } from 'react'

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces'

import { useProducts } from '../hooks/useProducts'

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProducts()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>{children}</div>
        </Provider>
    )
}