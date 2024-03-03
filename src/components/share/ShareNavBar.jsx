import React from 'react';
import { Link } from 'react-router-dom';

const ShareNavBar = () => {
  return (
    <>
      <div className="lg:min-w-[65%] md:min-w-[95%] min-w-[95%] h-auto flex items-center justify-between  px-8 py-4 mt-4 rounded-md backdrop-blur-md bg-rose-700/80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Link>
          <div>
            <h1 className="text-3xl font-bold text-white">Photos</h1>
          </div>
        </Link>
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShareNavBar;
