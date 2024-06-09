import React from 'react';
import googleLogo from "./../../../bannerImages/google-logo.svg";
const SocialLogin = () => {
    return (
        <div>
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
        </div>
    );
};

export default SocialLogin;