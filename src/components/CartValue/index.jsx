import { Container } from "./styles";


const CartValue = ({ currentSale, setCurrentSale }) => {

    return (
        <>
            <Container>
                
                    <article>
                        <p className="border">
                        </p>
                        <div className="container__total">
                            <p className="container__title">Total</p>
                            <p className="container__price"> {currentSale.reduce((acc, value) => acc + value.price, 0).toFixed(2) } </p>
                        </div>
                        <div>
                            <button
                            onClick={() => setCurrentSale([]) } 
                            > Remover Todos
                            </button>
                        </div>
                    </article>
                
            </Container>
        </>
    )
}

export default CartValue;