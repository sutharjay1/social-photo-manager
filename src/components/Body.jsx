import React from 'react';
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Body;
