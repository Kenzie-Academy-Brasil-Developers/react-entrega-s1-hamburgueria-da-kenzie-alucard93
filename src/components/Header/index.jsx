import Logo from "../../assets/Logo.svg"
import { Container } from "./styles";


const Header = ({ setInput, showProducts, valorInput }) => {
    

    return (
        <>
        <Container>
                <header>
                    <section className="container__header">
                        <div className={"container__img"}>
                            <img src={Logo} alt="Logo Burgue Kenzie" />
                        </div>
                        <div className="container__button">
                            <input 
                                type="text" 
                                placeholder="Digitar Pesquisa"
                                onChange={(e) => {
                                    setInput(e.target.value);
                                    showProducts(valorInput);
                                }}
                                />
                            <button onClick={() => showProducts(valorInput)} >Pesquisar</button>
                        </div>
                    </section>
                </header>
            
        </Container>
        </>
    )
}
export default Header;