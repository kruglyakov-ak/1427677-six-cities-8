import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreenNotLogged from '../property-screen-not-logged/property-screen-not-logged';
import MainPage404 from '../main-page-404/main-page-404';


type AppProps = {
  placeCardCount: number;
}

function App({ placeCardCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage placeCardCount={placeCardCount} />
        </Route>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesScreen />
        </Route>
        <Route path="/offer/:id" exact>
          <PropertyScreenNotLogged />
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
