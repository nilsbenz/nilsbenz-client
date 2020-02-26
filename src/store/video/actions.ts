import {
  SET_VIDEOS,
  SetVideosAction,
  SetLoadingVideosAction,
  SET_LOADING_VIDEOS
} from "./types";

export function setVideos(videos: string[]): SetVideosAction {
  return {
    type: SET_VIDEOS,
    videos
  };
}

export function setLoadingVideos(loading: boolean): SetLoadingVideosAction {
  return {
    type: SET_LOADING_VIDEOS,
    loading
  };
}
