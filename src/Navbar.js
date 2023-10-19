import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './Navbar.css';


function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser(); // Check user authentication status when the component mounts
  }, []);

  const checkUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      console.log('User Info:', userData); // Log user data to the console
      setUser(userData); // Set user data to state if the user is authenticated
    } catch (err) {
      console.log('Error getting user info:', err); // Log error if there is an issue retrieving user info
      setUser(null); // Set user to null if there is no authenticated user
    }
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {user ? (
          <li>Welcome, {user.attributes.email}</li> // Display user email if authenticated
        ) : (
          <li><Link to="/login">Login</Link></li> // Provide a login link if not authenticated
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
