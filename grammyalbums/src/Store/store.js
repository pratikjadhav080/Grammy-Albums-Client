import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk";
import { authReducer } from "./AuthStore/reducer";

//thunk in createstore is basically acting as the middleware given below handling all the stuff 

export const store = createStore(
    authReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
