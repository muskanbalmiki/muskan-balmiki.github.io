import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useApi } from '../hooks/useApi';

export default function ProductDetails() {
    const params = useParams();
    console.log(params);

    const {data:product, loading, error} = useApi(`http://localhost:3000/products/${params.prodId}`);
    const navigate = useNavigate();

  return (
    <div>
        {product && (<>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>$ {product.price}</strong></p></>)}

      <button onClick={() => { setTimeout( () => {navigate('/products')},2000)
      }}>Go Back</button>
      {loading && 'Loading'}
      {error && 'Error'}
    </div>
  )
}
