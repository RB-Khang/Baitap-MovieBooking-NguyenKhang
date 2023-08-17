import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BTMovieBookingActions } from './redux/slice'
import cn from 'classnames'


const Chair = ({ Chair }) => {
    const { ChairBooking, ChairBooked } = useSelector((state) => state.BTMovieBooking)
    const dispatch = useDispatch()
    return (
        <div>
            <span className={cn('Chair',
                { 'booking': ChairBooking.find(ghe => ghe.soGhe === Chair.soGhe) },
                { 'booked': ChairBooked.find(ghe => ghe.soGhe === Chair.soGhe) },
                { 'Chair-border': Chair.gia !== 0 },
                { 'text-white fw-bold': Chair.gia === 0 })} onClick={() => {
                    dispatch(BTMovieBookingActions.setChairBooking(Chair))
                }}>{Chair.soGhe}</span>
        </div >
    )
}

export default Chair
