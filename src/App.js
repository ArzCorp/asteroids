import React from 'react';
import Layout from './components/Layout';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Principal from './pages/Principal';
import Asteroids from './pages/Asteroids';
import Galery from './pages/Galery';
import Card from './components/Card';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="Wrraper">
          <Route exact path="/" component={Principal} />
          <Route exact path="/asteroides" component={Asteroids} />
          <Route exact path="/galeria" component={Galery} />
          <Route exact path="/carousel" component={Card} />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

