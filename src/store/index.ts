import { combineReducers } from "redux";
import videoReducer from "./video/reducers";

const rootReducer = combineReducers({
  videos: videoReducer
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
