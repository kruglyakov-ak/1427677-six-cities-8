import MainPage from '../main-page/main-page';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

type AppProps = {
  placeCardCount: number;
}

function App({ placeCardCount }: AppProps): JSX.Element {
  return <MainPage placeCardCount={placeCardCount} />;
}

export default App;
