import React, { useReducer, useEffect } from 'react';

// Reducers & Actions
import rootReducer from './reducers';
import { init } from './actions';

// Components
import Menu from './components/Menu';
import TaskList from './components/TaskList';
import Login from './components/Login';

function App() {
  const [state, dispatch] = useReducer(rootReducer, {
    isLoggedIn: false,
    user: null,
    isLoading: false,
    isError: false,
    data: [],
  });

  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <div className="App">
      {!state.isLoggedIn ? 
        (<Login />) : 
        (
          <>
            <Menu />
            <TaskList />
          </>
        )
      }
            
    </div>
  );
}

export default App;
