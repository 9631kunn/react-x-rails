import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './Layout';
import Index from './Index/Index';
import Show from './Show/Show';

const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Index} />
      <Route path="/show/:id" component={Show} />
    </Layout>
  );
};

export default App;
