import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function LoginPage() {
  let [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  let [redirect, setRedirect] = useState(false);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded login check
    if (formData.id === "Challengers" && formData.password === "123") {
      toast.success("Successfully logged in!");
      setRedirect(true);
    } else {
      toast.error("Invalid ID or Password");
    }
  };

  if (redirect) {
    return <Navigate to="/Dashboard" replace={true} />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          RTO Login
        </h2>

        {/* ID Input */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">UserName</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Enter your Name"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Password</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
      <Toaster position="top-right" />
    </div>
  );
}

export default LoginPage;
