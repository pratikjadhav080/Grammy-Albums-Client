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
        const res = await axios.post('https://reqres.in/api/login', loginData)
        console.log(res.data.token)
        dispatch(Actions(LOGIN_SUCCESS, res.data.token))
    } catch (err) {
        dispatch(Actions(LOGIN_FAILURE, err))
    }
}

export const logoutUser = () => async (dispatch) => {
    localStorage.clear();
    dispatch(Actions(LOGIN_FAILURE, ""))

}
