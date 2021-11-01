import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import CitysList from '../citys-list/citys-list';
import MainHeader from '../main-header/main-header';

const mapStateToProps = ({ currentCity }: State) => ({
  currentCity,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainPageEmpty({ currentCity }: PropsFromRedux): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <MainHeader />

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitysList />
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { MainPageEmpty };
export default connector(MainPageEmpty);
