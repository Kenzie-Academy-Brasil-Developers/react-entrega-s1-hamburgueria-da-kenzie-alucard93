
const Product = ({item, handleClick}) => {
    return (
        <>
            
            <section className="container__product">
                <figure className="container__figure">
                    <img className="container__figure--img" src={item.img} alt={item.name} />
                </figure>
                <div className="container__description">
                    <h3 className="container__description--tittle" > {item.name} </h3>
                    <p className="container__description--category"> {item.category} </p>
                    <p className="container__description--price">R$ {item.price} </p>
                    <button onClick={() => handleClick(item.id)} className="container__description--button"> Adicionar </button>
                </div>
            </section>
            
            
        </>
    )
}

export default Product;