import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

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
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage className="custom-image" />
                    <ProductTitle title="Title2" className="text-bold" />
                    <ProductButtons className="custom-bottons" />
                </ProductCard>
                <ProductCard product={product} style={{ background: "#19afdf" }}>
                    <ProductImage style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
                    <ProductTitle style={{ fontWeight: "bold" }} />
                    <ProductButtons style={{ display: 'flex', justifyContent: "end" }} />
                </ProductCard>
            </div>
        </div>
    )
}
