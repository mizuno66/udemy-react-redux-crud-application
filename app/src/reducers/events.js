import {
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
} from '../actions'
import _ from 'lodash'

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            // APIで取得してきたデータをメモリ上のオブジェクトへ更新
            const data = action.response.data
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            // オブジェクトから消去
            delete events[action.id]
            // スプレッド演算子（新しいメモリ空間上へ配置）
            return {...events}
        default:
            return events
    }
}
