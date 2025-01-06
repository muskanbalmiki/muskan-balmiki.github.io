import React,{useState} from 'react'
import './ProductsList.css';
import { useApi } from '../hooks/useApi';
import loadingGif from '../components/assets/loading.gif';
import { Link } from 'react-router-dom';

export default function ProductsList() {

    // const[products,setProducts]= useState([]);
    const [url,setUrl] =useState("http://localhost:3000/products");
    
    const {data : products , loading, error} = useApi(url);
    
    
  return (
    <div className="product-list">
       <h3> Product List</h3>
       <div className='filter-btns'>
        <button onClick={() => setUrl("http://localhost:3000/products")}>All</button>
        <button onClick={() => setUrl("http://localhost:3000/products?category=smartphones")}>Smart Phones</button>
        <button onClick={() => setUrl("http://localhost:3000/products?category=laptops")}>Laptops</button>
        <button onClick={() => setUrl("http://localhost:3000/products?category=fragrances")}>Perfumes</button>
        <button onClick={() => setUrl("http://localhost:3000/products?category=skincare")}>Skin Care</button>
        <button onClick={() => setUrl("http://localhost:3000/products?category=groceries")}>Groceries</button>
        <button onClick={() => setUrl("http://localhost:3000/products?category=home-decoration")}>Home Decore</button>
       </div>
       <div>{loading && <img src={loadingGif} alt="Loading..." />}
       {error}
       
        
       </div>
       <ul>
        {products && products.map(product => (
            <li key={product.id}>
              {/* <Link to={`/product/${product.id}`}></Link> */}
                <strong>{product.title}</strong>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <Link to={`/products/${product.id}`}>Read More... </Link>

            </li>
        ))}
       </ul>
    </div>

  )
}
