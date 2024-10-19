// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between px-6 py-2 drop-shadow">
    <Link to={"/"}>
    <h2 className="text-xl font-medium text-black py-2">
        <span className="text-slate-500">Core</span>
        <span className="text-slate-900">Photos</span>
    </h2>
    </Link>
    </div>
  )
}

export default Navbar;