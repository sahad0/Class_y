import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Router from './Router/Router'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer,persistStore} from 'redux-persist'
import cartReducer from './Store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from '@reduxjs/toolkit';

export default function App() {


  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  const persistedReducer = persistReducer(persistConfig, cartReducer);
  
  const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

  const persistor = persistStore(store);









  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <SafeAreaView style={{flex:1}}>
          <Router />
      </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}