import React, { useEffect, useRef, useState } from 'react';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const { logGoogleUser } = useGoogleAuth();
  const [isSignup, setIsSignUp] = useState(false);

  const toggleSignUp = () => setIsSignUp(!isSignup);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const isLogin = useSelector((state) => state?.user?.loginGoogleUser?.isLogin);

  useEffect(() => {
    if (isLogin) {
      navigate('/home');
    } else {
      navigate('/') || navigate('/login');
    }
  }, [isLogin]);

  const name = useRef();
  const email = useRef();
  const password = useRef();

  return (
    <>
      <div className="w-full h-screen flex items-start justify-center">
        <div className="w-full h-screen bg-zinc-900"></div>
        <div className="w-full  flex items-center justify-center h-screen bg-zinc-800 rounded-l-3xl">
          <div className="min-w-full h-screen flex flex-col items-start justify-center text-black px-64 gap-6">
            <div className="w-full flex flex-col items-start justify-center gap-[2px]">
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
            </div>

            <div className="w-full flex flex-col items-start justify-center -mt-5 mb-3">
              <h1 className="text-xl font-semibold text-zinc-500">
                Sign in to continue
              </h1>
            </div>
            <form
              className="w-full flex flex-col items-start justify-center gap-5"
              onSubmit={handleFormSubmit}
            >
              {isSignup && (
                <div className="w-full flex flex-col items-start justify-center gap-[2px]">
                  <label className="text-sm font-semibold text-black">
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Name"
                    ref={name}
                  ></input>
                </div>
              )}

              <div className="w-full flex flex-col items-start justify-center gap-[2px]">
                <label className="text-sm font-semibold text-black">
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  ref={email}
                ></input>
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-[2px]">
                <label className="text-sm font-semibold text-black">
                  Password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  ref={password}
                ></input>
              </div>
              <div className="w-full flex flex-row items-center justify-between gap-[2px]">
                <span
                  onClick={toggleSignUp}
                  className="cursor-pointer"
                >
                  Don't have an account?
                </span>
                <span className="text-sm font-semibold text-black hover:underline">
                  Forgot password?
                </span>
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-[2px]">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Get started
                </button>
              </div>
            </form>
            <div className="w-full flex flex-col items-start justify-center gap-[2px]">
              or
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-[2px]">
              <button
                type="button"
                onClick={() => {
                  logGoogleUser();
                }}
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
