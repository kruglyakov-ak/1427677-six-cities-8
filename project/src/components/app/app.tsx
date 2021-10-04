import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreenNotLogged from '../property-screen-not-logged/property-screen-not-logged';


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
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/favorites" exact component={FavoritesScreen} />
        <Route path="/offer/:id" exact component={PropertyScreenNotLogged} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
