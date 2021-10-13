import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-rout';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import MainPage404 from '../main-page-404/main-page-404';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import PropertyScreen from '../property-screen/property-screen';


type AppProps = {
  offers: Offer[],
  reviews: Review[],
}

function App({ offers, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainPage offers={offers} />
        </Route>
        <Route path={AppRoute.Login} exact>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route path={AppRoute.Offer} exact>
          <PropertyScreen offer={offers[3]} offers={offers} reviews={reviews}/>
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

export default App;
