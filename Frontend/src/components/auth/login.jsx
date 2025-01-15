import axios from "axios";
import { useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
function Login() {
  const [credentials, setCreds] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setCreds({
      ...credentials,
      [name]: value,
    });
  };


  const handleClickLogin = async () => {
  const response= await axios.post("http://localhost:8080/user/login");
  localStorage.setItem("token", response.data.token);
  navigate("/");

  };
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h1 className="text-2xl font-bold mb-6 text-center text-white">
            Login Page
          </h1>
          <form className="space-y-6" onSubmit={handleClickLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Enter Email:
              </label>
              <input
                type="email"
                // autocomplete="email"
                // required
                name="email"
                id="email"
                value={credentials.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                placeholder="abc@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Enter Password:
              </label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
            <p className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm">
            Already have an account? <Link to= {'/signup'} > Signup </Link></p>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;
  