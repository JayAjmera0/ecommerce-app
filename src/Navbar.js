import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify'; // Import Auth from AWS Amplify
import './Navbar.css'; // Import your CSS file

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser(); // Check user authentication status when the component mounts
  }, []);

  const checkUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData); // Set user data to state if the user is authenticated
    } catch (err) {
      setUser(null); // Set user to null if there is no authenticated user
    }
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {user ? (
          <li>{user.attributes.email}</li> // Display user email if authenticated
        ) : (
          <li><Link to="/login">Login</Link></li> // Provide a login link if not authenticated
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
