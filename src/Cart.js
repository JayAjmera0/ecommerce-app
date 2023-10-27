import React from 'react';
import { postData } from './apiService';
import './cart.css';

function Cart({ cart, removeFromCart }) {

  // Calculate the total price of the items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Function to handle placing the order
  // Function to handle placing the order
const placeOrder = async () => {  // Made it asynchronous
  // Calculate the total price
  const totalPrice = calculateTotal();

  // Create an array with the cart items
  const items = cart.map(item => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity
  }));

  // Loop through each item and send it to the API
  for (const item of items) {
    try {
      const response = await postData(item);  // Assuming postData returns some response
      console.log(`API Response for item ${item.id}:`, response);
    } catch (error) {
      console.error(`Failed to post item ${item.id}:`, error);
    }
  }

  // Log the items to the console
  console.log("Placing order:", JSON.stringify(items, null, 2));
};

return (
  <div className="cart-container">
    <h1 className="cart-title">Your Shopping Cart</h1>
    <ul className="cart-list">
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <li className="cart-item" key={item.id}>
            <span className="item-name">{item.name}</span>
            <span className="item-price">Price: Rs{item.price}</span>
            <span className="item-quantity">Quantity: {item.quantity}</span>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>
              <i className="fas fa-trash-alt"></i> Remove
            </button>
          </li>
        ))
      )}
    </ul>
    <p className="cart-total">Total: <span className="total-price">Rs{calculateTotal().toFixed(2)}</span></p>
    <button className="place-order-button" onClick={placeOrder}>
      <i className="fas fa-shopping-bag"></i> Place Order
    </button>
  </div>
);

      }
export default Cart;
