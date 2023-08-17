import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    ChairBooking: [],
    ChairBooked: []
}

const BTMovieBookingSlice = createSlice({
    name: 'BTMovieBooking',
    initialState,
    reducers: {
        setChairBooking: (state, action) => {
            if (action.payload.gia !== 0) {
                let index = state.ChairBooking.findIndex(ghe => ghe.soGhe === action.payload.soGhe)
                if (index === -1) {
                    let indexBooked = state.ChairBooked.findIndex(ghe => ghe.soGhe === action.payload.soGhe)
                    if (indexBooked === -1) {
                        state.ChairBooking.push(action.payload)
                    } else return;
                }
                else {
                    state.ChairBooking.splice(index, 1)
                }
            } else return

        },
        setChairBooked: (state, action) => {
            state.ChairBooked = [...state.ChairBooked, ...state.ChairBooking]
            state.ChairBooking = []
        },
        removeBooking: (state, action) => {
            let index = state.ChairBooking.findIndex(ghe => ghe.soGhe === action.payload.soGhe)
            state.ChairBooking.splice(index, 1)

        }
    }

})

export const { reducer: BTMovieBookingReducer, actions: BTMovieBookingActions } = BTMovieBookingSlice