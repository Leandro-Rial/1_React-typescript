import { products } from '../data/products'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'

export const ShoppingPage = () => {
    const { shoppingCart, onProductCartChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping page</h1>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                { 
                    products.map(product => (
                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            onChange={(e) => onProductCartChange(e)}
                            value={shoppingCart[product.id]?.count || 0}
                            key={product.id}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-bottons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-card">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={(e) => onProductCartChange(e)}
                            value={product.count}
                            key={key}
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons className="custom-bottons" style={{ display: 'flex', justifyContent: 'center' }} />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
