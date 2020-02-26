import { setLoadingVideos, setVideos } from "./actions";
import counterReducer from "./reducers";
import { VideoState } from "./types";

describe("video reducers", (): void => {
  const VIDEO_1 = "video1";
  const VIDEO_2 = "video2";
  const VIDEO_3 = "video3";

  const initialState: VideoState = { videos: [VIDEO_1], loading: false };

  it("set videos", (): void => {
    const action = setVideos([VIDEO_2, VIDEO_3]);
    const mutatedState = counterReducer(initialState, action);

    const expected = { videos: [VIDEO_2, VIDEO_3], loading: false };

    expect(mutatedState).toEqual(expected);
  });

  it("set loading", (): void => {
    const action = setLoadingVideos(true);
    const mutatedState = counterReducer(initialState, action);

    const expected = { videos: [VIDEO_1], loading: true };

    expect(mutatedState).toEqual(expected);
  });
});
