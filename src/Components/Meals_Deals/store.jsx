import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./action";
export let store=legacy_createStore(reducer,applyMiddleware(thunk))