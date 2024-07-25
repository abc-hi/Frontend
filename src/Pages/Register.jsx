import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext.jsx';
import AuthService from '../Services/AuthService.jsx';
import { useHistory } from 'react-router-dom';


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
  
    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        await authService.register({ username, email, password });
        history.push('/');
      } catch (err) {
        setError(err.response.data.message || 'Registration failed');
      }
    };
  
    return (
      <div>
        <h2>Register</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  export default Register;