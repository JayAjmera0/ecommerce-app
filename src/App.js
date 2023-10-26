import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import { UserProvider } from './UserContext'; // Import the UserProvider from UserContext.js
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); // State to manage user information

 
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);
  
    if (existingProduct) {
      // If the product exists in the cart, update its quantity
      const updatedCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const login = (email) => {
    setUser({ email }); // Set user info when user is authenticated
  };

  const logout = () => {
    setUser(null); // Clear user info when user logs out
  };

  return (
    <Router>
      <UserProvider> {/* Wrap the app with UserProvider */}
        <div className="App">
          <Navbar cartSize={cart.length} />
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
