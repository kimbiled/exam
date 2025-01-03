import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-[#3E91D8] text-white text-center py-4 text-xl font-bold">
      <Link to="/">TELL ME WHEN</Link>
    </header>
  );
};

export default Header;
