import React from 'react'

const Progress = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center'>
            <div className='w-[312px] h-[78px] gap-0 rounded-2xl bg-custom-radial'>
                <div className='w-[209.32px] h-auto min-h-[51.37px] absolute top-[15px] left-20 gap-3'>
                    <div className='w-auto h-auto min-h-[26px] min-w-[196px] gap-2 flex flex-col'>
                        <span className='font-[DM Sans] text-sm font-bold leading-[18.55px] text-left text-[#FFFFFF]'>Your daily goal almost done</span>
                        <span className='font-[DM Sans] text-xs font-normal leading-[18.55px] text-left text-[#E1EAF2]'>4 of 5 completed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress

/*
font-family: DM Sans;
font-size: 12px;
font-weight: 400;
line-height: 18.55px;
text-align: left;

*/