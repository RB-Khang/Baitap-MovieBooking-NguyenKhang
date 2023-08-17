import React from 'react'
import ChairList from './ChairList'
import ResultBooking from './ResultBooking'
import data from './data.json'

const BTMovieBooking = () => {
    return (
        <div className='container '>
            <h2 className='pt-2 text-center text-white'>Bài tập đặt vé CyberMovie</h2>
            <div className="row">
                <div className="col-8 mt-3 bg2 p-2">
                    <h3 className='bg-warning text-center text-white screen '>SCREEN</h3>
                    <ChairList data={data}></ChairList>
                </div>
                <div className="col-4 mt-3">
                    <ResultBooking></ResultBooking>
                </div>
            </div>
        </div>
    )
}

export default BTMovieBooking
