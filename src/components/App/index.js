// == Import npm
import React from 'react';

// == Import Composants
import Cards from 'src/components/Cards';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <h1 className="app-title">Movie Card'z</h1>
    <Cards />
  </div>
);

// == Export
export default App;
