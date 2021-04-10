// == Import npm
import React from 'react';

// == Import Composants
import Cards from 'src/containers/Cards';
import Filter from 'src/containers/Filter';
import PaginationPerso from 'src/containers/Pagination';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <h1 className="app-title">Movie Card'z</h1>
    <div className="app-filter">
      <Filter />
    </div>
    <div className="app-cards">
      <Cards />
    </div>
    <div className="app-pagination">
      <PaginationPerso />
    </div>
  </div>
);

// == Export
export default App;
