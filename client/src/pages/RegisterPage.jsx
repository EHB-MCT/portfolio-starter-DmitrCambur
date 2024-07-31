import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Perform registration logic
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-primary font-jetbrains">
      <div className="p-10 w-full max-w-3xl bg-secondary">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the EHB Student Forum
        </h1>
        <p className="mb-6">Create an account to access the forum</p>
        <form>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <button
                className="bg-primary hover:bg-blue-800 text-secondary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                type="button"
                onClick={handleRegister}
              >
                Register
              </button>
              <button
                className="bg-primary hover:bg-blue-800 text-secondary font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
