import React from 'react';

import Logo from '../components/template/Logo'
import Header from '../components/template/Header'
import Navigation from '../components/template/Navigation'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

export default props =>
  <React.Fragment>
    <Logo />
    <Main />
    <Navigation />
    <Footer />
  </React.Fragment>