import React from 'react'
import { Provider } from 'react-redux'
import Home from './src/page/Home'
import store from './src/redux/Store'

export default function App() {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  )
}