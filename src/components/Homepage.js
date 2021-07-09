import React from 'react';
import GoogleLogin from 'react-google-login';

const Homepage = () => {
  const login = response => {
    console.log(response);
  };

  return (
    <div className='home__page'>
      <div className='login__message'>
        <h2>📔</h2>
        <h1>Blog Site</h1>
        <p>
          Providing high quality online resources for reading blogs. Sign up and
          start reading quality content today!
        </p>
        <GoogleLogin
          clientId='63882025533-8io19dmi968ldpg4j9du5amm8pq8757o.apps.googleusercontent.com'
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className='login__button'
            >
              Login with Google
            </button>
          )}
          onSuccess={login}
          onFailure={login}
          isSignedIn={true}
          // the following will store in localStorage
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default Homepage;
