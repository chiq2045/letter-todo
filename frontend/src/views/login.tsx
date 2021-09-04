import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='hero fullscreen bg-teal-100'>
      <div className='hero-body'>
        <div className='mx-auto'>
          <h1 className='title uppercase'>Please Log In</h1>
          <button className='btn-transparent text-grey-700 bg-pink-300 btn-large' onClick={() => loginWithRedirect()}>Login</button>
        </div>
      </div>
    </div>
  );
};
