import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <div className='body'>
        <h1>Faça o seu login</h1>
      </div>
      <div className='body'>
        <Link to={'/cards'}>Cards</Link>
      </div>
    </>
  );
};
