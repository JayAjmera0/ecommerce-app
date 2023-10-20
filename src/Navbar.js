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
          <li><Link to="https://new-auth.auth.ap-south-1.amazoncognito.com/oauth2/authorize?client_id=6a2p232kd6k0eeegns2ve9e6lm&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmaster.d1wea5u9my7fnf.amplifyapp.com%2F">Login</Link></li> // Provide a login link if not authenticated
        )}
      </ul>
    </nav>
  );
}

export default Navbar;