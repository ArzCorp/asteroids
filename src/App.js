import React from 'react';
import Layout from './components/Layout';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Principal from './pages/Principal';
import Asteroids from './pages/Asteroids';
<<<<<<< HEAD
import Cargando from './pages/Cargando';
import Galery from './pages/Galery';
=======
import Galery from './pages/Galery';

>>>>>>> c52a0d6ffc165aef70b800d95c7e65f134691c43

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="Wrraper">
          <Route exact path="/" component={Principal} />
          <Route exact path="/asteroides" component={Asteroids} />
<<<<<<< HEAD
          <Route exact path="/favoritos" component={Cargando} />
=======
>>>>>>> c52a0d6ffc165aef70b800d95c7e65f134691c43
          <Route exact path="/galeria" component={Galery} />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

