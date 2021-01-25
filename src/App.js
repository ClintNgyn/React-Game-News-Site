import { Route } from 'react-router-dom';

import { Home } from './pages';
import { GlobalStyles, Nav } from './components';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />

      <Nav />

      <Route path={['/', '/game/:id']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
