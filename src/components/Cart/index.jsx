import { ContainerCart } from "./styles";
import CartValue from "../CartValue"


const Cart = ({currentSale, setCurrentSale, removeProduct}) => {

    return (
        <>
            <ContainerCart>
                <section>
                    <div className="container__tittle">
                        <h1>Carrinho de Compra</h1>
                    </div>

                    
                    {currentSale.map((product) => (
                    <ul>
                        <figure>
                            <img 
                                src={product.img} 
                                alt={product.name}
                                />
                        </figure>
                        <div className="container__category">
                            <h2>{product.name}</h2>
                            <p>{product.category}</p>
                        </div>
                        <div className="container__button">
                        <button onClick={() => removeProduct(product.id)} className="button__remove">Remover</button>
                        </div>
                    </ul>
                    ))}

                    <CartValue 
                        currentSale={currentSale} 
                        setCurrentSale={setCurrentSale}
                        />

                </section> 
            </ContainerCart>
        </>
    )
}

export default Cart;