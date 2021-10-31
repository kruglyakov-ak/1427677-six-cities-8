import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-rout';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import MainPage404 from '../main-page-404/main-page-404';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../uttils';
import browserHistory from '../../browser-history';

const mapStateToProps = ({ authorizationStatus, isDataLoaded, offers }: State) => ({
  authorizationStatus,
  isDataLoaded,
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({ authorizationStatus, isDataLoaded }: PropsFromRedux): JSX.Element {
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainPage />
        </Route>
        <Route path={AppRoute.Login} exact>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route path={AppRoute.Offer} exact>
        </Route>
        <Route
          render={(props) => (
            <MainPage404 />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
