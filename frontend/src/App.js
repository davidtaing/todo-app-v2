import React, { useContext, useReducer, useEffect } from 'react';

// Reducers & Actions
import rootReducer from './reducers';
import { init } from './actions';

// Components
import Menu from './components/Menu';
import TaskList from './components/TaskList';
import Login from './components/Login';

const DispatchContext = useContext();
const StateContext = useContext();

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
      <DispatchContext value={dispatch}>
        <StateContext value={state}>
          {!state.isLoggedIn ?
            (<Login />) :
            (
              <>
                <Menu />
                <TaskList />
              </>
            )
          }
        </StateContext>
      </DispatchContext>
    </div>
  );
}

export default App;
