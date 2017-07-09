import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { fetchMeals } from './actions'
import './index.css'
import incafeApp from './reducers/index'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const loggerMiddleware = createLogger()

const initialState = {
  days: {},
  items: {},
  icons: {},
  selectedMeal: 'breakfast'
}

const store = createStore(
  incafeApp,
  initialState,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
)

store.dispatch(fetchMeals('840', new Date('2017-07-11')))
  .then(() => console.log(store.getState()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker();
