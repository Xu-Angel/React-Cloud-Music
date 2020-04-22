import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../page/Recommend/store/index';
export default combineReducers({
  recommend:recommendReducer
})