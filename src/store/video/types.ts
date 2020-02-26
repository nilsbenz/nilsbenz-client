export interface VideoState {
  videos: string[];
  loading: boolean;
}

export const SET_VIDEOS = "SET_VIDEOS";
export const SET_LOADING_VIDEOS = "SET_LOADING_VIDEOS";

export interface SetVideosAction {
  type: typeof SET_VIDEOS;
  videos: string[];
}

export interface SetLoadingVideosAction {
  type: typeof SET_LOADING_VIDEOS;
  loading: boolean;
}
