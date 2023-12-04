import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios'
import './ShoppingCart.css'
const ShoppingCart = ({ cartItems, removeCart, QuantityChange, Total }) => {
  const [isModalOpen, setModal] = useState();

  const open = () => {
    setModal(true);
  };

  const close = () => {
    setModal(false);
  };
  const [name,setName]=useState('')
const [phonenumber,setPhonenumber]=useState('')
const [flatno,setFlatno]=useState('')
const [area,setArea]=useState('')
const [village,setVillage]=useState('')
const [city,setCity]=useState('')
const [district,setDistrict]=useState('')
const [pincode,setPincode]=useState('')
const [state,setState]=useState('')
const HandleRegister= async()=>{
    try{
        const response=await axios.post('http://localhost:3900/add',{name,phonenumber,flatno,area,village,city,district,pincode,state})
        if(response.data){
            alert('address saved successfull your order will get in 6 working days')
        }
    }catch(error){
            alert('register failed',error.message)
    }
}
  return (
    <div>
      <h2 className='headder'>Shopping Cart</h2>
      <table className='table1'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th></th>
            <th>Quantity</th>
            <th></th>
            <th>Price</th>
            <th>Discount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td><img src={item.url} alt={item.name} width={100} height={80}/></td>
              <td>{item.name}</td>
              
              <button className='cart-button'  onClick={() => QuantityChange(item, -1)}>REMOVE</button>  
                <td><h3>{item.amount}</h3></td>
                <button className='cart-button'  onClick={() => QuantityChange(item, 1)}>ADD</button>
              
              <td><span>Sale Price: {(item.amount * item.newprice).toFixed(2)}</span></td>
              <td><span>Disc: {(item.MRP*item.amount - item.newprice*item.amount).toFixed(2)}</span></td>
              <td><button className='cart-button'  onClick={() => removeCart(item.id)}>CLEAR</button></td>
            </tr>
          ))}
        </tbody>
      </table><br/><br/><br/>
            
      <p className='total1'>Total Amount: {Total()}</p><br/>
      <button className='cart-button'  onClick={open}>Buy</button>



      <div>
      

<Modal isOpen={isModalOpen}  contentLabel="Login Page Modal">
  <ModalHeader toggle={close}>SHIPPING DETAILS</ModalHeader>
  <ModalBody>
    <form className="my-form">
      <label>Name:</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
      <br/>
      <label>Phone Number(+91):</label>
      <input type="number" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} required />
      <br/>
      <label>Flat No:</label>
      <input type="text" value={flatno} onChange={(e)=>setFlatno(e.target.value)} required />
      <br/>
      <label>Area:</label>
      <input type="text" value={area} onChange={(e)=>setArea(e.target.value)} required />
      <br/>
      <label>village:</label>
      <input type="text" value={village} onChange={(e)=>setVillage(e.target.value)} required />
      <br/>
      <label>City:</label>
      <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} required />
      <br/>
      <label>District:</label>
      <input type="text" value={district} onChange={(e)=>setDistrict(e.target.value)} required />
      <br/>
      <label>Pin Code:</label>
      <input type="number" value={pincode} onChange={(e)=>setPincode(e.target.value)} required />
      <br/>
      <label>State:</label>
      <input type="text" value={state} onChange={(e)=>setState(e.target.value)} required />
    </form>
  </ModalBody>
  <ModalFooter>
      <button className='btn btn-primary' onClick={HandleRegister}>Submit</button>
    <button className='btn btn-danger' onClick={close}>Close</button>
  </ModalFooter>
</Modal>
</div>
</div>
  );
};

export default ShoppingCart;