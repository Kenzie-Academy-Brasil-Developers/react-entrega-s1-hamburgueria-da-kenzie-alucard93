import Logo from "../../assets/Logo.svg"
import { Container } from "./styles";

const Header = () => {
    return (
        <>
        <Container>
                <header>
                    <div className={"container__img"}>
                        <img src={Logo} alt="Logo Burgue Kenzie" />
                    </div>
                    <div className="container__button">
                        <input 
                            type="text" 
                            placeholder="Digitar Pesquisa"
                            />
                        <button>Pesquisar</button>
                    </div>
                </header>
            
        </Container>
        </>
    )
}
export default Header;