import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'

import { Provider } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import App from './App'
import filterReducer from './reducers/filterReducer'
import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'

import noteService from './services/notes'
import noteReducer, { setNotes } from './reducers/noteReducer'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})

noteService.getAll().then(notes =>
  store.dispatch(setNotes(notes))
)

console.log(store.getState())

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
