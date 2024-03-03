import React from 'react';
import { Link } from 'react-router-dom';
// import '../index.css';

function Body() {
  return (
    <div>
      <Link to="/login">
        <button
          className="group relative inline-block overflow-hidden rounded border
          border-gray-100 bg-gray-200 px-12 py-3
          text-slate-800 focus:outline-none 
           text-xl font-bold"
        >
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-fuchsia-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-fuchsia-600 transition-all duration-200 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-fuchsia-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-fuchsia-600 transition-all duration-200 group-hover:h-full"></span>
          Login
        </button>
      </Link>
    </div>
  );
}

export default Body;
