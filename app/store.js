// createStore is a function that creates a new redux store
// applyMiddleware allows us to add extra functionality to redux
// compose is another redux utility that allows us to blend in extra functionality
import { createStore, applyMiddleware, compose } from 'redux';
// This will allow us to use callbacks to dispatch things to our store
import thunk from 'redux-thunk';

// This is a function we will write to respond to actions
import reducer from './reducer';

// Setup the devtools extension in chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// What do we want our "state" to be when we start our app?
const initialState = { snacks: [] };

// Actually build the redux store for our app
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

// Export the store so we can use it in other parts of our app
export default store;
