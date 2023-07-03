import axios from "axios";
import {
  getVideosFailure,
  getVideosStart,
  getVideosSuccess,
  addVideoFailure,
  addVideoStart,
  addVideoSuccess,
  updateVideoFailure,
  updateVideoStart,
  updateVideoSuccess,
  deleteVideoFailure,
  deleteVideoStart,
  deleteVideoSuccess,
} from "./VideoActions";

export const getVideos = async (dispatch) => {
  dispatch(getVideosStart());
  try {
    const res = await axios.get("api/videos/allvideos");
    dispatch(getVideosSuccess(res.data));
  } catch (err) {
    dispatch(getVideosFailure());
  }
};

export const addVideo = async (video, dispatch) => {
  dispatch(addVideoStart());
  try {
    const res = await axios.post("api/videos/", video);
    dispatch(addVideoSuccess(res.data));
  } catch (err) {
    dispatch(addVideoFailure());
  }
};

export const updateVideo = async (video, id, dispatch) => {
  dispatch(updateVideoStart());
  try {
    const res = await axios.put(`api/videos/${id}`, video);
    dispatch(updateVideoSuccess(res.data));
  } catch (err) {
    dispatch(updateVideoFailure());
  }
};

export const deleteVideo = async (id, dispatch) => {
  dispatch(deleteVideoStart());
  try {
    await axios.delete("api/videos/" + id);
    dispatch(deleteVideoSuccess(id));
  } catch (err) {
    dispatch(deleteVideoFailure());
  }
};