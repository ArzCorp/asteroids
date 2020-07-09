import React from 'react';
import Layout from './components/Layout';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Principal from './pages/Principal';
import Asteroids from './pages/Asteroids';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Principal} />
        <Route exact path="/asteroides" component={Asteroids} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
