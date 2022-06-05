import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const blockName = 'login';

  return (
    <div className={`main__${blockName} ${blockName}`}>
      <h2 className={`${blockName}__header`}>Logowanie / Mój profil</h2>
      <div className={`${blockName}__form-wrapper`}>
        <div className={`${blockName}__picture-wrapper`}></div>
        <nav className={`${blockName}__action-toggler`}>
          <div className={`${blockName}__action-tile`}>Zaloguj się</div>
          <div className={`${blockName}__action-tile`}>
            <Link to="/register">
              Rejestracja
            </Link>
          </div>
        </nav>
        <div className={`${blockName}__form`}>
          <div>
            <input type="text" className={`${blockName}__form-input`} />
          </div>
          <div>
            <input type="text" className={`${blockName}__form-input`} />
          </div>
          <div>
            <input type="checkbox" name="remember-me" className={`${blockName}__form-checkbox`} />
            <label htmlFor="remember-me">Zapamiętaj mnie</label>
            <span className={`${blockName}__dont-remember-password`}>Nie pamiętasz hasła?</span>
          </div>
          <div className={`${blockName}__button`}>
            Zaloguj się
          </div>
        </div>
      </div>
    </div>
  )  
};

export default Login;
