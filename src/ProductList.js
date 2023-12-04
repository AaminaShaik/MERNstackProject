import React from 'react';
import './ProductList.css';
const Chairs = ({ products, addToCart }) => {
  return (
    <div>
      <p className='headder'>CHAIRS</p>
      <img className='label' src='https://img.freepik.com/free-vector/gradient-furniture-sale-banner-template_23-2148919731.jpg?w=826&t=st=1701544524~exp=1701545124~hmac=1e95a9d3bd2dc4117430ad8c52d22e72dd33914d8b3ec13cc8b6755d07a4b9df'/>
      <div className='row'>
        {products.map((e) => (
          <div key={e.id} className='color'>
            <img src={e.url} alt={e.name} height={300} width={350} />
            <p>{e.name}</p>
            <p><s>MRP:{e.MRP}</s></p>
            <p>Sale Price:{e.newprice}</p>
            <button className='cart-button'  onClick={() => addToCart(e)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chairs;