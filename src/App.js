import { Route } from 'react-router-dom';

import { Home } from './pages';
import { GlobalStyles } from './components';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />

      <Route path={['/', '/game/:id']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
