import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import storage from 'redux-persist/lib/storage';

import  categoriesReducer  from './categories/categoriesSlice'; // new slice name(reducer) to default export
import  productsReducer  from './products/productsSlice'; // new slice name(reducer) to default export



const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [] // Reducers saved in local storage --> Array vacio todos
    
}



// funciones propias de redux-toolkit
const persistedReducer = persistReducer(persistConfig, reducers);

// reducer con configuracion de persistencia
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
export const persistor = persistStore(store); // persistor para redux (le pasamos store para que quede guardado en local storage)