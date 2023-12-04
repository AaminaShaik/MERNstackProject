import React from 'react';
import './ProductList.css';
const Beds = ({ products, addToCart }) => {
  return (
    <div>
      <p className='headder'>BEDS</p>
      <img className='label' src='https://img.freepik.com/free-vector/flat-design-interior-design-facebook-cover_23-2149693811.jpg?w=826&t=st=1701646155~exp=1701646755~hmac=7e3ce67c08625f3eaceadda2834a8a17b4eaca429298ec872e3bb032670d3747'/>
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

export default Beds;