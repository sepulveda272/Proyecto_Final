import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
import Login from './components/Loging';
import './css/Login.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [mostrarInicio, setMostrarInicio] = useState(false);

  const handleIniciarClick = () => {
    setMostrarInicio(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {!mostrarInicio && (
          <div className="form-container">
            <p className="title">Welcome back</p>
            <form className="form">
              <input type="email" className="input" placeholder="Email" />
              <input type="password" className="input" placeholder="Password" />
              <p className="page-link">
                <span className="page-link-label">Forgot Password?</span>
              </p>
              <button onClick={handleIniciarClick} className="form-btn">Log in</button>
            </form>
            <p className="sign-up-label">
              Don't have an account?<span className="sign-up-link">Sign up</span>
            </p>
            <div className="buttons-container">
              <div className="apple-login-button">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  className="apple-icon"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                 
                </svg>
                <span>Log in with Apple</span>
              </div>
              <div className="google-login-button">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  x="0px"
                  y="0px"
                  className="google-icon"
                  viewBox="0 0 48 48"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  
                </svg>
                <span>Log in with Google</span>
              </div>
            </div>
          </div>
        )}

        {mostrarInicio ? (
          <Login />
        ) : (
          <p></p>
        )}
      </header>
    </div>
  );
}

export default App;
