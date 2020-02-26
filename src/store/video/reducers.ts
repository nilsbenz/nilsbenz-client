import { Action } from "redux";
import { createReducer } from "../utility/reducer";
import { SET_VIDEOS, VideoState, SET_LOADING_VIDEOS } from "./types";

const initialState: VideoState = {
  videos: [],
  loading: true
};

const videoReducer = createReducer<VideoState, Action>(initialState, {
  [SET_VIDEOS]: (state, action): VideoState => ({
    ...state,
    videos: action.videos
  }),
  [SET_LOADING_VIDEOS]: (state, action): VideoState => ({
    ...state,
    loading: action.loading
  })
});

export default videoReducer;
