import { ContainerCart } from "./styles";
import Item from "../../assets/item.svg"
import CartValue from "../CartValue"


const Cart = () => {
    return (
        <>
            <ContainerCart>
                <section>
                    <div className="container__tittle">
                        <h1>Carrinho de Compra</h1>
                    </div>
                    <ul>
                        <figure>
                            <img src={Item} alt="Item do Cardápio" />
                        </figure>
                        <div className="container__category">
                            <h2>Hamburguer</h2>
                            <p>Sanduíches</p>
                        </div>
                        <div className="container__button">
                        <button className="button__remove">Remover</button>
                        </div>
                    </ul>
                    <ul>
                        <figure>
                            <img src={Item} alt="Item do Cardápio" />
                        </figure>
                        <div className="container__category">
                            <h2>Hamburguer</h2>
                            <p>Sanduíches</p>
                        </div>
                        <div className="container__button">
                        <button className="button__remove">Remover</button>
                        </div>
                    </ul>
                    <ul>
                        <figure>
                            <img src={Item} alt="Item do Cardápio" />
                        </figure>
                        <div className="container__category">
                            <h2>Hamburguer</h2>
                            <p>Sanduíches</p>
                        </div>
                        <div className="container__button">
                        <button className="button__remove">Remover</button>
                        </div>
                    </ul>
                    <CartValue/>
                </section> 
            </ContainerCart>
        </>
    )
}

export default Cart;