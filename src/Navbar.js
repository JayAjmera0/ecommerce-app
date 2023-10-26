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
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
