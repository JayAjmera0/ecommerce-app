import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './UserContext'; // Import the useUser hook
import './Navbar.css'; // Import your CSS file

function Navbar() {
  const { user, logout } = useUser();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {user ? (
          <li>
            <span>{user.email}</span>
            <button onClick={logout}>Logout</button>
          </li>
        ) : (
          <li><Link to="https://authorize-wearhouse.auth.ap-south-1.amazoncognito.com/oauth2/authorize?client_id=5bj5dteg80a5rjvnpske2sun69&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmaster.d1wea5u9my7fnf.amplifyapp.com%2F">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
