import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../Api';
import { Button } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async(e) =>{
    e.preventDefault();
   
    const response =await axios.post(baseurl+'/login/loginview',{
      username:username,
      password:password,
    } );
    console.log(response)
    
    if(response.data.success){
      alert('Login successful');
      navigate('/home')
    
    }
    else
  {
    setError('invalid Username or password.Please try again.');
  }

  }

  return (
    <div className='backgrounddiv'>

    
    <div className="login-container">
      <h2>Login</h2>
      <form className='form'>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            required
          />
          

        </div>
        <button onClick={handleLogin} type="submit">Login</button><br /><br />
        {error &&<p style={{marginTop:9,color:'red'}}>{error}</p>}
        Don't have an acount? <a href='/Signup' className='signup'>Sigup</a>
       
      </form>
    </div>
    </div>
  )
}

export default Login