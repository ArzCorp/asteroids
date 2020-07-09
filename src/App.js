import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import Principal from './pages/principalPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Principal />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
