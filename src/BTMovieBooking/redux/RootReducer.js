import { combineReducers } from "redux";
import { BTMovieBookingReducer } from "./slice";

export const RootReducer = combineReducers({
    BTMovieBooking: BTMovieBookingReducer,
})