import { combineReducers, createStore } from 'redux'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      state = {...state, name: action.payload}
      break
    }
    case 'CHANGE_AGE' : {
      state = {...state, age: action.payload}
      break
    }
  }
  return state
}
const tweetReducer = (state = {}, action) => {
  return state
}
const reducers = combineReducers({
  user: userReducer,
  tweet: tweetReducer
})

const store = createStore(reducers)

store.subscribe(() => {
  console.log('Store Changed', store.getState())
})

store.dispatch({type: 'CHANGE_NAME', payload: 'Will'})
store.dispatch({type: 'CHANGE_AGE', payload: 31})
store.dispatch({type: 'CHANGE_AGE', payload: 34})
