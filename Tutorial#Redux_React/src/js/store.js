import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducers'

const middleWare = applyMiddleware(promise(), thunk, logger)

const store = createStore(reducer, middleWare)

export default store
