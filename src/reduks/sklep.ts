import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import kontakty from './reduktory';

const konfiguracjaSklepu = () => {
  return createStore(
    combineReducers({
      kontakty
    }),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export default konfiguracjaSklepu;
