import { Container } from "./styles";


const CartValue = () => {
    return (
        <>
            <Container>
                
                    <article>
                        <p className="border">
                        </p>
                        <div className="container__total">
                            <p className="container__title">Total</p>
                            <p className="container__price">R$ 40.00</p>
                        </div>
                        <div>
                            <button>Remover Todos</button>
                        </div>
                    </article>
                
            </Container>
        </>
    )
}

export default CartValue;