import '../styles/globals.css';
import type { AppProps } from 'next/app';

const App = (appProps: AppProps): JSX.Element => {
  const { Component, pageProps } = appProps;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default App;
