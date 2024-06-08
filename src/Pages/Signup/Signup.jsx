import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import skyviewImage from "./../../../bannerImages/logo.jpeg";
import googleLogo from "./../../../bannerImages/google-logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
          <Helmet>
            <title>Skyview Apartments | signup</title>
          </Helmet>
    
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl my-10">
            <div
              className="hidden bg-cover bg-center lg:block rounded-md lg:w-1/2"
              style={{
                backgroundImage: `url(${skyviewImage})`,
              }}></div>
    
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
              <div className="flex justify-center mx-auto">
                <img className="w-auto h-7 sm:h-8" src={skyviewImage} alt="" />
              </div>
    
              <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>
    
              <a
                href="#"
                className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <div className="flex justify-around items-center">
                  <div className="px-2 py-2  ">
                    <img className="h-6 w-6" src={googleLogo} alt="" />
                  </div>
    
                  <div className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</div>
                </div>
              </a>
    
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
    
                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                  or login with email
                </a>
    
                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="Name">
                    Name
                  </label>
                  <input
                    id="Name" {...register("name",  { required: true })}
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text" name = "name"
                  />  {errors.name && <span className="text-red-400">name is required*</span>}
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">
                    Email Address
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email" name = "email" {...register("email", { required: true })}
                   
                  />
                   {errors.email && <span className="text-red-400">email is required*</span>}
                </div>
    
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">
                      Password
                    </label>
                    <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">
                      Forget Password?
                    </a>
                  </div>
    
                  <input
                    id="loggingPassword"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="password" name = "password" {...register("password", { required: true })}
                  />
                   {errors.password && <span className="text-red-400">password is required*</span>}
                </div>
    
                <div className="mt-6">
                  <input
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                    value="Sign Up"
                  />
    
                  <input type="text" />
                </div>
    
                <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
    
                  <Link to="/login" className="text-center">
                    <a href="#" className="text-xs text-gray-800 uppercase dark:text-gray-800 hover:underline text-center">Already have an account? <br/>
                      <span className="font-bold mx-auto">sign In</span>
                    </a>
                  </Link>
    
                  <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
};

export default Signup;