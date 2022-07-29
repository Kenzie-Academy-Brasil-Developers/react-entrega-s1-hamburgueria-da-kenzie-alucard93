import { Container } from "./styles";

const CardEmpty = () => {
    return (
        <>
            <Container>
                <section>
                    <div className="container__tittle">
                        <h1>Carrinho de Compra</h1>
                    </div>
                    <div className="container__empty">
                        <h4>Sua sacola está vazia</h4>
                        <p>Adicione itens</p>
                    </div>
                </section>
            </Container>
        </>
    )
}
export default CardEmpty;