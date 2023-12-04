import React from 'react';
import './ProductList.css';
const Tables = ({ products, addToCart }) => {
  return (
    <div>
      <p className='headder'>TABLES</p>
      <img className='label' src='https://img.freepik.com/free-psd/furniture-concept-banner-template_23-2148702177.jpg?w=900&t=st=1701645906~exp=1701646506~hmac=a074e06a1ebd1db119167028df0435f1b489f32a8b7baae2e76e702754a0f2b3'/>
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

export default Tables;