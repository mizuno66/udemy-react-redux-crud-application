// アプリケーション内で存在するReducerを総括する

import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
