import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todosState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todosState', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: todosReducer,
  preloadedState: persistedState,
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
