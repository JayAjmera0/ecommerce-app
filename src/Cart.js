import React from 'react';
import { postData } from './apiService';

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
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Display the total price */}
      <p>Total: ${calculateTotal().toFixed(2)}</p>
      {/* Add the Place Order button */}
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Cart;
