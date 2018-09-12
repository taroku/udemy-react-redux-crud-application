// 全てのreducerを結合する役割を持たせる。reduxにライブラリがあるので利用
import { combineReducers } from 'redux';
import count from './count';

export default combineReducers({ count })
// export default combineReducers({ foo,bar,baz })

