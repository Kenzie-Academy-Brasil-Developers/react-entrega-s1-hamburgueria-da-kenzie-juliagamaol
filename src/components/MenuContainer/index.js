import Product from '../Product/index'
const MenuContainer = (props) => {
    const{products, handleClick} = props
    return(
        products.map((product)=>{
            return <Product 
                    product={product}
                    handleClick={handleClick}
                    produto={product}/>
        })
    )
    
};

export default MenuContainer;
