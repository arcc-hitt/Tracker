import React from 'react'

const Header = () => {
  return (
    <div className='w-auto h-auto flex justify-between items-center'>
        <div className='w-auto min-w-[96px] h-auto min-h-[11px] gap-3'>
            <span className='text-[16px] text-left font-medium leading-[20.83px] text-[#EBE9E8]'>Today’s Goal</span>
        </div>
        <div className='w-[36.13px] h-7'>
            <img src='/assets/heartbeat.gif' alt='Gif' className='w-full h-full' />
        </div>
    </div>
  )
}

export default Header