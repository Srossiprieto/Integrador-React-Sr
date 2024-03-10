import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'


import {Provider}from 'react-redux' // contiene toda la info 
import { PersistGate } from 'redux-persist/integration/react' 
import { store, persistor } from './redux/store'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles/>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
