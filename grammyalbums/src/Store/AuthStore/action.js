import axios from "axios"
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes"


export const Actions = (action, Data) => {
    return {
        type: action,
        payload: Data
    }
}


export const loginUser = (loginData) => async (dispatch) => {

    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, loginData)
        localStorage.setItem("artistid", JSON.stringify(res.data.artist._id));
        dispatch(Actions(LOGIN_SUCCESS, res.data.token))
    } catch (err) {
        dispatch(Actions(LOGIN_FAILURE, err))
    }
}

export const logoutUser = () => async (dispatch) => {
    localStorage.clear();
    dispatch(Actions(LOGIN_FAILURE, ""))
}
