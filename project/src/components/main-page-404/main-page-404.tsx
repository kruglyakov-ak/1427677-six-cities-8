import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainHeader from '../main-header/main-header';

function MainPage404(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <MainHeader />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>

        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">Error 404. Page is not found :(</b>
                <p className="cities__status-description">
                  <Link className="cities__status-link" to={AppRoute.Main}>You can go to the home page.</Link>
                </p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage404;
