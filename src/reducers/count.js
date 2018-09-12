import { INCREMENT,DECREMENT } from '../actions'

// 状態の初期値をオブジェクトとして定義する。
const initialState = { value: 0 }
// reducerは関数として定義する
export default (state = initialState,action) => {
  switch(action.type){
    case INCREMENT:
      return {value: state.value +1}
    case DECREMENT:
      return {value: state.value -1}
    default
      return state
  }
}
