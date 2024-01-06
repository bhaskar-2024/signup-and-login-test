import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const loginPage = () => {
    navigate("/LoginPage");
  };
  const signupPage = () => {
    navigate("/SignUp");
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-slate-500">
        <button
          onClick={loginPage}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Login
          </span>
        </button>
        <button
          onClick={signupPage}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            SignUp
          </span>
        </button>
      </div>
    </>
  );
}

export default App;
