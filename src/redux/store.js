import rootReducer from './reducer'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = [...getDefaultMiddleware()]

export const store = configureStore({
    reducer: rootReducer,
    middleware
  })

//export const store = createStore(rootReducer,
   //                              composeWithDevTools(applyMiddleware(thunk)));
