import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import promise from 'redux-promise-middleware'

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  err: null
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING': {
      return {...state, fetching: true}
    }
    case 'FETCH_USERS_FULFILED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
    }
    case 'FETCH_USERS_REJECTED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        err: action.payload
      }
    }
  }
  return state
}

const middleware = applyMiddleware(promise(), thunk, logger)
const store = createStore(reducer, middleware)

// store.dispatch((dispatch) => {
//  dispatch({type: 'FETCH_USER_START'})
//  axios.get('http://rest.learncode.academy/api/wstern/users')
//    .then((response) => {
//      dispatch({type: 'RECEIVE_USERS', payload: response})
//    })
//    .catch((err) => {
//      dispatch({type: 'FETCH_USERS_ERRORS', payload: err})
//    })
// })
store.dispatch({type: 'FETCH_USERS', payload: axios.get('http://rest.learncode.academy/api/wstern/users')})
