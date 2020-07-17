<<<<<<< HEAD
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}

=======
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

>>>>>>> d14c1c46a6425a2cebc62e0d50131825548dadc8
export default Layout;