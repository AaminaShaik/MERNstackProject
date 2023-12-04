import React from 'react';
import './ProductList.css';
const Sofa = ({ products, addToCart }) => {
  return (
    <div>
      <p className='headder'>SOFAS</p>
      <img className='label' src='https://img.freepik.com/free-psd/furniture-banner-template-theme_23-2148646139.jpg?w=900&t=st=1701645760~exp=1701646360~hmac=aec046a77f7e7b49b5f4572a813049b3b8dfbb62f4a3e9d04732a224111e8220'/>
      <div className='row'>
        {products.map((e) => (
          <div key={e.id} className='color'>
            <img src={e.url} alt={e.name} height={300} width={350} />
            <p>{e.name}</p>
            <p><s>MRP:{e.MRP}</s></p>
            <p>Sale Price{e.newprice}</p>
            <button className='cart-button' onClick={() => addToCart(e)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sofa;