import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { useUser } from "../context/user.context";

function Register() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {setUser,user} = useUser()


  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/users/register", { email, password });
      localStorage.setItem('token', data.token);
      setUser(data.user)
      console.log(data);
      navigate('/login')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Register</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register