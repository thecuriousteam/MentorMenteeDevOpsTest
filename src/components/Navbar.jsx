import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-2xl font-bold underline flex justify-around">
        <Link to = "/home">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
    </div>
  )
}

export default Navbar