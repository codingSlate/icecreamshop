import { Fragment } from 'react';
import Footer from './structure/Footer';
import Header from './structure/Header';
import './assets/styles/ice-cream.scss'
import Menu from './ice-cream/Menu';

function App() {
  return (
    <Fragment>
      <Header />
      <Menu/>
      <Footer />
    </Fragment>
  );
}

export default App;
