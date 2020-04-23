import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../page/Recommend/store/index';
import { reducer as singersReducer } from '../page/Singers/store/index';
import { reducer as rankReducer } from '../page/Rank/store/index';
import { reducer as albumReducer } from '../page/Album/store/index';
import { reducer as singerInfoReducer } from '../page/Singer/store/index';

export default combineReducers({
  // 之后开发具体功能模块的时候添加reducer
  recommend: recommendReducer,
  singers: singersReducer ,
  rank: rankReducer,
  album: albumReducer,
  singerInfo: singerInfoReducer
});