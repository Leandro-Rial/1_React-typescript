import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

const product = {
    id: "1",
    title: "Title",
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping page</h1>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title="Title2" />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
