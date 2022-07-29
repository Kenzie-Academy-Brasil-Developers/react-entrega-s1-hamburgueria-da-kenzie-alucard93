import { ContainerProduct } from "./styles";
import BUGAO from "../../assets/BUGAO.svg"

const Product = () => {
    return (
        <>
            <ContainerProduct>
            <section className="container__product">
                <figure className="container__figure">
                    <img className="container__figure--img"  src={BUGAO} alt="foto Hamburguer" />
                </figure>
                <div className="container__description">
                    <h3 className="container__description--tittle" > Hamburguer </h3>
                    <p className="container__description--category"> Sanduíches </p>
                    <p className="container__description--price"> R$ 14.00 </p>
                    <button className="container__description--button"> Adicionar </button>
                </div>
            </section>
            <section className="container__product">
                <figure className="container__figure">
                    <img className="container__figure--img"  src={BUGAO} alt="foto Hamburguer" />
                </figure>
                <div className="container__description">
                    <h3 className="container__description--tittle" > Hamburguer </h3>
                    <p className="container__description--category"> Sanduíches </p>
                    <p className="container__description--price"> R$ 14.00 </p>
                    <button className="container__description--button"> Adicionar </button>
                </div>
            </section>
            <section className="container__product">
                <figure className="container__figure">
                    <img className="container__figure--img"  src={BUGAO} alt="foto Hamburguer" />
                </figure>
                <div className="container__description">
                    <h3 className="container__description--tittle" > Hamburguer </h3>
                    <p className="container__description--category"> Sanduíches </p>
                    <p className="container__description--price"> R$ 14.00 </p>
                    <button className="container__description--button"> Adicionar </button>
                </div>
            </section>
            <section className="container__product">
                <figure className="container__figure">
                    <img className="container__figure--img"  src={BUGAO} alt="foto Hamburguer" />
                </figure>
                <div className="container__description">
                    <h3 className="container__description--tittle" > Hamburguer </h3>
                    <p className="container__description--category"> Sanduíches </p>
                    <p className="container__description--price"> R$ 14.00 </p>
                    <button className="container__description--button"> Adicionar </button>
                </div>
            </section>
            <section className="container__product">
                <figure className="container__figure">
                    <img className="container__figure--img"  src={BUGAO} alt="foto Hamburguer" />
                </figure>
                <div className="container__description">
                    <h3 className="container__description--tittle" > Hamburguer </h3>
                    <p className="container__description--category"> Sanduíches </p>
                    <p className="container__description--price"> R$ 14.00 </p>
                    <button className="container__description--button"> Adicionar </button>
                </div>
            </section>
            <section className="container__product">
                <figure className="container__figure">
                    <img className="container__figure--img"  src={BUGAO} alt="foto Hamburguer" />
                </figure>
                <div className="container__description">
                    <h3 className="container__description--tittle" > Hamburguer </h3>
                    <p className="container__description--category"> Sanduíches </p>
                    <p className="container__description--price"> R$ 14.00 </p>
                    <button className="container__description--button"> Adicionar </button>
                </div>
            </section>
            </ContainerProduct>
        </>
    )
}

export default Product;