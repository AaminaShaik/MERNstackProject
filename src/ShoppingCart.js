import React from 'react';

const ShoppingCart = ({ cartItems, removeCart, QuantityChange, Total }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <table className='table table w-100 h-40'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td><img src={item.url} alt={item.name} width={80} /></td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => QuantityChange(item, 1)}>+</button>
                {item.amount}
                <button onClick={() => QuantityChange(item, -1)}>-</button>
              </td>
              <td><span>${(item.amount * item.newprice).toFixed(2)}</span></td>
              <td><button onClick={() => removeCart(item.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Total: ${Total()}</p>
    </div>
  );
};

export default ShoppingCart;