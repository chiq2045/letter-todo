import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Login } from 'views/login';

export const App = () => {
  const { logout, isLoading, isAuthenticated } = useAuth0();

  console.log(isAuthenticated);

  if (isLoading) {
    return <div className='lds-heart' />;
  }

  if (isAuthenticated) {
    return (
      <div className='content space'>
        <h1>Welcome</h1>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </div>
    );
  }

  return <Login />;
};
