// アプリケーション内で存在するReducerを総括する
// 全てのReducerを一つのReducerに結合する

import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
