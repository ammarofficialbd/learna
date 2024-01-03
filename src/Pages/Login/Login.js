import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import  './login.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleLogin = () => {
    // Simulating authentication (replace with actual authentication logic)
    if (email === "demo" && password === "password") {
      // Successful login
      alert("Login successful!");
      // You can redirect or set authentication state here
    } else {
      // Failed login
      setErrorMessage("Invalid email or password");
    }
  };
 

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


  return (
    <div>
      <div class="min-h-80 w-22 bg-gray-100 d-flex flex-col justify-center py-12 px-6 px-8 mx-auto">
        <div class="mx-auto w-full max-w-md d-flex items-center flex-col">
          <h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <span class="mt-2 text-center text-sm text-gray-600 max-w">
            Or
           
           </span>
          <NavLink
              to="/signup"
              class="font-medium text-blue-600 hover:text-blue-500"
            >
              create an account
            </NavLink>
        </div>

        <div class="pt-20 mx-auto w-full max-w-md">
          {errorMessage && (
            <div className="mb-4 text-red-500">{errorMessage}</div>
          )}
          <div class="bg-white py-8 px-4 shadow rounded-lg px-10">
            <form class="space-y-6" action="#" method="POST">
              <div className="py-6">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                
                    class="rounded-md relative block w-full px-4 py-8 placeholder-gray-500 text-gray-900 border-1 border-sky-500 text-sm"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="py-6">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                 
                    class="rounded-md relative block w-full px-4 py-8 placeholder-gray-500 text-gray-900 text-sm border-1 border-sky-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div class="d-flex items-center justify-between">
                <div class="d-flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    class="h-1 w-1 text-indigo-600 border-gray-300 rounded"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div >
                <button
                  type="submit"
                  onClick={handleLogin}
                  class="group relative w-full d-flex justify-center py-10 px-4 border-none text-sm font-medium rounded-md text-white bg-indigo-600 color-white cursor-point"
                >
                  Log in
                </button>
              </div>
            </form>
            <div class="mt-6">
              <div class="">
                <div class="lr-line d-flex justify-center items-center text-sm">
                  <span class="px-2 bg-gray-100 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div class="mt-6 grid g-col-3 gap-3">
                <div className="px-8 py-12 border-1 border-gray-200 bg-slate-50">
                  <a
                    href="#"
                    class="w-full d-flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-lg font-medium text-gray-700 color-lime-600"
                  >
                    <FaFacebookF />
                  </a>
                </div>
                <div className="px-8 py-12 border-1 border-gray-200 bg-slate-50">
                  <a
                    href="#"
                    class="w-full d-flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-lg font-medium text-gray-700  color-lime-600"
                  >
                    <FaGoogle />
                  </a>
                </div>
                <div  className="px-8 py-12 border-1 border-gray-200 bg-slate-50">
                  <a
                    href="#"
                    class="w-full d-flex items-center justify-center color-lime-600 rounded-md shadow-sm text-lg font-medium text-gray-700"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
