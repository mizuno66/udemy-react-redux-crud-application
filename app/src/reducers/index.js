// アプリケーション内で存在するReducerを総括する
// 全てのReducerを一つのReducerに結合する

import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

// redux-form.reducerをform以外の別名で使用する場合は、「form:xxxx」と書く
export default combineReducers({ events, form })
