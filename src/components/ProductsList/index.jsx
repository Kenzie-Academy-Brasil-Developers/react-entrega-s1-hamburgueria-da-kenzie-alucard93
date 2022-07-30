import { ContainerProduct } from "./styles";
import Product from "../Product";
const ProductList = ({products, handleClick}) => {
    return (
        <>
        <ContainerProduct>
        
        {
            products.map((product) => (
                <Product 
                    key={product.id} 
                    item={product}
                    handleClick={handleClick}
                    />
            ))
        }
        </ContainerProduct>
        </>
    )
}

export default ProductList;