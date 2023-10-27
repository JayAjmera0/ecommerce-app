import React from 'react';

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    // Logic for placing the order (you can implement this based on your requirements)
    console.log("Order placed!");
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
      <p>Total: ${totalPrice}</p>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}

export default Cart;
