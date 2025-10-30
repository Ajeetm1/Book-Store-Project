import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const API = import.meta.env.VITE_API_BASE_URL;


const Login = () => {
  const [Value, setValue] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const change = (e) => {
    const { name, value } = e.target;
    setValue({ ...Value, [name]: value });
  };

  const submit = async (e) => {
     e.preventDefault();
    console.log("Submit called");
    try {
      if (Value.username === "" || Value.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          `${API}/sign-in`,
          Value
        );
         toast.success("Login Successful!", {
        position: "top-left",
        autoClose: 1000,
        className:"toast-message"
      });
        console.log("Submit called");
        if (!response || !response.data) {
          throw new Error("Invalid response from server");
        }


        console.log("API response:", response);
        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));

        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
       
       setTimeout(() => {
        navigate("/");
      }, 1000);
      }
    } catch (error) {
      console.error("Login error:", error); 
    if (error.response && error.response.data.message) {
      alert(error.response.data.message);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
  };
  return (
    <section className="bg-white ">
      <ToastContainer/>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-blue-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-400">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-400 text-black rounded-lg block w-full p-2.5 hover:border-amber-600     "
                  placeholder="enter username"
                  required=""
                  value={Value.username}
                  onChange={change}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-400 text-black rounded-lg block w-full p-2.5 hover:border-amber-600 "
                  required=""
                  value={Value.password}
                  onChange={change}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 hover:border-amber-500"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white hover:bg-primary-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 "
                
              >
                
                Sign in
              </button>
              
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
