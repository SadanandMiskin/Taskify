import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../App.css';

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li><Link to="/">Taskify</Link></li>
        {/* <li>By Sadanand Miskin 😊</li> */}
        {user ? (
          <>
            {/* <li><Link to="/profile">Profile</Link></li> */}
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <div className="end">
            <>
            <li><Link to="/login"><button className='log'>Login</button></Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
