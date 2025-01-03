import React from "react";

const Tabs = ({ isLogin, setIsLogin }) => {
  return (
    <div className="flex justify-center gap-6">
      <button
        className={`relative pb-2 text-lg font-semibold transition-all ${
          isLogin
            ? "text-[#3E91D8] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#3E91D8] after:rounded-full after:w-full"
            : "text-gray-500 hover:text-[#3E91D8]"
        }`}
        onClick={() => setIsLogin(true)}
      >
        Login
      </button>
      <button
        className={`relative pb-2 text-lg font-semibold transition-all ${
          !isLogin
            ? "text-[#3E91D8] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#3E91D8] after:rounded-full after:w-full"
            : "text-gray-500 hover:text-[#3E91D8]"
        }`}
        onClick={() => setIsLogin(false)}
      >
        Register
      </button>
    </div>
  );
};

export default Tabs;
