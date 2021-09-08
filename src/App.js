import './App.css';
import {useState} from 'react'
import MenuContainer from './components/MenuContainer';
let arr = []
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]); 


  const [currentSale, setCurrentSale] = useState([])
  
  const[valorInput, setValorInput] = useState('')
  const showProducts = () =>{
     setProducts(products.filter((products)=>(products.name === valorInput)))
  }

  
  const handleClick = (productId) =>{
      
      return products.map((product) => {
          if(product.id === productId){
            if(!currentSale.includes(product)){
              arr.push(product.price)
              
              setCurrentSale([...currentSale,product])
              
              
            }
          }
      })
  }
  return (
    <div className="App">
      <div className="input">
        <input type="text" onChange={(event)=>setValorInput(event.target.value)}/>
        <button onClick={showProducts}>Pesquisar</button>
      </div>
      <h1>Hamburgueria</h1>
      <header className="App-header">
        <MenuContainer 
        products={products}
        handleClick={handleClick}/>
      </header>
      <div>
        <span>Subtotal: {arr.reduce((acc,atual)=>acc+atual,0).toFixed(2)}</span>
        <div className="Qualquer">
          {currentSale.map((item)=>{
            return (
              <div className="Produtos">
                <h3>{item.name}</h3>
                <p>Categoria: {item.category}</p>
                <span className="preco">Preço: {item.price}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
