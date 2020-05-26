import React, {useState} from 'react';
import {axiosWithAuth} from '../Authentication/axiosWithAuth'
import { useForm } from "react-hook-form";

export default function Login(props) {

const { errors } = useForm();

const [user, getUser] = useState({
    username: '',
    password: ''
})

const handleChanges = e => {
    getUser({...user, [e.target.name]: e.target.value})
}

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
    .post('/auth/login', user)
    .then(res => {
      console.log(res.data.token)
        localStorage.setItem('token', res.data.token);
        props.history.push('/protected');
        console.log('login form submitted');
    })
    .catch(err => {
        localStorage.removeItem('token');
        console.log('Invalid Login', err);
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type='text'
       placeholder='username' 
       name='username' 
       onChange={handleChanges} 
       value={user.username} 
       />
       {errors.username && <p>This is required</p>}

      <input 
      type='text' 
      placeholder='password' 
      name='password' 
      onChange={handleChanges} 
      value={user.password} 
      />
      {errors.password && <p>This is required</p>}

      <input type='submit' />
    </form>
  );
}