import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BTMovieBooking from './BTMovieBooking'
import { BTMovieBookingActions } from './redux/slice'
import ChairList from './ChairList'

const ResultBooking = () => {
    const { ChairBooking } = useSelector(state => state.BTMovieBooking)
    const dispatch = useDispatch()
    return (
        <div className='bg2 p-3'>
            <h3 className='text-center'>Thông tin thanh toán</h3>
            <div className="mt-4">
                <div className="d-flex mt-2 gap-2 align-items-center">
                    <div className="Chair Chair-border"></div>
                    <p>Ghế trống</p>
                </div>
                <div className="d-flex mt-2 gap-2 align-items-center">
                    <div className="Chair booking Chair-border"></div>
                    <p>Ghế đang chọn</p>
                </div>
                <div className="d-flex mt-2 gap-2 align-items-center">
                    <div className="Chair booked Chair-border"></div>
                    <p>Ghế đã đặt</p>
                </div>
            </div>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th className='text-center'>Giá</th>
                        <th className='text-center'>Huỷ</th>
                    </tr>
                </thead>
                <tbody>
                    {ChairBooking.map(ghe => {
                        return <tr className='vertical-row'>
                            <td>{ghe.soGhe}</td>
                            <td className='text-center'>{ghe.gia}</td>
                            <td className='text-center'><button className='btn btn-danger' onClick={() => {
                                dispatch(BTMovieBookingActions.removeBooking(ghe))
                            }}>x</button></td>
                        </tr>
                    })}
                    <tr>
                        <td></td>
                        <td className='text-center fw-bold'>{
                            ChairBooking.reduce((total, current) => {
                                return total + current.gia
                            }, 0)
                        }</td>
                        <td></td>
                    </tr>

                </tbody>
                <tfoot>

                </tfoot>
            </table>
            <button className="btn btn-success mt-2" onClick={() => {
                dispatch(BTMovieBookingActions.setChairBooked())
            }}>Thanh toán</button>
        </div>
    )
}

export default ResultBooking
