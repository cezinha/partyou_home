import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { loadState, saveState } from '../localstorage';
import throttle from 'lodash.throttle';
import thunk from 'redux-thunk';
import { formReducer } from './reducers/form';

export const rootReducer = combineReducers({
  form: formReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const persistedState = loadState();
export const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(throttle(() => {
  saveState({
    form: store.getState().form
  });
}, 1000));