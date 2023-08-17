import React from 'react'
import Chair from './Chair'

const ChairList = ({ data }) => {
    return (
        <div className='mt-5 '>
            {
                data.map(ChairRow => {
                    return <div key={ChairRow.hang} className='d-flex gap-2 mt-3 Chair-row'>
                        <p className='Chair non-border text-white fw-bold'>{ChairRow.hang}</p>
                        {
                            ChairRow.danhSachGhe.map(item => {
                                return <Chair key={item.soGhe} Chair={item}></Chair>
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}

export default ChairList
