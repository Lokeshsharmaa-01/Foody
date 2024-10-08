import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext'
const Placeorder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="phone" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charges</p>
              <p>{getTotalCartAmount() === 0?0:50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {getTotalCartAmount()===0?0: getTotalCartAmount() + 50}</b>
            </div>
            </div>
              <button >Proceed To Payment</button>
          </div>
          </div>
      </div>
    </form>
  )
}


export default Placeorder