import { combineReducers } from 'redux'

import tweets from './tweetsReducer.js'
import user from './userReducer.js'

export default combineReducers({tweets, user})
