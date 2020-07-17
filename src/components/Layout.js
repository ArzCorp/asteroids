import React from 'react';
import Header from './Header';
import Video from './Video'
import Footer from './Footer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Video />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout;