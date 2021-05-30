import React from 'react';
import { Link } from 'react-router-dom';
export default function MenuBar() {
  return (
    <div>
      <div className='ui pointing secondary menu'>
        <Link to='/' className='item'>
          <h3>Home</h3>
        </Link>
        <Link to='/employees' className='item'>
          <h3>Employees</h3>
        </Link>
      </div>
    </div>
  );
}
