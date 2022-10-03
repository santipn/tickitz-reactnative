import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const GetMoviesRequest = () => {
  return {
    type: "GET_MOVIES_REQUEST",
  };
};

const GetMoviesSuccess = (data) => {
  return {
    type: "GET_MOVIES_SUCCESS",
    payload: data,
  };
};

const GetMoviesError = (error) => {
  return {
    type: "GET_MOVIES_ERROR",
    payload: error,
  };
};

export const GetMovies = () => {
  return (dispatch) => {
    dispatch(GetMoviesRequest());
    axios({
      method: "GET",
      url: "http://192.168.43.117:3003/api/v1/movies",
    })
      .then((res) => {
        dispatch(GetMoviesSuccess(res.data));
        console.log(res)
      })
      .catch((err) => {
        dispatch(GetMoviesError(err.response));
        console.log(err)
      });
  };
};

