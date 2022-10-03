import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const LoginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const LoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data
  };
};

const LoginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        payload: error
    };
};

export const AuthLogout = () =>{
  return {
      type: 'AUTH_LOGOUT',
  }
}

export const AuthLogin = (formData) => {
    return async(dispatch) => {
        dispatch(LoginRequest())
        await axios({
            method: "POST",
            url: `http://192.168.43.117:3003/api/v1/auth/login`,
            data: {
                email: formData.email,
                password: formData.password,
            }
          }).then((res)=> {
            AsyncStorage.setItem('token', res.data.data.token)
            dispatch(LoginSuccess(res.data.data))
        }).catch((err)=> {
            dispatch(LoginError(err.response.data))
        })
    }
};
