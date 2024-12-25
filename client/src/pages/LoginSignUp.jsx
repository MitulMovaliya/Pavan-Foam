import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { signin } from "../services/LoginServices";

function LoginSignUp() {
  const { user, checkAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const fromLocation = location.state?.from?.pathname || "/"; // Default to home

  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleLoginForm = async (e) => {
    try {
      e.preventDefault();
      const data = await signin(loginForm);

      if (data.success) {
        alert("done");
        checkAuth();
        navigate(fromLocation, { replace: true });
      }
      return;
    } catch (error) {
      //tost create
      alert(error);
    }
  };

  const TogleButton = () => (
    <div className="text-white mt-6 w-full text-center font-semibold">
      <button onClick={() => setIsLogin(!isLogin)} className=" underline">
        {isLogin
          ? "Don't have an account? Signup"
          : "Already have an account? Login"}
      </button>
    </div>
  );

  if (user) return <Navigate to="/" state={{ from: location }} replace />;

  return (
    <div className="bg-gradient-to-tl from-orange-200 via-white to-orange-200">
      <div className="flex justify-center items-center h-[90vh]   background">
        <div className="w-full shadow-md  max-w-lg md:max-w-4xl bg-white rounded-lg overflow-hidden flex flex-col relative">
          <div
            className={`absolute w-full md:w-1/2 h-full  bg-gradient-to-t from-orange-500 to-orange-700 transform transition-transform duration-700 ease-in-out ${
              isLogin ? "md:translate-x-0" : "md:translate-x-full"
            }`}
          >
            <div
              className={`hidden md:flex flex-col justify-center items-center h-full p-8  text-black transition-transform duration-700 ease-in-out  ${isLogin ? "translate-x-full" : "-translate-x-full"}`}
            >
              <h2 className="text-3xl font-bold mb-4">
                {isLogin ? "Welcome Back!" : "Join Us Today!"}
              </h2>
              <p className="text-center">
                {isLogin
                  ? "Login to continue enjoying our services."
                  : "Sign up to explore a world of opportunities!"}
              </p>
            </div>
          </div>

          <div className="relative flex w-full">
            <div
              className={`w-full md:flex ${isLogin ? "" : "hidden"} flex-col md:w-1/2 p-8 transition-transform duration-700 ease-in-out transform ${
                isLogin ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <h2 className="text-2xl font-bold text-center text-white mb-4">
                Login
              </h2>
              <form onSubmit={handleLoginForm}>
                <div className="mb-4">
                  <label className="block text-white mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="mt-0"
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="mt-0"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-semibold bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-800"
                >
                  Login
                </button>
              </form>
              <TogleButton />
            </div>

            <div
              className={`w-full md:flex ${isLogin ? "hidden" : ""} flex-col md:w-1/2 p-8 transition-transform duration-700 ease-in-out transform ${
                isLogin ? "translate-x-full" : "translate-x-0"
              }`}
            >
              <h2 className="text-2xl font-bold text-center text-white mb-4">
                Signup
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-white mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="mt-0"
                    value={signupForm.name}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="mt-0"
                    value={signupForm.email}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="mt-0"
                    value={signupForm.password}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-semibold bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-800"
                >
                  Signup
                </button>
              </form>
              <TogleButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
