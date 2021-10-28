import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './loading-screen.css';

function LoadingScreen(): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div id="fountainTextG">
            <div id="fountainTextG_1" className="fountainTextG">L</div><div id="fountainTextG_2" className="fountainTextG">o</div><div id="fountainTextG_3" className="fountainTextG">a</div><div id="fountainTextG_4" className="fountainTextG">d</div><div id="fountainTextG_5" className="fountainTextG">i</div><div id="fountainTextG_6" className="fountainTextG">n</div><div id="fountainTextG_7" className="fountainTextG">g</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoadingScreen;
