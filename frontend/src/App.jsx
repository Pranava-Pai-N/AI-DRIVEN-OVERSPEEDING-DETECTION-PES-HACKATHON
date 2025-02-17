import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GetData from "./pages/GetData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <>
            <Navbar />
            <Dashboard />
            <Footer />
          </>
        }
      />
      <Route
        path="/getdata"
        element={
          <>
            <Navbar />
            <GetData />
          </>
        }
      />
    </Routes>
  );
}

export default App;
