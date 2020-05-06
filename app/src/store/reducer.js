import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../page/Recommend/store/index";
import { reducer as singersReducer } from "../page/Singers/store/index";
import { reducer as rankReducer } from "../page/Rank/store/index";
import { reducer as albumReducer } from "../page/Album/store/index";
import { reducer as singerInfoReducer } from "../page/Singer/store/index";
import { reducer as playerReducer } from "../page/Player/store/index";
import { reducer as searchReducer } from "../page/Search/store/index";

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
  album: albumReducer,
  singerInfo: singerInfoReducer,
  player: playerReducer,
  search: searchReducer,
});
