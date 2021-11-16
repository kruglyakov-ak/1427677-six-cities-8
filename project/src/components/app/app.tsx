import { Switch, Route} from 'react-router-dom';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import MainPage404 from '../main-page-404/main-page-404';
import { useSelector } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../utils/uttils';
import PropertyScreen from '../property-screen/property-screen';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getLoadedDataStatus } from '../../store/offer-data/selectors';

function App(): JSX.Element {

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getLoadedDataStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
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
        <PropertyScreen />
      </Route>
      <Route
        render={() => (
          <MainPage404 />
        )}
      />
    </Switch>
  );
}

export default App;
