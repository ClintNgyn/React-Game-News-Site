import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './store/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('use effect called');
    dispatch(loadGames());
  }, []);

  return <div className='App'></div>;
}

export default App;
