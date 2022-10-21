import { products } from '../data/products'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

export const ShoppingPage = () => {
    const product = products[0]

    return (
        <div>
            <h1>Shopping page</h1>
            <ProductCard
                product={product}
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
                key={product.id}
            >
                {
                    ({
                        count,
                        maxCount,
                        isMaxCountReached,
                        increaseBy,
                        reset
                    }) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-bottons" />
                            <button onClick={() => reset()}>reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            {
                                !isMaxCountReached
                                && <button onClick={() => increaseBy(2)}>+2</button>
                            }
                            <span>{count} - {maxCount}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
