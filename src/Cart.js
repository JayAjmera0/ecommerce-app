import React from 'react';

function Cart({ cart, removeFromCart }) {

  // Calculate the total price of the items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Function to handle placing the order
  const placeOrder = () => {
    // Calculate the total price
    const totalPrice = calculateTotal();

    // Create a JSON object with the cart items and total price
    const order = {
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: totalPrice
    };

    // Convert the order object to a JSON string and log it
    console.log("Placing order:", JSON.stringify(order, null, 2));
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
