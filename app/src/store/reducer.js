import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../page/Recommend/store/index';
import { reducer as singersReducer } from '../page/Singers/store/index';
import { reducer as rankReducer } from '../page/Rank/store/index';
export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer ,
  rank: rankReducer
})