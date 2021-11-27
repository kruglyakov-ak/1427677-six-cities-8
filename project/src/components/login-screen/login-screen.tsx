import { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, City } from '../../const';
import { changeCity, getCurrentLogin } from '../../store/action';
import { loginAction } from '../../store/api-actions';
import { getRandomNumberInRange } from '../../utils/uttils';
import { toast } from 'react-toastify';

const VALIDATION_FAIL_MESSAGE = 'Please enter your email address and password. The password must be at least 1 letter(a-z) and 1 number(0-9).';

function LoginScreen(): JSX.Element {
  const dispatch = useDispatch();
  const getRandomCity = () => Object.keys(City)[getRandomNumberInRange(0, Object.keys(City).length - 1)];
  const randomCity = getRandomCity();

  const handleCityClick = () => {
    dispatch(changeCity(randomCity));
  };

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordPattern = /[0-9]+[a-z]+|[a-z]+[0-9]+/;

    if (loginRef.current !== null && passwordRef.current !== null) {
      const isValidEmail = emailPattern.test(String(loginRef.current.value).toLowerCase());
      const isValidPassword = passwordPattern.test(String(passwordRef.current.value).toLowerCase());

      return isValidEmail && isValidPassword;
    }

    return false;
  };


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const isValidForm = validateForm();
    if (isValidForm && loginRef.current !== null && passwordRef.current !== null) {
      dispatch(getCurrentLogin(loginRef.current.value));
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      return;
    }

    toast.info(VALIDATION_FAIL_MESSAGE);
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#" method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={handleCityClick}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
