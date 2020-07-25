import React from 'react';
import Layout from './components/Layout';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Principal from './pages/Principal';
import Asteroids from './pages/Asteroids';
import Cargando from './pages/Cargando';
import Galery from './pages/Galery';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="prueba">
          <Route exact path="/" component={Principal} />
          <Route exact path="/asteroides" component={Asteroids} />
          <Route exact path="/favoritos" component={Cargando} />
          <Route exact path="/galeria" component={Galery} />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

