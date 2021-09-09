const Product = (props) => {
   const{product:{name,category, price}, handleClick,produto} = props
   
    return(
        <div className="Produtos">
            <h3>{name}</h3>
            <p>Categoria: {category}</p>
            <span className="preco">Preço: {price}</span>
            <button className="btn" onClick={()=>handleClick(produto.id)}>Adicionar</button>
        </div>
    )
};

export default Product;
