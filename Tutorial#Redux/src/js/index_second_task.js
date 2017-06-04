import { applyMiddleware, createStore } from 'redux'

const reducer = (initialState = 0, action) => {
  if (action.type === 'INC') {
    return initialState + 1
  } else if (action.type === 'DEC') {
    return initialState - 1
  } else if (action.type === 'E') {
    throw new Error('AHHHHHHHHHHHHH!!!!!')
  }
  return initialState
}

const logger = (store) => (next) => (action) => {
  console.log('action fired', action)
  next(action)
}
const error = (store) => (next) => (action) => {
  try {
    next(action)
  } catch (e) {
    console.log('AHHHHHHH!', e)
  }
}

const middleWare = applyMiddleware(logger, error)

const store = createStore(reducer, 1, middleWare)

store.subscribe(() => {
  console.log('store changed', store.getState())
})

store.dispatch({type: 'INC', payload: 0})
store.dispatch({type: 'INC', payload: 0})
store.dispatch({type: 'DEC', payload: 0})
store.dispatch({type: 'DEC', payload: 0})
store.dispatch({type: 'E', payload: 0})
