import MainPage from '../main-page/main-page';

type AppProps = {
  placeCardCount: number;
}

function App({ placeCardCount }: AppProps): JSX.Element {
  return <MainPage placeCardCount={placeCardCount} />;
}

export default App;
