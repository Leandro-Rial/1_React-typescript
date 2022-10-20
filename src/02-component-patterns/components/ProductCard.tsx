import { createContext, CSSProperties, ReactElement } from 'react'

import { ProductContextProps, Product } from '../interfaces/interfaces'

import { useProducts } from '../hooks/useProducts'

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProducts()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>{children}</div>
        </Provider>
    )
}