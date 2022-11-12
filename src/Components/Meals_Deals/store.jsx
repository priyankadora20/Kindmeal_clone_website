import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as Meal_Deal } from "../Meals_Deals/action";
import {reducer as KindMoments} from "../KindMoments/Action"
let rootreducer=combineReducers({Meal_Deal,KindMoments})
export let store=legacy_createStore(rootreducer,applyMiddleware(thunk))